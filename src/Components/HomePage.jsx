import { ChefHat, Clock, Heart, Leaf, MapPin, MessageSquare, MoveRight, Phone, Send, ShoppingCart, Star, Truck } from 'lucide-react'
import { Toaster, toast } from 'react-hot-toast';
import React, { useState } from 'react'
import burgerimg from '../assets/burgerimg.jpg'
import noodlesimg from '../assets/noodlesimg.jpg'
import foodimg from '../assets/foodimg.jpg'
import pastaimg from '../assets/pastaimg.jpg'
import pizzaimg from '../assets/pizzaimg.jpg'
import mushroomimg from '../assets/mushroomimg.jpg'
import eggimg from '../assets/eggimg.jpg'
import marghetaimg from '../assets/marghetaimg.jpg'
import cakeimg from '../assets/cakeimg.jpg'
import Lemonadeimg from '../assets/Lemonadeimg.jpg'
import Tiramisuimg from '../assets/Tiramisuimg.jpg'
import makingfoodimg from '../assets/makingfoodimg.jpg'
import frenchfriesimg from '../assets/frenchfriesimg.jpg'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from 'react-router-dom';
import Navbar from './Navbar';


const menuItems = [
    {
        id: 1,
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with melted cheese and fresh veggies",
        price: 12.99,
        image: burgerimg,
        category: "Burgers"
    },
    {
        id: 2,
        name: "Pepperoni Pizza",
        description: "Classic pepperoni with mozzarella and tomato sauce",
        price: 18.99,
        image: pizzaimg,
        category: "Pizza"
    },
    {
        id: 3,
        name: "Mushroom Swiss Burger",
        description: "Sautéed mushrooms with Swiss cheese",
        price: 13.99,
        image: mushroomimg,
        category: "Burgers"
    },
    {
        id: 4,
        name: "BBQ Bacon Burger",
        description: "Smoky BBQ sauce, crispy bacon, caramelized onions",
        price: 14.99,
        image: eggimg,
        category: "Burgers"
    },
    {
        id: 5,
        name: "Margherita Pizza",
        description: "Fresh basil, tomatoes, and buffalo mozzarella",
        price: 16.99,
        image: marghetaimg,
        category: "Pizza"
    },
    {
        id: 6,
        name: "Chocolate Lava Cake",
        description: "Warm chocolate cake with molten center",
        price: 8.99,
        image: cakeimg,
        category: "Desserts"
    },
    {
        id: 7,
        name: "Fresh Lemonade",
        description: "Freshly squeezed lemons with mint",
        price: 4.99,
        image: Lemonadeimg,
        category: "Drinks"
    },
    {
        id: 8,
        name: "Tiramisu",
        description: "Classic Italian dessert with mascarpone and espresso",
        price: 9.99,
        image: Tiramisuimg,
        category: "Desserts"
    }
];

