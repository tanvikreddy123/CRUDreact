import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './index.css'

const Navlinks = {
    color: "black",
    textDecoration: "none",
    marginRight: "10px"
}
export default class Navbar extends Component {
    render() {
        return (
            <header className='navbar'>
                <div className='navbar__title navbar__item'>CRUD</div>
                <Link to="/home" style={Navlinks}>Home</Link>
                <Link to="viewstu/" style={Navlinks}>ViewStudent</Link>
                <Link to="/addStu" style={Navlinks}>Addstudent</Link>
                <Link to="/updateStu" style={Navlinks}>UpdateStudent</Link>
            </header>
        )
    }
}
