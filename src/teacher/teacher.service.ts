import { Injectable } from '@nestjs/common';
import { FindStudentResponseDto, StudentResponseDto } from 'src/student/dto/student.dto';
import { teachers } from '../db';
import { FindTeacherResponseDto } from './dto/teacher.dto';

@Injectable()
export class TeacherService {
    private teachers = teachers;
    getTeachers(): FindTeacherResponseDto[]{
        return this.teachers;
    }

    getTeacherById(teacherId:string): FindTeacherResponseDto{
        return this.teachers.find(teacher=>{
            return teacher.id===teacherId;
        });
    }
}
