import React, { Fragment, useState } from "react";
import axios from 'axios'

const InputBook = () => {
  const [book_name, setBookName] = useState("");
  const [author, setAuthor] = useState("");
  const [borrowedby, setBorrowedBy] = useState("");
  const [borrowdate, setBorrowDate] = useState("");
  const [returndate, setReturnDate] = useState("");

  const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = {book_name:book_name,author:author, borrowedby:borrowedby, borrowdate:borrowdate, returndate:returndate};
      const response= await axios.post('http://127.0.0.1:5500/books',body)
      console.log(response.data)
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };
  return (
    <Fragment>
      <h1 className="text-center mt-5">Books List(Enter and view items)</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
        <input
          type="text"
          className="form-control"
          placeholder="Book Name"
          value={book_name}
          onChange={e => setBookName(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Author"
          value={author}
          onChange={e => setAuthor(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Borrowed By"
          value={borrowedby}
          onChange={e => setBorrowedBy(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Borrow Date"
          value={borrowdate}
          onChange={e => setBorrowDate(e.target.value)}
        />
        <input
          type="text"
          className="form-control"
          placeholder="Return Date"
          value={returndate}
          onChange={e => setReturnDate(e.target.value)}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
  )
}

export default InputBook