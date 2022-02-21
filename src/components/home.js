import React from 'react'
import { useState } from 'react';
import Axios from 'axios';
import './homeStyle.css'
import {Route, Link, Router} from 'react-router-dom';

function Home() {
    return (
      <div className="timings">
      <div className="list-group">
        
      <div className="list-group-item list-group-item-action list-group-item-danger">9am to 10am<Link to ="/requests_slot1"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></Link></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">11am to 12pm<Link to ="/requests_slot2"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></Link></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">1pm to 3pm<Link to ="/requests_slot3"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></Link></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">3pm to 4pm<Link to ="/requests_slot4"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></Link></div>
      <div className="list-group-item list-group-item-action list-group-item-danger">4pm to 5pm<Link to ="/requests_slot5"><button type="button" id ="btn_req2" className="btn btn-danger btn-sm">Requests</button></Link></div>
      <Link to ="/pending"><button type="button" id ="pending_btn" className="btn btn-warning btn-sm">Pending</button></Link>
      <Link to ="/accepted"><button type="button" id ="accepted_btn" className="btn btn-success btn-sm">Accepted</button></Link>
      <Link to ="/rejected"><button type="button" id ="rejected_btn" className="btn btn-danger btn-sm">Rejected</button></Link>
      
    </div>
    </div>
    );
  }
  
  export default Home;
  