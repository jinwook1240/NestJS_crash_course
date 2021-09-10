export class createStudentDto{//body 형식 지정
    name: string;
    teacher: string
}
export class updateStudentDto{//body 형식 지정
    name: string;
    teacher: string
}
export class FindStudentResponseDto{//getStudent에서 Response를 위한것. 위의 2개와 다른 역할
    id: string;
    name: string;
    teacher: string
}
export class StudentResponseDto{//update 및 create시 Response를 위함
    id: string;
    name: string;
    teacher: string
}