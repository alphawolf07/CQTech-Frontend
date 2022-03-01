import React, { Fragment, useState } from "react";
import axios from 'axios'

const InputStudent = () => {
  const [student_id, setID] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { student_id:student_id, first_name:first_name, last_name:last_name};
      const response= await axios.post('http://127.0.0.1:5000/students',body)
      console.log(response.data)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Student List</h1>
      
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Student ID"
          value={student_id}
          onChange={e => setID(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="First Name"
          value={first_name}
          onChange={e => setFirstName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Last Name"
          value={last_name}
          onChange={e => setLastName(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputStudent