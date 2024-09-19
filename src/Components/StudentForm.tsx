import React from 'react';
import { Student } from '../Utils/Interface';

const StudentForm = ({ student, setStudent, closeModal }: {
    student: Student | null;
    setStudent: React.Dispatch<React.SetStateAction<Student | null>>;
    closeModal: () => void;
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (student) {
            setStudent({ ...student, [name]: value });
        }
    };

    return (
        <form>
            <div>
                <label>Name:</label>
                <input 
                    type="text" 
                    name="studentName" 
                    value={student?.studentName || ''} 
                    onChange={handleChange} 
                />
            </div>
            {/* Add more fields as needed */}
            <button type="button" onClick={closeModal}>Close</button>
        </form>
    );
};

export default StudentForm;