const HomePage = ({ cart, setCart, showCart, setShowCart, searchterm, setSearchterm }) => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [wishlist, setWishlist] = useState([]);



    const filteredItems = menuItems.filter(
        (item) =>
            (activeCategory === "All" || item.category === activeCategory) &&
            item.name.toLowerCase().includes(searchterm.toLowerCase())
    );

    const addToCart = (item) => {
        setCart([...cart, item]);
        toast.success(`${item.name} added to cart!`);
    }

    const removeFromCart = (index) => {
        const updatedCart = [...cart];
        updatedCart.splice(index, 1);
        setCart(updatedCart);
        toast.error('Item removed from cart');
    }

    const getcartTotal = () => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }

    const togglewishlist = (item) => {
        const exists = wishlist.find(i => i.id === item.id);
        if (exists) {
            setWishlist(wishlist.filter(i => i.id !== item.id));
            toast.error('Removed from wishlist');
        }
        else {
            setWishlist([...wishlist, item]);
            toast.success('Added to wishlist');
        }
    };
    return (
        <div>

            <div className="overflow-x-hidden">


                {/* herosection */}
                <div className="bg-pink-100 py-12 justify-center items-center sm:py-16 px-4 sm:px-8 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12 overflow-hidden">

                    {/* Left Side */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        {/* Tag */}
                        <div className="text-orange-600 text-xs sm:text-sm font-bold bg-orange-500/10 py-2 px-4 inline-block rounded-full">
                            ⭐ #1 Food Delivery App
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold py-4 leading-tight text-black">
                            Delicious Food <br />
                            <span className="text-orange-600">Delivered Fast</span>
                        </h1>

                        {/* Emoji */}
                        <div className="text-4xl sm:text-5xl py-2">🍕</div>

                        {/* Paragraph */}
                        <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                            Experience the taste of happiness delivered right to your doorstep.
                            Fresh ingredients, authentic recipes, and lightning-fast delivery.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mt-8">

                            <button
                                className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-full text-lg font-semibold flex items-center justify-center gap-2 transition ">
                                Order Now
                                <MoveRight color="#fff" size={18} />
                            </button>

                            <button className="bg-white hover:bg-gray-100 text-black px-6 py-2 rounded-full text-lg font-semibold shadow">
                                View Menu
                            </button>

                        </div>

                        {/* Features */}
                        <div className="mt-10">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">

                                {/* Delivery */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500/20 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                                        <Clock color="#f27907" strokeWidth={2} size={24} />
                                    </div>
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold">30 min</h1>
                                        <p className="text-gray-500 text-sm sm:text-base">Delivery</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500/20 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                                        <Star color="#f27907" strokeWidth={2} size={24} />
                                    </div>
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold">4.9</h1>
                                        <p className="text-gray-500 text-sm sm:text-base">Rating</p>
                                    </div>
                                </div>

                                {/* Free Delivery */}
                                <div className="flex items-center gap-4">
                                    <div className="bg-orange-500/20 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                                        <Truck color="#f27907" strokeWidth={2} size={24} />
                                    </div>
                                    <div>
                                        <h1 className="text-xl sm:text-2xl font-bold">Free</h1>
                                        <p className="text-gray-500 text-sm sm:text-base">Delivery $30+</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    {/* Right Side */}
                    <div className="relative w-full lg:w-1/2 flex justify-center mt-8 lg:mt-0">

                        {/* Main Image */}
                        <div className="relative aspect-square w-[280px] sm:w-[360px] md:w-[430px] lg:w-[500px] rounded-full bg-orange-100 p-6 overflow-hidden">
                            <img
                                src={burgerimg}
                                alt="burger"
                                className="w-full h-full object-cover rounded-full shadow-2xl hover:scale-105 transition duration-500"
                            />
                        </div>

                        {/* Floating Left Top */}
                        <div className="absolute left-8 top-12 sm:left-6 bg-white p-2 sm:p-3 rounded-3xl shadow-xl">
                            <img
                                src={noodlesimg}
                                alt=""
                                className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl object-cover"
                            />
                        </div>

                        {/* Floating Bottom */}
                        <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-white p-2 sm:p-3 rounded-3xl shadow-xl">
                            <img
                                src={foodimg}
                                alt=""
                                className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl object-cover"
                            />
                        </div>

                        {/* Floating Right */}
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 sm:right-4 bg-white p-2 sm:p-3 rounded-3xl shadow-xl">
                            <img
                                src={pastaimg}
                                alt=""
                                className="w-14 h-14 sm:w-18 sm:h-18 rounded-2xl object-cover"
                            />
                        </div>

                    </div>

                </div>


                {/* features */}

                <div className='max-w-5xl py-12 px-10 mx-auto'>

                    <div className='text-center'>
                        <span className='text-orange-600 bg-orange-500/15 py-1 px-4 rounded-3xl'>
                            Our Menu
                        </span>

                        <h1 className='text-5xl font-bold py-2'>
                            Featured <span className='text-orange-600'>Dishes</span>
                        </h1>

                        <p className='text-gray-600 p-4'>
                            Explore our most popular items, crafted with love and the finest ingredients
                        </p>
                    </div>



                    {/* FILTER BUTTONS */}

                    <div className='grid grid-cols-2 gap-4 lg:flex justify-center gap-4 py-6 '>
                        {["All", "Burgers", "Pizza", "Desserts", "Drinks"].map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1 rounded-full transition 
                                 ${activeCategory === cat
                                        ? "bg-orange-500 text-white"
                                        : "bg-gray-200 hover:bg-orange-400 hover:text-white"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>


                    {/* GRID */}
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        {filteredItems.map((item) => (
                            <div
                                key={item.id}
                                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition duration-300 flex flex-col"
                            >
                                {/* Image */}
                                <div className="relative">

                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-48 object-cover"
                                    />

                                    {/* Wishlist Button */}
                                    <button
                                        onClick={() => togglewishlist(item)}
                                        className="absolute top-0 right-1 bg-white p-2 rounded-full shadow-md text-xl hover:scale-110 transition"
                                    >
                                        {wishlist.find(i => i.id === item.id) ? "❤️" : "🤍"}
                                    </button>

                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">

                                    {/* Title */}
                                    <h1 className="font-bold text-xl">{item.name}</h1>

                                    {/* Description (fixed height trick) */}
                                    <p className="text-gray-600 text-sm mt-2 min-h-[40px]">
                                        {item.description}
                                    </p>

                                    {/* Spacer pushes bottom content down */}
                                    <div className="flex-1"></div>

                                    {/* Bottom section ALWAYS aligned */}
                                    <div className="flex justify-between items-center mt-4">
                                        <span className="text-orange-600 font-bold text-xl">
                                            ${item.price}
                                        </span>

                                        <button
                                            onClick={() => addToCart(item)}
                                            className="bg-orange-500 text-white px-3 py-1 rounded-full flex items-center gap-1 hover:bg-orange-600 transition">
                                            <ShoppingCart size={16} />
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* cta */}

                <div className='bg-gradient-to-r from-pink-200 via-orange-100 to-orange-200  '>
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-4 sm:px-6 md:px-10 py-12 sm:py-16 lg:py-20">

                        {/* Left Image Side */}
                        <div className="relative w-full lg:w-1/2 flex justify-center">

                            {/* Main Image */}
                            <div className="relative aspect-square w-[280px] sm:w-[360px] md:w-[430px] lg:w-[500px] overflow-hidden rounded-3xl bg-primary/5 p-4 sm:p-6">
                                <img
                                    src={makingfoodimg}
                                    alt="Food Making"
                                    className="rounded-3xl h-full w-full object-cover shadow-2xl transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* Floating Card */}
                            <div className="absolute bottom-1  left-1/2 -translate-x-1/2 sm:bottom-6 bg-white px-4 py-2 flex items-center gap-3 rounded-2xl shadow-xl">
                                <span className="text-3xl">🍽️</span>

                                <div>
                                    <h1 className="font-extrabold text-2xl sm:text-3xl">15+</h1>
                                    <p className="text-sm sm:text-base text-gray-500">
                                        Years Experience
                                    </p>
                                </div>

                            </div>
                        </div>

                        {/* Right Content Side */}
                        <div className="w-full lg:w-1/2 text-center lg:text-left">

                            {/* Tag */}
                            <span className="inline-block font-medium text-sm text-orange-600 py-2 px-4 rounded-full bg-orange-500/20">
                                About Us
                            </span>

                            {/* Heading */}
                            <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-black">
                                We Serve <span className="text-orange-600">Happiness</span> <br />
                                on Every Plate
                            </h1>

                            {/* Paragraphs */}
                            <p className="mt-5 text-base sm:text-lg text-gray-500 leading-relaxed">
                                Founded in 2009, Foodie has been serving the community with delicious,
                                high-quality meals made from the freshest ingredients.
                            </p>

                            <p className="mt-4 text-base sm:text-lg text-gray-500 leading-relaxed">
                                From our kitchen to your home, we ensure every meal is a delightful
                                experience. Food brings people together.
                            </p>

                            {/* Features Grid */}
                            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">

                                {/* Item 1 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <ChefHat color="#f27826" />
                                    </div>

                                    <div>
                                        <h1 className="font-bold text-black">Expert Chefs</h1>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Talented chefs with years of experience
                                        </p>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <Leaf color="#f27826" />
                                    </div>

                                    <div>
                                        <h1 className="font-bold text-black">Fresh Ingredients</h1>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            We use only premium fresh ingredients
                                        </p>
                                    </div>
                                </div>

                                {/* Item 3 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <Clock color="#f27826" />
                                    </div>

                                    <div>
                                        <h1 className="font-bold text-black">Fast Delivery</h1>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Quick and reliable doorstep delivery
                                        </p>
                                    </div>
                                </div>

                                {/* Item 4 */}
                                <div className="flex items-start gap-4">
                                    <div className="bg-orange-500/20 w-12 h-12 rounded-xl flex items-center justify-center">
                                        <Heart color="#f27826" />
                                    </div>

                                    <div>
                                        <h1 className="font-bold text-black">Made With Love</h1>
                                        <p className="text-gray-600 text-sm sm:text-base">
                                            Every meal prepared with care & passion
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                    {/* footer */}

                    <footer className="bg-[#261d1a] overflow-hidden">

                        {/* Top Subscribe Section */}
                        <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col lg:flex-row items-center justify-between gap-6">

                            {/* Text */}
                            <div className="text-center lg:text-left">
                                <h1 className="text-2xl sm:text-3xl font-semibold text-white">
                                    Subscribe to Our Newsletter
                                </h1>

                                <p className="text-sm sm:text-lg text-[#b9b1ae] mt-2">
                                    Get exclusive offers and updates delivered to your inbox
                                </p>
                            </div>

                            {/* Input */}
                            <div className="flex  sm:flex-row items-center gap-3 w-full lg:w-auto">

                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                    className="w-full sm:w-[260px] px-4 py-3 rounded-full border border-gray-500 bg-transparent text-white outline-none"
                                />

                                <button className="bg-orange-500 hover:bg-orange-600 transition text-white px-6 py-3 rounded-full flex items-center gap-2">
                                    Subscribe
                                    <Send size={18} />
                                </button>

                            </div>
                        </div>

                        <hr className="border-white/10" />

                        {/* Main Footer */}
                        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

                            {/* Brand */}
                            <div>
                                <div className="flex items-center gap-3">
                                    <h1 className="text-3xl font-bold text-orange-500">Foodie</h1>
                                    <span className="text-3xl">🍔</span>
                                </div>

                                <p className="text-[#b9b1ae] mt-4 leading-relaxed">
                                    Delivering happiness one meal at a time. Fresh, delicious food made
                                    with love.
                                </p>

                                {/* Social Icons */}
                                <div className="flex gap-4 mt-6">

                                    <a href="#">
                                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                            <FaFacebookF className="text-blue-500" />
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                            <FaInstagram className="text-pink-500" />
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                            <FaTwitter className="text-blue-400" />
                                        </div>
                                    </a>

                                    <a href="#">
                                        <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center">
                                            <FaYoutube className="text-red-500" />
                                        </div>
                                    </a>

                                </div>
                            </div>

                            {/* Quick Links */}
                            <div>
                                <h4 className="text-white text-xl font-bold">Quick Links</h4>

                                <ul className="mt-5 space-y-3 text-[#b9b1ae]">
                                    <li className="hover:text-orange-500 cursor-pointer">Home</li>
                                    <li className="hover:text-orange-500 cursor-pointer">Menu</li>
                                    <li className="hover:text-orange-500 cursor-pointer">About Us</li>
                                    <li className="hover:text-orange-500 cursor-pointer">Contact</li>
                                </ul>
                            </div>

                            {/* Menu */}
                            <div>
                                <h4 className="text-white text-xl font-bold">Our Menu</h4>

                                <ul className="mt-5 space-y-3 text-[#b9b1ae]">
                                    <li className="hover:text-orange-500 cursor-pointer">Burgers</li>
                                    <li className="hover:text-orange-500 cursor-pointer">Pizza</li>
                                    <li className="hover:text-orange-500 cursor-pointer">Desserts</li>
                                    <li className="hover:text-orange-500 cursor-pointer">Drinks</li>
                                </ul>
                            </div>

                            {/* Contact */}
                            <div>
                                <h4 className="text-white text-xl font-bold">Contact Us</h4>

                                <ul className="mt-5 space-y-4 text-[#b9b1ae]">

                                    <li className="flex gap-3 items-start hover:text-orange-500">
                                        <MapPin color="#e63a0f" size={18} />
                                        <span>123 Food Street, Culinary City</span>
                                    </li>

                                    <li className="flex gap-3 items-center hover:text-orange-500">
                                        <Phone color="#e63a0f" size={18} />
                                        <span>(123) 456-7890</span>
                                    </li>

                                    <li className="flex gap-3 items-center hover:text-orange-500">
                                        <MessageSquare color="#e63a0f" size={18} />
                                        <span>hello@foodie.com</span>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <hr className="border-white/10" />

                        {/* Bottom Footer */}
                        <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">

                            <p className="text-[#b9b1ae] text-sm sm:text-base">
                                © 2026 Foodie. All rights reserved.
                            </p>

                            <div className="flex flex-wrap justify-center gap-5">
                                <a href="#" className="text-[#b9b1ae] hover:text-orange-500 text-sm">
                                    Privacy Policy
                                </a>

                                <a href="#" className="text-[#b9b1ae] hover:text-orange-500 text-sm">
                                    Terms of Service
                                </a>
                            </div>

                        </div>

                    </footer>

                    {showCart && (
                        <div className="fixed top-0 right-0 w-80 h-full bg-white shadow-2xl z-50 p-4 overflow-y-auto">

                            <h2 className="text-xl font-bold mb-4">🛒 View Cart</h2>
                            <button
                                onClick={() => setShowCart(false)}
                                className="text-black font-bold text-lg absolute top-4 right-4"
                            >
                                ❌
                            </button>
                            {cart.length === 0 ? (
                                <p className="text-gray-500">Cart is empty</p>
                            ) : (
                                cart.map((item, index) => (
                                    <div key={index} className="flex justify-between items-center border-b py-2">

                                        <div>
                                            <h3 className="font-semibold">{item.name}</h3>
                                            <p className="text-orange-500">${item.price}</p>
                                        </div>

                                        <button
                                            onClick={() => removeFromCart(index)}
                                            className="text-red-500"
                                        >
                                            ❌
                                        </button>
                                    </div>
                                ))
                            )}

                            {/* TOTAL */}
                            <div className="mt-4 font-bold">
                                Total: ${getcartTotal()}
                            </div>

                        </div>
                    )}
                </div >
            </div >
        </div >
    )
}

export default HomePage;