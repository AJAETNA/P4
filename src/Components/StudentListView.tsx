// import React, { useEffect } from 'react';
// import useStudentListLogic from './useStudentListLogic.tsx';
// import { Student } from '../Utils/Interface.tsx';


// const StudentListView = () => {
//     const {
//         students,
//         selectedStudent,
//         studentModalIsOpen,
//         selectedStudentId,
//         selectedStudentDetails,
//         openStudentModal,
//         closeStudentModal,
//         handleEdit,
//         handleSelectStudent
//     } = useStudentListLogic();



//     useEffect(() => {
        
//         console.log("selectedStudentDetails :",selectedStudentDetails)
//     }, [selectedStudentDetails]);


//     function handleDelete(student: Student): void {
//         throw new Error('Function not implemented.');
//     }

//     return (
//         <div>
//             <h1>Student List</h1>
//             <button onClick={openStudentModal} className="add-student-btn" type="button">Add Student</button>
//             <table className="student-table">
//                 <thead>
//                     <tr>
//                         <th>Select</th>
//                         <th>Student Name</th>
//                         <th>Student Code</th>
//                         <th>Username</th>
//                         <th>Date</th>
                      
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {students.map(student => (
//                         <tr key={student.studentId}>
//                             <td>
//                                 <input
//                                     type="radio"
//                                     name="selectedStudent"
//                                     value={student.studentId}
//                                     checked={selectedStudentId === student.studentId}
//                                     onChange={() => handleSelectStudent(student.studentId)}
//                                     aria-label={`Select ${student.studentName}`}
//                                 />
//                             </td>
//                             <td>{student.studentName}</td>
//                             <td>{student.sCode}</td>
//                             <td>{student.sUserName}</td>
//                             <td>{student.sDate}</td>
                      
//                             <td>
//                                 <button onClick={() => handleEdit(student)} className="edit-btn" type="button">Edit</button>
//                                 <button onClick={() => handleDelete(student)} className="delete-btn" type="button">Delete</button>

//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>

//             {/* Display selected student details */}
//             {selectedStudentDetails && (
//                 <div className="student-details">
//                     <h2>Selected Student Details</h2>
//                     <table className="details-table">
//                         <thead>
//                             <tr>
//                                 <th><strong>Student Name</strong></th>
//                                 <th><strong>Username</strong></th>
//                                 <th><strong>Student Code</strong></th>
//                                 <th><strong>Course Name</strong></th>
//                                 <th><strong>Department Name</strong></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>{selectedStudentDetails.studentName}</td>
//                                 <td>{selectedStudentDetails.sUserName}</td>
//                                 <td>{selectedStudentDetails.sCode}</td>
//                                 <td>{selectedStudentDetails.details[0].courseName}</td>
//                                 <td>{selectedStudentDetails.details[0].deptName}</td>

//                             </tr>
//                         </tbody>
//                     </table>
//                 </div>
//             )}
// {/* 
//             Student form modal */}
//             {/* <Modal
//                 isOpen={studentModalIsOpen}
//                 onRequestClose={closeStudentModal}
//                 contentLabel="Student Form"
//                 className="modal"
//                 overlayClassName="modal-overlay">
//                 { <StudentForm student={selectedStudent} setStudent={selectedStudent} closeModal={closeStudentModal} /> }
//              </Modal> */}
//         </div>
//     );
// };

// export default StudentListView;

//************************************************************************************************************************************** */

import React from 'react';
import StudentForm from './StudentForm';
import useStudentListLogic from './UseStudentListLogic'

const StudentListView = () => {
    const {
        students,
        selectedStudent,
        studentModalIsOpen,
        openStudentModal,
        closeStudentModal,
        handleEdit,
        handleSelectStudent
    } = useStudentListLogic();

    return (
        <div>
            <h1>Student List</h1>
            <button onClick={openStudentModal}>Add Student</button>
            <ul>
                {students.map(student => (
                    <li key={student.studentId}>
                        {student.studentName}
                        <button onClick={() => handleEdit(student)}>Edit</button>
                        <button onClick={() => handleSelectStudent(student.studentId)}>View Details</button>
                    </li>
                ))}
            </ul>
            {studentModalIsOpen && (
                <StudentForm
                    student={selectedStudent}
                    setStudent={(student) => setSelectedStudent(student)} // Ensure this is correctly implemented
                    closeModal={closeStudentModal}
                />
            )}
        </div>
    );
};

export default StudentListView;




