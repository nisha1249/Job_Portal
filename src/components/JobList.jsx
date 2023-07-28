import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './JobList.css';

const JobList = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products
    .filter(product =>
      product.job.toLowerCase().includes(searchTerm.toLowerCase())
    )
  const handleSearchChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className='bg-color'>
         <div className='bg-search'>
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      </div></div>
      
      <div className='cards'>
        {filteredProducts.map(product => (
          <div className='card' key={product.id}>
            <h2>{product.job}</h2>
        <p style={{color:"grey"}}>{product.company} <tb />{product.date}</p>
         <hr />
         <p>{product.description}</p>
         <Link to={`/jobs/${product.iid}`} ><button className='btn'>View More</button></Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobList;
