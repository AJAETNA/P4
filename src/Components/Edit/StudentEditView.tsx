// import React, { useState, useEffect } from 'react';
// import { Student } from '../../Utils/Interface.tsx';
// import { addStudent, updateStudent, fetchGeneratedCode, getStudentById } from '../../Utils/Service.tsx';

// interface StudentEditViewProps {
//     studentId?: number;
//     onClose: () => void;
//     onSave: () => void;
// }

// const StudentEditView: React.FC<StudentEditViewProps> = ({ studentId, onClose, onSave }) => {
//     const [formData, setFormData] = useState<Student>({
//         studentId: 0,
//         studentName: '',
//         sUserName: '',
//         sCode: '',
//         sDate: '',
//         details: []
//     });
//     const [isLoading, setIsLoading] = useState(false);

//     useEffect(() => {
//         if (studentId) {
//             // Fetch student details if editing
//             fetchStudentDetails();
//         } else {
//             // Fetch new student code for adding
//             fetchGeneratedCode().then(response => {
//                 setFormData(prev => ({ ...prev, sCode: response.data.code }));
//             });
//         }
//     }, [studentId]);

//     const fetchStudentDetails = () => {
//         // Fetch details for editing
//         getStudentById(studentId!)
//             .then(response => {
//                 setFormData(response.data);
//             })
//             .catch(error => console.error('Error fetching student details:', error));
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prev => ({ ...prev, [name]: value }));
//     };

//     const handleSubmit = (e: React.FormEvent) => {
//         e.preventDefault();
//         setIsLoading(true);

//         const request = studentId ? updateStudent(formData) : addStudent(formData);
//         request
//             .then(() => {
//                 onSave();
//                 onClose();
//             })
//             .catch(error => console.error('Error submitting form:', error))
//             .finally(() => setIsLoading(false));
//     };

//     return (
//         <div className="modal-content">
//             <h2>{studentId ? 'Edit Student' : 'Add Student'}</h2>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Student Name:
//                     <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Username:
//                     <input type="text" name="sUserName" value={formData.sUserName} onChange={handleChange} required />
//                 </label>
//                 <label>
//                     Student Code:
//                     <input type="text" name="sCode" value={formData.sCode} readOnly />
//                 </label>
//                 <label>
//                     Date:
//                     <input type="date" name="sDate" value={formData.sDate} onChange={handleChange} required />
//                 </label>
//                 {/* Additional fields for details if required */}
//                 <button type="submit" disabled={isLoading}>
//                     {isLoading ? 'Saving...' : 'Save'}
//                 </button>
//                 <button type="button" onClick={onClose}>Cancel</button>
//             </form>
//         </div>
//     );
// };

// export default StudentEditView;
