import { ShoppingCart, Menu, X, Search } from 'lucide-react';
import React, { useState} from 'react'
import { Link,useLocation} from 'react-router-dom';

const Navbar = ({ cart, setShowCart, searchterm, setSearchterm }) => {
    const [open, setIsOpen] = useState(false);
    const location = useLocation();

    return (
        <div className="sticky top-0 z-50 bg-pink-100">

            <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-5">

                {/* LOGO */}
                <div className="flex gap-2">
                    <h1 className="text-2xl font-bold text-orange-500">Foodie</h1>
                    <span className="text-2xl font-bold">🍔</span>
                </div>

                {/* DESKTOP LINKS */}
                <div className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-orange-500">Home</Link>
                    <Link to="/menu" className="hover:text-orange-500">Menu</Link>
                    <Link to="/about" className="hover:text-orange-500">About</Link>
                    <Link to="/contact" className="hover:text-orange-500">Contact</Link>
                </div>


                {/* RIGHT SIDE */}
                <div className="flex items-center gap-3">

                    {/* DESKTOP ONLY */}
                    <div className="hidden md:flex items-center gap-3 ">
                        <div className=" flex gap-1">
                            <div className="flex items-center  bg-orange-500 rounded-full h-9 w-9 justify-center  px-3 py-1">
                                <button><Search color="#ffffff" /></button>
                            </div>

                            {location.pathname === "/" &&(
                            <input type="text"
                                value={searchterm}
                                onChange={(e) => setSearchterm(e.target.value)}
                                placeholder="Search for the food u love"
                                className="text-sm px-7 py-1 bg-transparent focus:outline-none border-orange-500 border border-1 rounded-4xl  text-gray-600" />
                        )}
                        </div>

                        <button onClick={() => setShowCart(true)}
                            className="relative flex items-center gap-2 text-white bg-orange-500 py-2 px-4 rounded-full">
                            <ShoppingCart size={18} />Order Now
                            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1">
                                {cart.length}
                            </span>
                        </button>
                    </div>

                    {/* HAMBURGER */}
                    <button
                        className="md:hidden"
                        onClick={() => setIsOpen(!open)}
                    >
                        {open ? <X /> : <Menu />}
                    </button>
                </div>

            </nav>

            {/* MOBILE MENU */}
            {open && (
                <div className="md:hidden bg-white px-6 py-4 space-y-4 shadow-md flex flex-col">

                    {/* LINKS */}
                    <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                    <Link to="/menu" onClick={() => setIsOpen(false)}>Menu</Link>
                    <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>

                    {/* EXTRA (vertical) */}
                    <div className="flex flex-col gap-3 pt-4 border-t">


                        <div className="flex items-center gap-4 justify-center">
                            <ShoppingCart size={24} />
                            <button className="text-white bg-orange-500 py-1 px-10 text-lg rounded-full">
                                Order Now
                            </button>

                        </div>


                    </div>
                </div>
            )}

        </div>
    );
};

export default Navbar;