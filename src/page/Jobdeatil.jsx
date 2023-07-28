import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import jobData from '../data/JobData';
import './Jobdeatils.css';
import Header from '../components/Header';

const Jobdeatil = () => {
   
    const [data] = useState(jobData);
    const { id } = useParams();
    const jobId = id;
    console.log(data[jobId-1].iid);
   
  return (
   <>
   <Header/>
   <div className='job-list'>
    <h2>Job Title: {data[jobId-1].job}</h2>
    <p>Company: {data[jobId-1].company} <tb/> Date: {data[jobId-1].date} </p>
    <hr style={{width:"500px", margin:"20px"}}/>
    <div className='job-details'>
        <p>Description :{data[jobId-1].description} </p>
        <p>Stipend: {data[jobId-1].stipend}</p>
        <p>Duration: {data[jobId-1].duration}</p>
        <p>Location: {data[jobId-1].location}</p>
        <Link to="/"><button className='btn1'>Back to List</button></Link>
    </div>
   
   </div>
   </>
  )
  }

export default Jobdeatil;