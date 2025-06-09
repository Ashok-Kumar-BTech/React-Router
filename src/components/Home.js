import React from 'react';

function Home() {
  return (
    <div className="container">
      <h1>Welcome to React</h1>
      <div className="content">
        <h2>Introduction to React</h2>
        <p>
          React is a powerful JavaScript library for building user interfaces. It allows developers to create
          reusable UI components and efficiently manage the state of their applications.
        </p>
        
        <h2>React Router</h2>
        <p>
          React Router is a standard library for routing in React applications. It enables the creation of
          single-page applications with multiple views and allows users to navigate between these views
          without reloading the entire page.
        </p>
        
        <h3>Key Features of React Router:</h3>
        <ul>
          <li>Declarative routing</li>
          <li>Nested routes</li>
          <li>Route parameters</li>
          <li>Query parameters</li>
          <li>Programmatic navigation</li>
        </ul>
      </div>
    </div>
  );
}

export default Home; 