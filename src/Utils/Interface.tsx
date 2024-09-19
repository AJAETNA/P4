

export interface StudentDetails {
    studentDetailsId: number;
    courseId: number;
    deptId: number;
    sAddress: string;
    mobileNo: string;
    courseName: string;
    deptName: string;
    student: Student;
}

export interface Student {
    studentId: number;
    studentName: string;
    sUserName: string;
    sCode: string;
    sDate: string;
    details: StudentDetails[];
}

export interface Department {
	deptId : number;
	deptName : String; 
	deptSpecification : String;
}

export interface Course {
	courseId : number ; 
	courseName : String;
	cduration : String;
}


  
  