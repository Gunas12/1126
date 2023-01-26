import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Outlet } from 'react-router-dom';

function Index() {
  return (
    <>
    <div className='container container1'>
    <nav className='navbar1'>
       <div className='navbar11'><div><span className='icon'><img src='https://preview.colorlib.com/theme/course/images/logo.png' alt="icon"/></span> <i className='h31'>Course</i>
       </div><ul>
            <li><Link className='link' to="/">Home</Link></li>
            <li><Link  className='link' to="add">Add</Link></li>
            <li>Courses</li>
            <li>Elements</li>
            <li>News</li>
            <li>Contact</li>
        </ul>
        <div className='tel'><i class="fa-solid fa-phone-volume"></i><span>+43 4566 7788 2457</span></div></div>
        </nav>
    </div>
    <Outlet/>
    <footer className='footer'>
       <div className='container'>
       <hr/>
        <div className='row1'>
        <p>Copyright ©2023 All rights reserved | This template is made with <i class="fa-solid fa-heart"></i> by Colorlib</p>
      
        
<div>
<i class="fa-brands fa-linkedin-in"></i><i class="fa-brands fa-instagram"></i>
<i class="fa-brands fa-facebook"></i>
<i class="fa-brands fa-twitter"></i></div>

        </div>
       </div>
    </footer>
    </>
  )
}

export default Index