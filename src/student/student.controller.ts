import {Body, Controller, Get, Param, Post, Put, ParseUUIDPipe} from "@nestjs/common"
import {createStudentDto, updateStudentDto, FindStudentResponseDto, StudentResponseDto} from "./dto/student.dto"
import { StudentService } from "./student.service";


@Controller('students') // /students 라우팅
export class StudentController{

    constructor(private readonly studentService: StudentService){

    }
    @Get()
    getStudents(): FindStudentResponseDto[]{
        return this.studentService.getStudents();
    }
    @Get('/:studentId')
    getStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId:string
    ): FindStudentResponseDto{
        return this.studentService.getStudentById(studentId);
    }
    @Post()
    createStudent(
        @Body() body: createStudentDto
    ): StudentResponseDto{
        return this.studentService.createStudent(body);
    }
    @Put('/:studentId')
    updateStudentById(
        @Param('studentId', new ParseUUIDPipe()) studentId:string,
        @Body() body: updateStudentDto
    ): StudentResponseDto{
        return this.studentService.updateStudentById(body, studentId);
    }
}