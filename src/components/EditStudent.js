import React, { Component } from 'react'
import axios from 'axios'

export class EditStudent extends Component {
    constructor(props) {
        super(props)
        this.state={
            student_id:0,
            first_name:"",
            last_name:""
        }
    }
    async componentDidMount() {
        const response=await axios.get(`http://127.0.0.1:5000/students/${this.props.id}`)
        this.setState({student_id:response.data.student_id, first_name:response.data.first_name, last_name:response.data.last_name})
    }
    Submitedit = async ()=>{
        const body={student_id:this.state.student_id, first_name:this.state.first_name, last_name:this.state.last_name}
        const response=axios.put(`http://127.0.0.1:5000/students/${this.props.id}`, body)
    }
    handleid= (e)=>{
        console.log(e.target.value)
        this.setState({student_id:e.target.value})
    }
    handlefirstname= (e)=>{
        console.log(e.target.value)
        this.setState({first_name:e.target.value})
    }
    handlelastname= (e)=>{
        this.setState({last_name:e.target.value})
    }
  render() {
    return (
      <div>
          <form class="form-inline" onSubmit={this.Submitedit}>
  <label for="email">StudentID:</label>
  <input type="number" value={this.state.student_id} class="form-control" placeholder="Enter email" id="email" onChange={this.handleid}/>
  <label for="pwd">FirstName:</label>
  <input type="text" value= {this.state.first_name} class="form-control" placeholder="Enter first name" id="pwd" onChange={this.handlefirstname}/>
  <label for="pwd">FirstName:</label>
  <input type="text" value= {this.state.last_name}class="form-control" placeholder="Enter last name" id="pwd" onChange={this.handlelastname}/>
  <button type="submit" class="btn btn-info">Edit</button>
</form>
      </div>
    )
  }
}

export default EditStudent