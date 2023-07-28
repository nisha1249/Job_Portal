
// import React, {useState} from 'react';
// import './JobList.css';
// import {FaSearch} from 'react-icons/fa';
// import Jobcard from './Jobcard';
// import jobData from '../data/JobData';

// const JobList = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [products, setProducts] = useState([]);

//   const handleSearch = () => {
//     const filteredJobs = jobData.filter(product =>
//       product.job.toLowerCase().includes(searchTerm.toLowerCase()));
    
//     setProducts(filteredJobs);
//   };

//const [sortBy, setSortBy] = useState('');
//const filteredDate= sortBy.split("-").reverse().join("-");
//console.log(filteredDate);
//setSortBy(filteredDate);

// if(filteredDate === jobData.data) {
 
//   return(<p>helo</p>)
// }

//   return (
//     <>
//     <div className='bg-color'>
//         <div className='bg-search'>
//            <input type='text' placeholder='search by profile name' 
//            value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />

//            <FaSearch className='search-btn' onClick={handleSearch} />
              {/* <div className='job-filter'>
              <p>Sort By:</p>
              <input type='date' placeholder='sort by date' 
              value={sortBy} onChange={e => setSortBy(e.target.value)}
              />
              </div>  */}
          
//         </div>
//     </div>
//     <Jobcard products={products} />  
//     </>
//   )
// }

// export default JobList



// import React, { useState, useEffect } from 'react';
// import './Jobcard.css';
// import jobData from '../data/JobData';
// import { Link, useParams } from 'react-router-dom';

//  const Jobcard = ({products}) => {
//   const [list, setList] = useState([jobData]);
//   console.log(products);
  
//     async function Lists(){
//     try{
      
//       setList(products);
      
//     }catch(error){
//       console.log("not found data");
//     }
//   };
//     useEffect(()=>{
//         Lists();
//     },[products]);

//   return (
//     <>
//     <div className='cards'>
//     {list.map(data =>
//     <div className='card' key={data.iid}>
//         <h2>{data.job}</h2>
//         <p style={{color:"grey"}}>{data.company} <tb />{data.date}</p>
//         <hr />
//         <p>{data.description}</p>
//         <Link to={`/jobs/${data.iid}`} ><button className='btn'>View More</button></Link>
//     </div>
    
//     )}
//     </div>
//     </>
//   )
// }

// export default Jobcard;