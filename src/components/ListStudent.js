import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'

export class ListStudent extends Component {
  constructor(props) {
    super(props)
    this.state={
      studentlist: []
    }
  }
  async componentDidMount(){
    const response= await axios.get("http://localhost:5000/students")
    this.setState({studentlist: response.data})
    localStorage.setItem("Length",this.state.studentlist.length)
    console.log(this.state.studentlist)
  }
  async deleteitem(id) {
    const response2= await axios.delete(`http://localhost:5000/students/${id}`)
    const response= await axios.get("http://localhost:5000/students")
    this.setState({studentlist: response.data})
  }
  render() {
    return (
      <div>
        <div class="container">
  <h2>Student Table</h2>
  <p>Click on the small button under delete column to delete</p>
  {/* <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>             */}
  <table class="table">
    <thead>
      <tr>
        <th>Student ID</th>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Delete record</th>
        <th>Edit record</th>
      </tr>
    </thead>
    <tbody>
      {this.state.studentlist.map((i)=>{
        return <tr>
        <td>{i.student_id}</td>
        <td>{i.first_name}</td>
        <td>{i.last_name}</td>
        <td><button onClick={()=> this.deleteitem(i.student_id)}></button></td>
        <td><Link to={`/edit/${i.student_id}`}>Edit</Link></td>
      </tr>
      })}
      
    </tbody>
  </table>
</div>
      </div>
    )
  }
}

export default ListStudent