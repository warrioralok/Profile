import { useState } from 'react';
import './style.css';
export const StudentRecord = () =>{
    const [studentname,newStudentname] = useState('');
    const [Roll, NewRoll] = useState('');
    const [age,newAge] = useState('');
    const [code, NewCode] = useState('');

    const [studentDetail, newStudentDetail] = useState([]);


    const updateName = (name) =>{
        newStudentname(name);
    }

    const upateRoll = (roll) =>{
        NewRoll(roll)
    }

    const updateAge = (age) => {
        newAge(age);
    }

    const updateCode = (code) =>{
        NewCode(code);
    }

    const formSubmit = (e) =>{
        e.preventDefault();
        if(!studentname || !Roll || !age || !code) return;//checking empty value

        const isDuplicate = studentDetail.some(
            (student) =>
                student.name === studentname &&
                student.roll === Roll &&
                student.age === age &&
                student.code === code
        );

        if (isDuplicate) {
            alert("Duplicate entry! This student already exists.");
            return;
        }
        newStudentDetail((prev) => [
        ...prev,
        { name: studentname, roll: Roll , age:age, code:code}
        ])
        console.log(studentDetail)
        newStudentname('');
        NewRoll('');
        newAge('');
        NewCode('');

    }
    return(
        <>
            <div className="container">
        {/* <!-- Form Section --> */}
        <form onSubmit={formSubmit}>
        <div className="form-container">
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={studentname} onChange={(e) =>updateName(e.target.value)} placeholder="Enter name"/>
            </div>
            <div className="form-group">
                <label htmlFor="roll-number">Roll Number:</label>
                <input type="text" id="roll-number" value={Roll} onChange={(e) => upateRoll(e.target.value)} placeholder="Enter roll number"/>
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input type="number" value={age} onChange={(e) => updateAge(e.target.value)} id="age" min="0" placeholder="Enter age"/>
            </div>
            <div className="form-group">
                <label htmlFor="student-code">Student Code:</label>
                <input type="text" id="student-code" value={code} onChange={(e) => updateCode(e.target.value) } placeholder="Enter student code"/>
            </div>
            <button className="submit-btn">Add Student</button>
        </div>
        </form>
        {/* <!-- Table Section --> */}
        <div className="table-container">
            <div className="table-header">
                <div className="table-cell">Name</div>
                <div className="table-cell">Roll Number</div>
                <div className="table-cell">Age</div>
                <div className="table-cell">Student Code</div>
            </div>
            {/* <!-- Rows will go here --> */}
            {studentDetail.map((data,index) =>{

            return(
             <>   
            <div className="table-row" key={index}>
                <div className="table-cell">{data.name}</div>
                <div className="table-cell">{data.roll}</div>
                <div className="table-cell">{data.age}</div>
                <div className="table-cell">{data.code}</div>
            </div>
            </>
            )
            })}
            {/* <!-- Additional rows as needed --> */}
        </div>
    </div>
        </>
    )
}