// Create a react component that inputs a text area message then performs a fetch request to localhost:3001 gets back a response as a data.message and displays that message in a box below.

// Defines the frontend of our application and creates submission functions.

import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  // Calling a fetch request on handleSubmit() as a POST and applying a json object. We stringify the JSON object on line 17, then pass and then save the response on lines 18 and 19.
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:3001/', {
      method:'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
      .then((res) => res.json())
      .then((data) => setResponse(data.message));
  }

  return (
    <div className='App'>
    <h1>Chris' Code Assistant</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          placeholder="Ask Steve anything"
          onChange={(e) => setMessage(e.target.value)}>
          </textarea>
          <br/>
          <button type='submit'>Submit</button>
      </form>
      {response && <div><b>Steve: </b> {response}</div>}
    </div>
  );
}

export default App