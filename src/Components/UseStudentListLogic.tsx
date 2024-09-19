// import { useState, useEffect } from 'react';
// import { fetchStudents, getStudentById } from '../Utils/Service.tsx';
// import { Student } from '../Utils/Interface.tsx';


// const useStudentListLogic = () => {
//     const [students, setStudents] = useState<Student[]>([]);
//     const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
//     const [studentModalIsOpen, setStudentModalIsOpen] = useState(false);

//     const [selectedStudentId, setSelectedStudentId] = useState<number | null>(null);
//     const [selectedStudentDetails, setSelectedStudentDetails] = useState<Student | null>(null);
  

//     useEffect(() => {
//         fetchStudents()
//             .then(response => setStudents(response.data))
//             .catch(error => console.error(error));
//     }, []);

//     const openStudentModal = () => {
//         setSelectedStudent(null);
//         setStudentModalIsOpen(true);
//     };

//     const closeStudentModal = () => {
//         setStudentModalIsOpen(false);
//     };

//     const handleEdit = (student: Student) => {
//         setSelectedStudent(student);
//         setStudentModalIsOpen(true);
//     };

   

 
//     const handleSelectStudent = (studentId: number) => {
//         setSelectedStudentId(studentId);

//         getStudentById(studentId)
//             .then(response => {
//                 const student = response.data;
//                 setSelectedStudentDetails(student);

                
                
//             })
//             .catch(error => console.error('Error fetching student details:', error));
//     };

//     return {
//         students,
//         selectedStudent,
//         studentModalIsOpen,
//         selectedStudentId,
//         selectedStudentDetails,
       
//         openStudentModal,
//         closeStudentModal,
//         handleEdit,
        
//         handleSelectStudent
//     };
// };

// export default useStudentListLogic;


//********************************************************************** */
import { useState, useEffect } from 'react';
import { fetchStudents, getStudentById, addStudent, updateStudent, deleteStudent } from '../Utils/Service';
import { Student } from '../Utils/Interface';

const UseStudentListLogic = () => {
    const [students, setStudents] = useState<Student[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
    const [studentModalIsOpen, setStudentModalIsOpen] = useState(false);

    useEffect(() => {
        fetchStudents()
            .then(response => setStudents(response.data))
            .catch(error => console.error(error));
    }, []);

    const openStudentModal = () => {
        setSelectedStudent(null); // Reset selected student for new student addition
        setStudentModalIsOpen(true);
    };

    const closeStudentModal = () => {
        setStudentModalIsOpen(false);
    };

    const handleEdit = (student: Student) => {
        setSelectedStudent(student); // Set selected student for editing
        setStudentModalIsOpen(true);
    };

    const handleSelectStudent = (studentId: number) => {
        getStudentById(studentId)
            .then(response => setSelectedStudent(response.data))
            .catch(error => console.error('Error fetching student details:', error));
    };

    return {
        students,
        selectedStudent,
        studentModalIsOpen,
        openStudentModal,
        closeStudentModal,
        handleEdit,
        handleSelectStudent,
        setSelectedStudent // Ensure this is included
    };
};

export default UseStudentListLogic;






