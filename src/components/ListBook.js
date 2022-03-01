import React, { Component } from 'react'
import axios from 'axios'
import {BrowserRouter as Router, Route,Routes,Link} from 'react-router-dom'

export class ListBook extends Component {
  constructor(props) {
    super(props)
    this.state={
     booklist: []
    }
  }
  async componentDidMount(){
    const response= await axios.get("http://localhost:5500/books")
    this.setState({booklist: response.data})
    localStorage.setItem("Length",this.state.booklist.length)
    console.log(this.state.booklist)
  }
  async deleteitem(id) {
    const response2= await axios.delete(`http://localhost:5500/books/${id}`)
    const response= await axios.get("http://localhost:5500/books")
    this.setState({booklist: response.data})
  }
  render() {
    return (
      <div>
        <div class="container">
  <h2>Book Table</h2>
  {/* <p>The .table class adds basic styling (light padding and horizontal dividers) to a table:</p>             */}
  <table class="table">
    <thead>
      <tr>
        <th>Book Name</th>
        <th>Author</th>
        <th>Borrowed By</th>
        <th>Borrow Date</th>
        <th>Return Date</th>
      </tr>
    </thead>
    <tbody>
      {this.state.booklist.map((i)=>{
        return <tr>
        <td>{i.book_name}</td>
        <td>{i.author}</td>
        <td>{i.borrowedby}</td>
        <td>{i.borrowdate}</td>
        <td>{i.returndate}</td>
      </tr>
      })}
      
    </tbody>
  </table>
</div>
      </div>
    )
  }
}

export default ListBook