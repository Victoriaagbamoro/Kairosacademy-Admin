import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div className="left-sidebar-pro">
            <nav id="sidebar" className="">
                <div className="left-custom-menu-adp-wrap comment-scrollbar">
                    <nav className="sidebar-nav left-sidebar-menu-pro">
                        <ul className="metismenu" id="menu1">
                            <li><Link title="Dashboard" to="/dashboard"><span className="has-arrow">Dashboard</span></Link></li>
                            <li><Link title="Product List" to="/products"><span className="has-arrow">Product List</span></Link></li>
                            <li><Link title="Product Edit" to="/product edit"><span className="has-arrow">Product Edit</span></Link></li>
                            <li><Link title="Product Detail" to="/product detail"><span className="has-arrow">Product Detail</span></Link></li>
                            <li><Link title="Product Cart" to="/product cart"><span className="has-arrow">Product Cart</span></Link></li>
                            <li><Link title="Product Payment" to="/product payment"><span className="has-arrow">Product Payment</span></Link></li>
                            <li><Link title="Analytics" to="/analytics"><span className="has-arrow">Analytics</span></Link></li>
                            <li><Link title="Widgets" to="/widgets"><span className="has-arrow">Widgets</span></Link></li>
                        </ul>
                    </nav>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
