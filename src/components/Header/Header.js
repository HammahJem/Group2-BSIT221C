import React from 'react';
import "./Header.scss";
import Navbar from "./Navbar";
import SearchForm from "./SearchForm";

const Header = () => {
  return (
    <header className='header'>
      <Navbar />
      <div className='header-content flex align-center justify-center flex-column text-center'>
        <SearchForm />
        <h1 className='text-white header-title ls-2'>What are your favorite Recipe?</h1>
        <p className='text-uppercase text-white my-3 ls-1'>Searh for our Recipe</p>
      </div>
    </header>
  )
}

export default Header