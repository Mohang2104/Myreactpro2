//App.js
import React, { useState } from 'react';
import './App.css';

const blogData = [
  {
    id: 1,
    title: "What is React?",
    date: "2025-06-15",
    content: "React is a JavaScript library for building user interfaces developed by Facebook. It helps create interactive UIs with reusable components.",
  },
  {
    id: 2,
    title: "JavaScript Basics for Beginners",
    date: "2025-06-14",
    content: "JavaScript is a programming language used to create dynamic content on websites, such as interactive forms, sliders, and more.",
  },
  {
    id: 3,
    title: "Why You Should Learn CSS Grid",
    date: "2025-06-13",
    content: "CSS Grid allows developers to build flexible and responsive web layouts. It's essential for modern frontend design.",
  },
  {
    id: 4,
    title: "Understanding REST APIs",
    date: "2025-06-12",
    content: "REST APIs help in data communication between frontend and backend. They are used in almost all web and mobile applications today.",
  },
];

function App() {
  const [search, setSearch] = useState('');
  const [activePage, setActivePage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  const filteredBlogs = blogData.filter((blog) =>
    blog.title.toLowerCase().includes(search.toLowerCase())
  );

  const formatDate = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <nav className="navbar">
        <div className="logo">📰 My Blog</div>
        <ul className="nav-links">
          <li><button onClick={() => setActivePage('home')}>Home</button></li>
          <li><button onClick={() => setActivePage('about')}>About</button></li>
          <li><button onClick={() => setActivePage('contact')}>Contact</button></li>
        </ul>
        <button className="toggle-mode" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>

      {activePage === 'home' && (
        <div className="home">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search blog titles..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="blog-container">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                  <h2>{blog.title}</h2>
                  <p className="date">📅 {formatDate(blog.date)}</p>
                  <p>{blog.content.substring(0, 100)}...</p>
                  <a href="#">Read More</a>
                </div>
              ))
            ) : (
              <p className="no-results">No blogs found.</p>
            )}
          </div>
        </div>
      )}

      {activePage === 'about' && (
        <div className="page-content">
          <h2>About Us</h2>
          <p>We share knowledge about frontend development, especially React, CSS, and JavaScript.</p>
        </div>
      )}

      {activePage === 'contact' && (
        <div className="page-content">
          <h2>Contact Us</h2>
          <p>Email: contact@myblog.com</p>
          <p>Phone: +91-9876543210</p>
        </div>
      )}
    </div>
  );
}

export default app1;


