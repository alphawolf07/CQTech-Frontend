import React,{Fragment} from 'react'
import EditStudent from './components/EditStudent';
import InputStudent from './components/InputStudent'
import ListStudent from './components/ListStudent';
import InputBook from './components/InputBook'
import ListBook from './components/ListBook'
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom'
import axios from 'axios'

function App() {
  const student=[]
  for (let i = 0; i <20;i++)
  {
    student.push(i)
  }
  return (
   <Fragment>
     <Router>
     <Routes>
       <Route path="/" element={<><InputStudent/> <ListStudent/> <InputBook/> <ListBook/></>}/>
       {student.map((i)=>{
         return <Route path={`/edit/${i}`} element={<EditStudent id={i}/>}/>
       })}
         
       
       <Route path="/edit" element={<EditStudent/>}/>
     </Routes>
     </Router>
   </Fragment>
  );
}

export default App;
