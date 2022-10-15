import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React,{useState, useEffect, Component} from 'react';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import CreateUserComponent from './CreateUserComponent';




const Userprofile = () => {
  const [userProf, setuserProf] = useState([]);
  const [state, setstate] = useState([]);
  const fetchUser = () => {
    axios.get("http://localhost:8080/user/all").then( res => {
      console.log(res.data);
      setuserProf(res.data);
      console.log(userProf);
    });
  };

  /*this.state = {
    nom: '',
    prenom: '',
  }*/

  useEffect(() => {
    fetchUser();
  }, []);
  
  return userProf.map((data, index ) => {
    return (
    <div>
      <table  class="table text-gray-400 border-separate space-y-6 text-sm">
                            <thead class="bg-blue-500 text-white">
                                <tr>
                                    <th class="p-3">Name</th>
                                    <th class="p-3 text-left">Mail</th>
                                    <th class="p-3 text-left">Phone</th>
                                    <th class="p-3 text-left">Blood Type</th>

                                    <th class="p-3 text-left">Action</th>
                                </tr>
                            </thead>
                            
                            <tbody>

                                <tr class="bg-blue-200 lg:text-black">
                                    <td class="p-3 font-medium capitalize">{data.nom}</td>
                                    <td class="p-3">{data.prenom}</td>
                                    <td class="p-3">{data.age}</td>
                                    <td class="p-3 uppercase">{data.cin}</td>

                                    <td class="p-3">
                                       
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
     
    
    </div>
      
    )
  }) 

  return (
      <div>
        <h1>walo</h1>
      </div>
  )

};







function App() {
  return (
   <div>
      <Router>
        <Routes>
          <Route path='/adduser' element={<CreateUserComponent/>}></Route>
          <Route path='/' element={<Userprofile/>} ></Route>
        </Routes>

      </Router>

   </div>
  );
}

export default App;
