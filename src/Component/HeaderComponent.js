import React from 'react'
// import { Link } from 'react-router-dom';

const HeaderComponent = () => {
  return (
    <div>
        <header>
            <nav className='navbar navbar-dark bg-dark'>
                <a className="navbar-brand text-center" href="/" >Employee Management System</a>
                {/* <Link className="navbar-brand text-center" to="/">Employee Management System</Link> */}
            </nav>
        </header>
    </div>
  )
}

export default HeaderComponent