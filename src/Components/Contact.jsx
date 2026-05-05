import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
  MessageCircle,
  Headphones,
  Sparkles,
  ChevronDown,
  ChefHat,
  CreditCard,
  Truck,
  Clock,
  Users,
  Star,
} from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const ContactPage = () => {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer: "You can place an order directly through our website by browsing our menu, selecting your favorite dishes, and adding them to your cart. Then proceed to checkout and make payment.",
      icon: <ChefHat size={22} />,
      column: "left",
    },
    {
      id: 2,
      question: "What are your delivery hours?",
      answer: "We deliver from 9:00 AM to 11:00 PM every day, including weekends and holidays. Last order is taken at 10:30 PM.",
      icon: <Clock size={22} />,
      column: "left",
    },
    {
      id: 3,
      question: "Do you offer catering services?",
      answer: "Yes! We provide catering services for parties, corporate events, weddings, and special occasions. Contact our catering team for customized menus.",
      icon: <Users size={22} />,
      column: "left",
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI (Google Pay, PhonePe, Paytm), Net Banking, and Cash on Delivery. All transactions are secure.",
      icon: <CreditCard size={22} />,
      column: "right",
    },
    {
      id: 5,
      question: "Can I customize my order?",
      answer: "Absolutely! You can add special instructions while placing your order. Want extra cheese, no onions, or a specific sauce? Just let us know.",
      icon: <Star size={22} />,
      column: "right",
    },
    {
      id: 6,
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled within 5 minutes of placing them for a full refund. Contact our support team immediately for assistance.",
      icon: <MessageCircle size={22} />,
      column: "right",
    },
  ];

  const leftFaqs = faqs.filter((faq) => faq.column === "left");
  const rightFaqs = faqs.filter((faq) => faq.column === "right");

  return (
    <div className="bg-[#fffaf7] overflow-x-hidden">

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-4">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1600"
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[4px] scale-105"
        />
        <div className="absolute inset-0 bg-black/55"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 via-black/40 to-black/60"></div>

        <div className="relative z-10 max-w-4xl text-center text-white">
          <span className="px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-semibold">
            Contact Foodie
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mt-6 leading-tight">
            Let's Build Something <br />
            <span className="text-orange-400">Delicious Together</span>
          </h1>
          <p className="mt-6 text-lg text-white/85 max-w-2xl mx-auto leading-relaxed">
            Reach out for orders, partnerships, support or feedback.
            Our team is always ready to help you.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full font-semibold transition hover:scale-105 shadow-lg">
              Contact Now
            </button>
            <button className="border border-white/30 px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition hover:scale-105">
              Explore Menu
            </button>
          </div>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="px-4 sm:px-8 lg:px-12 py-18">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT - Contact Info */}
          <div>
            <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Get In Touch
            </span>
            <h2 className="text-5xl font-extrabold mt-5 text-gray-900 leading-tight">
              We Love Hearing <span className="text-orange-500">From You</span>
            </h2>
            <p className="text-gray-600 mt-5 text-lg leading-relaxed max-w-xl">
              Whether you need assistance, have feedback, or want to partner with us —
              we're one message away.
            </p>
            <div className="space-y-5 mt-10">
              {[
                { icon: <MapPin className="text-orange-500" />, title: "Visit Us", text: "123 Food Street, New York, USA" },
                { icon: <Phone className="text-orange-500" />, title: "Call Anytime", text: "+91 9876543210" },
                { icon: <Mail className="text-orange-500" />, title: "Email Support", text: "foodie@gmail.com" },
                { icon: <Clock3 className="text-orange-500" />, title: "Working Hours", text: "9 AM - 11 PM Everyday" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-orange-200"
                >
                  <div className="flex gap-4 items-start">
                    <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:bg-orange-500 transition duration-300">
                      <div className="group-hover:text-white transition duration-300 text-orange-500">
                        {item.icon}
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{item.title}</h4>
                      <p className="text-gray-500 mt-1">{item.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-orange-200/40 to-pink-200/40 blur-2xl rounded-[40px]"></div>
            <div className="relative bg-white rounded-[35px] p-8 sm:p-10 shadow-2xl border border-white">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center">
                  <Sparkles className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold text-gray-900">Send Message</h3>
                  <p className="text-gray-500 text-sm mt-1">Fast reply guaranteed.</p>
                </div>
              </div>

              <form className="space-y-5 mt-8">
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                />
                <textarea
                  rows="5"
                  placeholder="Tell us how we can help..."
                  className="w-full rounded-2xl border border-gray-200 px-5 py-4 resize-none outline-none focus:ring-2 focus:ring-orange-100 focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                ></textarea>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-2xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl group">
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
              <p className="text-sm text-gray-500 mt-5 text-center">Usually responds in less than 30 minutes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== 2-COLUMN ACCORDION FAQ SECTION ========== */}
      <section className="px-4 sm:px-8 lg:px-20 py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto">
          
          {/* FAQ Header */}
          <div className="text-center mb-12">
            <span className="bg-orange-100 text-orange-600 px-5 py-2 rounded-full text-sm font-semibold inline-block">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold mt-5 text-gray-900">
              Got <span className="text-orange-500">Questions?</span>
            </h2>
            <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
              Find answers to the most frequently asked questions about our food, delivery, and services.
            </p>
          </div>

          {/* 2-Column Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            
            {/* LEFT COLUMN - 3 FAQs */}
            <div className="space-y-4">
              {leftFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden
                    ${openFaq === faq.id ? 'shadow-xl ring-2 ring-orange-200' : 'hover:shadow-lg'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-orange-50/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${openFaq === faq.id ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'}`}>
                        {faq.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`text-orange-500 transition-all duration-300 flex-shrink-0
                        ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${openFaq === faq.id ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pt-2">
                      <div className="h-px bg-gradient-to-r from-orange-200 to-transparent my-2"></div>
                      <p className="text-gray-600 leading-relaxed pl-14">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* RIGHT COLUMN - 3 FAQs */}
            <div className="space-y-4">
              {rightFaqs.map((faq, index) => (
                <div
                  key={faq.id}
                  className={`bg-white rounded-2xl shadow-md transition-all duration-300 overflow-hidden
                    ${openFaq === faq.id ? 'shadow-xl ring-2 ring-orange-200' : 'hover:shadow-lg'}`}
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-orange-50/50 transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                        ${openFaq === faq.id ? 'bg-orange-500 text-white' : 'bg-orange-100 text-orange-500'}`}>
                        {faq.icon}
                      </div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                        {faq.question}
                      </h3>
                    </div>
                    <ChevronDown 
                      className={`text-orange-500 transition-all duration-300 flex-shrink-0
                        ${openFaq === faq.id ? 'rotate-180' : ''}`}
                      size={20}
                    />
                  </button>

                  <div className={`overflow-hidden transition-all duration-300 ease-in-out
                    ${openFaq === faq.id ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 pb-5 pt-2">
                      <div className="h-px bg-gradient-to-r from-orange-200 to-transparent my-2"></div>
                      <p className="text-gray-600 leading-relaxed pl-14">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-orange-100">
              <p className="text-gray-700 text-lg">
                Still have questions?
                <span className="font-bold text-orange-500 ml-2"> We're here to help!</span>
              </p>
              <button className="mt-4 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 shadow-md">
                <MessageCircle size={18} />
                Live Chat with Us
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* EXTRA SUPPORT */}
      <section className="px-4 sm:px-8 lg:px-20 pb-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Headphones />, title: "24/7 Support", text: "Friendly team ready anytime." },
            { icon: <MessageCircle />, title: "Live Chat", text: "Quick answers for urgent needs." },
            { icon: <Truck />, title: "Fast Delivery", text: "Fresh food at your doorstep." },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center group"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-orange-500/10 flex items-center justify-center text-orange-500 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mt-5">{item.title}</h3>
              <p className="text-gray-500 mt-3">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1f1a17] text-white pt-20 pb-8 px-4 sm:px-8 lg:px-20">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h2 className="text-3xl font-extrabold text-orange-500">Foodie 🍔</h2>
            <p className="text-gray-400 mt-5 leading-relaxed">
              Bringing delicious meals, fresh ingredients and happiness to your doorstep every day.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                <FaFacebookF className="text-blue-500" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                <FaInstagram className="text-pink-500" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                <FaTwitter className="text-blue-400" />
              </a>
              <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110">
                <FaYoutube className="text-red-500" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Quick Links</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Home</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Menu</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">About Us</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Popular Items</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Burger</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Pizza</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Pasta</li>
              <li className="hover:text-orange-400 transition cursor-pointer hover:translate-x-2 duration-300">Desserts</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-5">Contact Info</h3>
            <ul className="space-y-4 text-gray-400">
              <li className="flex gap-3 items-center hover:text-orange-400 transition group">
                <MapPin size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                New York, USA
              </li>
              <li className="flex gap-3 items-center hover:text-orange-400 transition group">
                <Phone size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                +91 9876543210
              </li>
              <li className="flex gap-3 items-center hover:text-orange-400 transition group">
                <Mail size={18} className="text-orange-500 group-hover:rotate-12 transition-transform" />
                foodie@gmail.com
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 mt-14 pt-6 max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>© 2026 Foodie. All rights reserved.</p>
          <div className="flex gap-5">
            <span className="hover:text-orange-400 cursor-pointer transition">Privacy Policy</span>
            <span className="hover:text-orange-400 cursor-pointer transition">Terms & Conditions</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage;