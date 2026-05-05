import React from "react";
import {ChefHat,Leaf,Truck,Heart,Star,Users,Award,Clock3,ShieldCheck,UtensilsCrossed,BadgeCheck,Sparkles,User,Coffee,Gift,Bike,Apple,Mail,Phone,MapPin,} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="overflow-x-hidden bg-[#fffaf8] text-gray-800">

      {/* HERO */}
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600"
          alt="food"
          className="absolute inset-0 w-full h-full object-cover blur-[2px] scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-orange-500/30 to-pink-500/30"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">

          <span className="bg-white/20 backdrop-blur-md text-white px-5 py-2 rounded-full text-sm font-semibold border border-white/20">
            Welcome To Foodie
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white mt-6 leading-tight">
            Taste The Best <br />
            <span className="text-orange-400">Delicious Food</span>
          </h1>

          <p className="text-white/90 text-lg sm:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            Fresh ingredients, unforgettable taste, and fast delivery right to your
            doorstep.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition hover:scale-105">
              Order Now
            </button>

            <button className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition">
              View Menu
            </button>

          </div>

        </div>

      </section>
      {/* FEATURES */}
      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-b from-white via-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto">
            <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Why Choose Us
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold mt-5 text-gray-900">
              More Than Just <span className="text-orange-500">Food</span>
            </h2>

            <p className="text-gray-600 mt-4 text-lg">
              Fresh taste, fast delivery and a premium experience in every order.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">

            {[
              {
                icon: <UtensilsCrossed className="text-orange-500" />,
                title: "Signature Recipes",
                text: "Chef-crafted meals full of rich authentic flavor.",
              },
              {
                icon: <Apple className="text-orange-500" />,
                title: "Fresh Ingredients",
                text: "Daily selected premium ingredients for quality meals.",
              },
              {
                icon: <Bike className="text-orange-500" />,
                title: "Lightning Delivery",
                text: "Hot and fresh food delivered right on time.",
              },
              {
                icon: <BadgeCheck className="text-orange-500" />,
                title: "Trusted Service",
                text: "Thousands trust us for quality and consistency.",
              },
              {
                icon: <Gift className="text-orange-500" />,
                title: "Rewards & Offers",
                text: "Exciting discounts and special deals every week.",
              },
              {
                icon: <Coffee className="text-orange-500" />,
                title: "Memorable Taste",
                text: "Every bite made to satisfy and impress.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-orange-100 shadow-md hover:shadow-2xl hover:-translate-y-3 transition duration-500 overflow-hidden"
              >
                {/* top line hover effect */}
                <span className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                {/* icon */}
                <div className="w-16 h-16 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500/20 transition duration-300">
                  {item.icon}
                </div>

                {/* content */}
                <h3 className="text-xl font-bold mt-6 text-gray-900 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <p className="text-gray-500 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-b from-white to-orange-50">
        <div className="max-w-7xl mx-auto">

          {/* Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Our Achievements
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold mt-5 text-gray-900">
              Trusted By <span className="text-orange-500">Thousands</span>
            </h2>

            <p className="text-gray-600 mt-4">
              Serving happiness with quality food and excellent service.
            </p>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {[
              { icon: <User size={28} />, num: "25K+", text: "Happy Customers" },
              { icon: <Star size={28} />, num: "4.9", text: "Average Rating" },
              { icon: <Clock3 size={28} />, num: "30 Min", text: "Fast Delivery" },
              { icon: <Award size={28} />, num: "15+", text: "Years Experience" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-orange-500/10 rounded-3xl p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition duration-300"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/15 flex items-center justify-center text-orange-500">
                  {item.icon}
                </div>

                {/* Number */}
                <h3 className="text-3xl font-extrabold mt-5 text-gray-900">
                  {item.num}
                </h3>

                {/* Text */}
                <p className="text-gray-600 mt-2">{item.text}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* TEAM */}
      {/* OUR STORY */}
      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Image */}
          <div className="relative group">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200"
                alt="Restaurant Interior"
                className="w-full h-[500px] object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-extrabold text-orange-500">15+</h3>
              <p className="text-gray-600 text-sm">Years Of Excellence</p>
            </div>

          </div>

          {/* Right Content */}
          <div>

            <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Our Journey
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold mt-5 leading-tight text-gray-900">
              Creating Memories <br />
              Through <span className="text-orange-500">Great Food</span>
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              Since our beginning, Foodie has focused on one mission — serving fresh,
              flavorful meals that bring people together.
            </p>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              Every dish is prepared with care, premium ingredients, and a passion for
              making every customer smile.
            </p>


            {/* Points */}
            <div className="grid sm:grid-cols-2 gap-5 mt-8">

              <div className="group relative bg-white rounded-2xl p-5 shadow-md hover:-translate-y-2 transition duration-300 overflow-hidden">
                <span className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                <h4 className="font-bold text-lg text-gray-900">Fresh Daily</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Ingredients sourced fresh every morning.
                </p>
              </div>

              <div className="group relative bg-white rounded-2xl p-5 shadow-md hover:-translate-y-2 transition duration-300 overflow-hidden">
                <span className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                <h4 className="font-bold text-lg text-gray-900">Fast Service</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Quick preparation and reliable delivery.
                </p>
              </div>

              <div className="group relative bg-white rounded-2xl p-5 shadow-md hover:-translate-y-2 transition duration-300 overflow-hidden">
                <span className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                <h4 className="font-bold text-lg text-gray-900">Top Taste</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Flavors crafted to impress every bite.
                </p>
              </div>

              <div className="group relative bg-white rounded-2xl p-5 shadow-md hover:-translate-y-2 transition duration-300 overflow-hidden">
                <span className="absolute top-0 left-0 w-0 h-1 bg-orange-500 group-hover:w-full transition-all duration-500"></span>

                <h4 className="font-bold text-lg text-gray-900">Happy Guests</h4>
                <p className="text-gray-500 text-sm mt-2">
                  Thousands of satisfied customers daily.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-r from-white to-orange-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div>

            <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Why People Love Us
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold mt-5 leading-tight text-gray-900">
              Crafted With Passion <br />
              Served With <span className="text-orange-500">Perfection</span>
            </h2>

            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              We focus on fresh ingredients, premium quality and unforgettable taste.
              Every dish is prepared to make your moments more special.
            </p>

            <p className="text-gray-600 mt-4 text-lg leading-relaxed">
              From quick snacks to full meals, our menu is designed to satisfy every craving.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-orange-500/10 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">10K+</h3>
                <p className="text-gray-500 mt-2">Happy Customers</p>
              </div>

              <div className="bg-orange-500/10 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">50+</h3>
                <p className="text-gray-500 mt-2">Food Items</p>
              </div>

              <div className="bg-orange-500/10 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">25+</h3>
                <p className="text-gray-500 mt-2">Expert Chefs</p>
              </div>

              <div className="bg-orange-500/10 rounded-2xl p-5 hover:-translate-y-2 hover:shadow-xl transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">4.9★</h3>
                <p className="text-gray-500 mt-2">Average Rating</p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative group">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200"
                alt="Food Dish"
                className="w-full h-[550px] object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            {/* Floating Card */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-5 py-4 rounded-2xl shadow-xl">
              <h3 className="text-2xl font-extrabold text-orange-500">Fresh Taste</h3>
              <p className="text-gray-600 text-sm">Made Daily With Love</p>
            </div>

          </div>

        </div>
      </section>
      {/* CTA */}
      <section className="px-4 sm:px-8 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#fff7f2] via-[#fffaf7] to-[#fff3ec] border border-orange-100 p-10 sm:p-14 shadow-xl">

          {/* Soft Background Shapes */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-56 h-56 bg-pink-200/20 rounded-full blur-3xl"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div>

              <span className="bg-orange-500/10 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
                Ready To Order
              </span>

              <h2 className="text-4xl sm:text-5xl font-extrabold mt-6 leading-tight text-gray-900">
                Delicious Food <br />
                Delivered To Your <span className="text-orange-500">Doorstep</span>
              </h2>

              <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                Experience fresh ingredients, rich flavors and quick delivery with every order.
                We prepare every meal with care so you can enjoy restaurant-quality food at home.
              </p>

              <p className="mt-4 text-gray-500 leading-relaxed">
                Join thousands of happy customers who trust us for tasty meals,
                premium service and unforgettable dining moments.
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">

                <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-orange-600 hover:-translate-y-1 transition duration-300">
                  Order Now
                </button>

                <button className="border border-orange-200 text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-orange-50 transition duration-300">
                  View Menu
                </button>

              </div>

            </div>

            {/* Right Stats Cards */}
            <div className="grid grid-cols-2 gap-5">

              <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">30 Min</h3>
                <p className="text-gray-500 mt-2">Fast Delivery</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">4.9★</h3>
                <p className="text-gray-500 mt-2">Top Rated</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">10K+</h3>
                <p className="text-gray-500 mt-2">Happy Customers</p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md hover:-translate-y-2 transition duration-300">
                <h3 className="text-3xl font-extrabold text-orange-500">50+</h3>
                <p className="text-gray-500 mt-2">Food Choices</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f1a17] text-white pt-20 pb-8 px-4 sm:px-8 lg:px-20">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-extrabold text-orange-500">
              Foodie 🍔
            </h2>

            <p className="text-gray-400 mt-5 leading-relaxed">
              Bringing delicious meals, fresh ingredients and happiness to your doorstep every day.
              Taste that makes every moment special.
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
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-400 transition cursor-pointer">Home</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Menu</li>
              <li className="hover:text-orange-400 transition cursor-pointer">About Us</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-5">Popular Items</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-400 transition cursor-pointer">Burger</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Pizza</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Pasta</li>
              <li className="hover:text-orange-400 transition cursor-pointer">Desserts</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-5">Contact Info</h3>

            <ul className="space-y-4 text-gray-400">

              <li className="flex gap-3 items-center hover:text-orange-400 transition">
                <MapPin size={18} className="text-orange-500" />
                New York, USA
              </li>

              <li className="flex gap-3 items-center hover:text-orange-400 transition">
                <Phone size={18} className="text-orange-500" />
                +91 9876543210
              </li>

              <li className="flex gap-3 items-center hover:text-orange-400 transition">
                <Mail size={18} className="text-orange-500" />
                foodie@gmail.com
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-14 pt-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">

          <p>© 2026 Foodie. All rights reserved.</p>

          <div className="flex gap-5">
            <span className="hover:text-orange-400 cursor-pointer transition">
              Privacy Policy
            </span>

            <span className="hover:text-orange-400 cursor-pointer transition">
              Terms & Conditions
            </span>
          </div>

        </div>

      </footer>
    </div>
  );
};

export default AboutPage;