import React from 'react';
import Header from '../components/Header';
import JobList from '../components/JobList';
import products from '../data/JobData';

const Homepage = () => {
  return (
    <>
    <Header/>
    <JobList products={products}/>
  </>
  )
}

export default Homepage;