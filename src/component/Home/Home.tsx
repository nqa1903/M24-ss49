import React from "react";
import "./Home.css";
import { Outlet,Link,NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <>
      <nav>
            {/* <Link to="/about">about</Link>
            <Link to="/news">news</Link>
            <Link to="/contact">contact</Link> */}
            {/* sinh ra thêm NavLink */}
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/News'>News</NavLink>
            <NavLink to='/Contact'>Contact</NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
