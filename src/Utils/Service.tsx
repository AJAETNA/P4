// import axios from 'axios';
// import { Student, Course, Department } from './Interface.tsx';

// const API_BASE_URL = 'http://localhost:8080';

// export const fetchStudents = () => axios.get<Student[]>(`${API_BASE_URL}/student`);

// export const getStudentById = (studentId: number) => axios.get<Student>(`${API_BASE_URL}/details/${studentId}`);

// export const addStudent = (student: Student) => axios.post(`${API_BASE_URL}/addstudent`, student);

// export const updateStudent = (student: Student) => axios.put(`${API_BASE_URL}/updatestudent/${student.studentId}`, student);

// export const deleteStudent = (studentId: number) => axios.delete(`${API_BASE_URL}/deletestudent/${studentId}`);

// export const fetchGeneratedCode = () => axios.get<{ code: string }>(`${API_BASE_URL}/student/code`);

// export const fetchCourses = () => axios.get<Course[]>(`${API_BASE_URL}/allcourses`);

// export const fetchDepartments = () => axios.get<Department[]>(`${API_BASE_URL}/alldepartments`);

//********************************************************************************************************** */

import axios from 'axios';
import { Student, Course, Department } from './Interface';

const API_BASE_URL = 'http://localhost:8080';

export const fetchStudents = () => axios.get<Student[]>(`${API_BASE_URL}/students`);
export const getStudentById = (studentId: number) => axios.get<Student>(`${API_BASE_URL}/students/${studentId}`);
export const addStudent = (student: Student) => axios.post(`${API_BASE_URL}/students`, student);
export const updateStudent = (student: Student) => axios.put(`${API_BASE_URL}/students/${student.studentId}`, student);
export const deleteStudent = (studentId: number) => axios.delete(`${API_BASE_URL}/students/${studentId}`);
export const fetchCourses = () => axios.get<Course[]>(`${API_BASE_URL}/courses`);
export const fetchDepartments = () => axios.get<Department[]>(`${API_BASE_URL}/departments`);
