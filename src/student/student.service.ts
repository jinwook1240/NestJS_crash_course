import { Injectable } from '@nestjs/common';
import {students} from '../db';
import { createStudentDto, FindStudentResponseDto, StudentResponseDto, updateStudentDto } from './dto/student.dto';
import {v4 as uuid} from "uuid";

@Injectable()
export class StudentService {

    private students = students;

    getStudents(): FindStudentResponseDto[]{
        return this.students;
    }

    getStudentById(studentId: string): FindStudentResponseDto{
        return this.students.find(student=> {
            return student.id ===studentId;
        });
    }
    createStudent(payload: createStudentDto): StudentResponseDto{
        let newStudent = {
            id: uuid(),
            ...payload
        };
        this.students.push(newStudent);
        return newStudent;
    }
    updateStudentById(payload:updateStudentDto, studentId: string): StudentResponseDto{
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student =>{
            if(student.id===studentId){
                updatedStudent = {
                    id: studentId,
                    ...payload
                }
                return updatedStudent;
            }
            else return student;
        });

        this.students = updatedStudentList;

        return updatedStudent;
    }

    // src/teacher/student
    getStudentsByTeacherId(teacherId: string): FindStudentResponseDto[]{
        return this.students.filter(student=>{
            return student.teacher===teacherId;
        })
    }
    updateStudentTeacher(teacherId: string, studentId: string): StudentResponseDto{
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map(student =>{
            if(student.id===studentId){
                updatedStudent = {
                    ...student,
                    teacher: teacherId
                }
                return updatedStudent;
            }
            else return student;
        });

        this.students = updatedStudentList;
        return updatedStudent;
    }
}
