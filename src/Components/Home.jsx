import React from 'react';
import { useState } from 'react';

const Home = () => {

  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  return (
      <a href="/signup">Sign Up</a>
  )
}

export default Home