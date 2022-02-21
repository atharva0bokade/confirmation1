import React  from 'react'
import { useState, useEffect } from 'react';
import Axios from 'axios';
import './req.css';
import {Route, Link, Router} from 'react-router-dom';
import emailjs from 'emailjs-com';

function Requests_Slot1(props) {
  
  const [request1_list,setRequest1_list]=useState([]);
  

 
 
  
  
  useEffect(()=>{
   
    Axios.get('https://appointment0backend.herokuapp.com/requests1').then((res)=>{
      setRequest1_list(res.data);
      console.log(res.data);
      
    }
    )
  },[]);
  const approve=(id)=>{
    Axios.put("https://appointment0backend.herokuapp.com/approve",{
      id:id,
      approve:"Approved",
      
    });
    
    
    
  }
  const reject=(id)=>{
    Axios.put("https://appointment0backend.herokuapp.com/approve",{
      id:id,
      approve:"Rejected",
    });
    
    
  }
    
    return (
    
      <div className="requests">
        <h4 id="time">9am to 10am</h4>
      <div className="list-group">
        {request1_list.map((val,key)=>{
          return(
            <div className="list-group-item list-group-item-action list-group-item-danger" >Name : {val.userName}   Email : {val.email} Reason : {val.reason} <button type="submit" id ="btn_req" onClick={()=>approve(val._id)} className="btn btn-success btn-sm">Approve</button>
            <button type="submit" id ="btn_req1" onClick={()=>reject(val._id)} className="btn btn-danger btn-sm">Reject</button>
            </div>
          );
        })}
        
      {/* <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div>
      <div className="list-group-item list-group-item-action list-group-item-danger"><button type="button" id ="btn_req" className="btn btn-danger btn-sm">See Requests</button></div> */}
      
    </div>
    </div>
    );
  }
  export default Requests_Slot1;
  