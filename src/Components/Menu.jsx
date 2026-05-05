import React, { useState } from "react";
import pastyimg from "../assets/pastyimg.png";
import { Search, Star, ShoppingCart, Flame, ChevronRight, Mail, Phone, MapPin, Heart, Leaf, Truck, } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const menuData = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burger",
    price: "$12.99",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
  },
  {
    id: 2,
    name: "Pepperoni Pizza",
    category: "Pizza",
    price: "$18.99",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
  },
  {
    id: 3,
    name: "Creamy Pasta",
    category: "Pasta",
    price: "$14.99",
    rating: "4.7",
    image:
      "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800",
  },
  {
    id: 4,
    name: "French Fries",
    category: "Snacks",
    price: "$7.99",
    rating: "4.6",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f?w=800",
  },
  {
    id: 5,
    name: "Chocolate Cake",
    category: "Dessert",
    price: "$9.99",
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800",
  },
  {
    id: 6,
    name: "Fresh Lemonade",
    category: "Drinks",
    price: "$5.99",
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=800",
  },
];

const categories = [
  "All",
  "Burger",
  "Pizza",
  "Pasta",
  "Snacks",
  "Dessert",
  "Drinks",
];

const MenuPage = ({ searchterm, setSearchterm }) => {
  const [active, setActive] = useState("All");

  const filtered = menuData.filter(
    (item) =>
      item.name.toLowerCase().includes(searchterm.toLowerCase())
  )


  return (
    <div className="overflow-x-hidden bg-[#fffaf7] min-h-screen">

      {/* HERO */}
      <section className="px-4 sm:px-8 lg:px-20 py-14 bg-gradient-to-r from-orange-100 via-pink-100 to-orange-50">
        <div className="max-w-7xl mx-auto text-center">

          <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Our Delicious Collection
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mt-5 text-gray-900">
            Explore Our <span className="text-orange-500">Menu</span>
          </h1>

          <p className="text-gray-600 max-w-2xl mx-auto mt-4 text-lg">
            Freshly made dishes crafted with love and delivered fast to your doorstep.
          </p>

          {/* Search */}
          <div className="max-w-xl mx-auto mt-8 relative">
            <input
              type="text"
              placeholder="Search your favorite food..."
              value={searchterm}
              onChange={(e) => setSearchterm(e.target.value)}
              className="w-full bg-white rounded-full py-4 pl-14 pr-5 shadow-md outline-none"
            />
            <Search className="absolute left-5 top-4 text-gray-500" />
          </div>
        </div>
      </section>

      {/* CATEGORY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-20 py-10">

        <div className="flex flex-wrap gap-4 justify-center">
          {categories.map((cat, index) => (
            <button
              key={index}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${active === cat
                ? "bg-orange-500 text-white"
                : "bg-white shadow hover:bg-orange-100"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* MENU GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold text-gray-800">
                    {item.name}
                  </h2>

                  <div className="flex items-center gap-1 text-orange-500 font-semibold">
                    <Star size={18} fill="orange" />
                    {item.rating}
                  </div>
                </div>

                <p className="text-gray-500 mt-2">{item.category}</p>

                <div className="flex justify-between items-center mt-5">
                  <span className="text-2xl font-bold text-orange-500">
                    {item.price}
                  </span>

                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full flex items-center gap-2">
                    <ShoppingCart size={18} />
                    Add
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PREMIUM OFFER SECTION - CLEAN WHITE BG + CIRCLE PIZZA IMAGE */}

      <section className="px-4 sm:px-8 lg:px-20 py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-2 gap-10 items-center bg-[#fff8f3] rounded-[35px] p-6 sm:p-10 shadow-lg border border-orange-100">

            {/* LEFT CONTENT */}
            <div>

              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-5">
                <Flame size={18} />
                <span className="font-semibold text-sm">
                  Limited Time Offer
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-extrabold leading-tight text-gray-900">
                Get <span className="text-orange-500">30% OFF</span> <br />
                On Your First Order 🍕
              </h2>

              <p className="mt-5 text-gray-600 text-base sm:text-lg max-w-xl leading-relaxed">
                Fresh hot pizza made with premium cheese, loaded toppings and
                delivered quickly to your doorstep.
              </p>

              {/* TAGS */}
              <div className="mt-6 flex flex-wrap gap-3">

                <span className="bg-white px-4 py-2 rounded-full text-sm shadow">
                  🚚 Free Delivery
                </span>

                <span className="bg-white px-4 py-2 rounded-full text-sm shadow">
                  🧀 Extra Cheese
                </span>

                <span className="bg-white px-4 py-2 rounded-full text-sm shadow">
                  ⏰ Fast Service
                </span>

              </div>

              {/* BUTTON */}
              <button className="mt-8 bg-orange-500 text-white px-7 py-3 rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 hover:scale-105 transition duration-300">
                Order Now
                <ChevronRight />
              </button>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative flex justify-center">

              {/* Circle Background */}
              <div className="w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full bg-orange-100 flex items-center justify-center shadow-inner">

                <img
                  src={pastyimg}
                  alt="pizza"
                  className="w-[260px] h-[260px] sm:w-[340px] sm:h-[340px] rounded-full object-cover shadow-2xl hover:rotate-6 hover:scale-105 transition duration-500"
                />

              </div>

              {/* Floating Price */}
              <div className=" animate-bounce [animation-duration:4s] absolute top-4 left-0 bg-white px-4 py-3 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-500">Starting From</p>
                <h3 className="text-xl font-bold text-orange-500">$10.99</h3>
              </div>

              {/* Floating Rating */}
              <div className="animate-bounce [animation-duration:4s] absolute bottom-4 right-0 bg-white px-4 py-3 rounded-2xl shadow-lg">
                <p className="text-sm text-gray-500">⭐ Rating</p>
                <h3 className="text-xl font-bold text-orange-500">4.9/5</h3>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHY CHOOSE US SECTION - ADD BEFORE CTA */}

      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold mt-5 text-gray-900">
              Why Choose <span className="text-orange-500">Us</span>
            </h2>

            <p className="text-gray-600 mt-4 text-base">
              Fresh food, fast delivery, best taste.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-14">

            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-r hover:from-orange-300 hover:to-pink-300 transition duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition duration-500">
                <Truck className="text-orange-500" size={30} />
              </div>

              <h3 className="text-xl font-bold mt-6">Fast Delivery</h3>

              <p className="text-gray-500 mt-3">
                Your meals arrive hot and fresh in record time.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-r hover:from-pink-300 hover:to-purple-300 transition duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:rotate-12 transition duration-500">
                <Star className="text-orange-500 " size={28} />
              </div>

              <h3 className="text-xl font-bold mt-6">Top Rated Taste</h3>

              <p className="text-gray-500 mt-3">
                Loved by thousands of food lovers every day.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:bg-gradient-to-r hover:from-green-300 hover:to-blue-300   transition duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:scale-110 transition duration-500">
                <Leaf className="text-orange-500" size={28} />
              </div>

              <h3 className="text-xl font-bold mt-6">Fresh Ingredients</h3>

              <p className="text-gray-500 mt-3">
                Premium veggies, sauces and quality products only.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-3xl p-7 shadow-md hover:shadow-2xl hover:bg-gradient-to-r hover:from-orange-300 hover:to-pink-300 hover:-translate-y-3 transition duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center group-hover:animate-bounce [animation-duration:2s]">
                <Heart className="text-orange-500 " size={28} />
              </div>

              <h3 className="text-xl font-bold mt-6">Made With Love</h3>

              <p className="text-gray-500 mt-3">
                Every meal crafted with care and passion.
              </p>
            </div>

          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

            <div className="bg-orange-100 text-center rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-extrabold text-pink-500">10K+</h3>
              <p className="text-gray-500 mt-2">Happy Customers</p>
            </div>

            <div className="bg-orange-100 text-center rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-extrabold text-pink-500">50+</h3>
              <p className="text-gray-500 mt-2">Food Items</p>
            </div>

            <div className="bg-orange-100 text-center rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-extrabold text-pink-500">25+</h3>
              <p className="text-gray-500 mt-2">Expert Chefs</p>
            </div>

            <div className="bg-orange-100 text-center rounded-3xl p-6 shadow-sm hover:shadow-lg hover:-translate-y-2 transition duration-300">
              <h3 className="text-3xl font-extrabold text-pink-500">4.9★</h3>
              <p className="text-gray-500 mt-2">Average Rating</p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-14 px-4">
        <h2 className="text-4xl font-bold text-gray-900">
          Taste Happiness Today 🍔
        </h2>

        <p className="text-gray-600 mt-3 max-w-xl mx-auto">
          Fast delivery, fresh ingredients, premium taste.
        </p>

        <button className="mt-6 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition">
          Order Now
        </button>
      </section>
      {/* FOOTER */}
      <footer className="bg-[#1d1d1d] text-white px-6 md:px-20 pt-16 pb-8">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-orange-500">Foodie</h1>
              <span className="text-3xl">🍔</span>
            </div>

            <p className="mt-4 text-gray-400">
              Fresh meals, fast delivery, premium experience.
            </p>


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
            <h3 className="font-bold text-xl">Quick Links</h3>

            <ul className="space-y-3 mt-5 text-gray-400">
              <li>Home</li>
              <li>Menu</li>
              <li>Offers</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-bold text-xl">Categories</h3>

            <ul className="space-y-3 mt-5 text-gray-400">
              <li>Burger</li>
              <li>Pizza</li>
              <li>Dessert</li>
              <li>Drinks</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-xl">Contact</h3>

            <ul className="space-y-4 mt-5 text-gray-400">
              <li className="flex gap-2">
                <MapPin size={18} /> New York, USA
              </li>

              <li className="flex gap-2">
                <Phone size={18} /> +91 9876543210
              </li>

              <li className="flex gap-2">
                <Mail size={18} /> foodie@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between gap-4 text-gray-400 text-sm">
          <p>© 2026 Foodie. All rights reserved.</p>

          <div className="flex gap-5">
            <span>Privacy Policy</span>
            <span>Terms & Conditions</span>
          </div>
        </div>

      </footer>
    </div>
  );
};

export default MenuPage;