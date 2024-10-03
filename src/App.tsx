import React, { useEffect, useState } from 'react';
import './App.css';

const App: React.FC = () => {
  const [positions, setPositions] = useState<{ top: string, left: string }[]>([]);

  const handleSubmit = (event: React.FormEvent) => {
    alert("Oops, this doesn't actually submit anything!");
  };

  // Function to generate random positions for floating images
  const generateRandomPositions = () => {
    return Array(3).fill(null).map(() => ({
      top: `${Math.floor(Math.random() * 80)}vh`,
      left: `${Math.floor(Math.random() * 80)}vw`,
    }));
  };

  // UseEffect to start randomizing the positions of the floating images
  useEffect(() => {
    setPositions(generateRandomPositions());

    const interval = setInterval(() => {
      setPositions(generateRandomPositions());
    }, 2000); // Move every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval
  }, []);

  return (
    <div style={{
      width: '95%', // Too wide
      height: '500px', // Too tall
      backgroundColor: '#FF00FF', // Blinding magenta
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Comic Sans MS' // The classic bad font
    }}>
      {/* Title */}
      <h1 style={{
        color: '#00FF00', // Bright green text on magenta = bad contrast
        fontSize: '50px' // Way too big
      }}>
        Welcome to the Best Login Page Ever! (JK)
      </h1>

      {/* Username field */}
      <label style={{ marginBottom: '10px' }}>
        Username (Enter anything, it won’t work anyway)
      </label>
      <input type="text" style={{
        width: '50%', // Too wide
        marginBottom: '30px',
        border: '10px solid red' // Ridiculously thick border
      }} />

      {/* Password field */}
      <label style={{ marginBottom: '10px' }}>
        Password (We don’t care about security)
      </label>
      <input type="password" style={{
        width: '50%',
        marginBottom: '50px',
        border: '10px solid orange' // Another ugly thick border
      }} />

      {/* Submit Button */}
      <button onClick={handleSubmit} style={{
        padding: '20px',
        backgroundColor: '#FFFF00', // Eye-searing yellow on magenta
        borderRadius: '50%', // Completely inappropriate shape for a button
        cursor: 'not-allowed' // Pretend it's disabled
      }}>
        Submit (Will do nothing)
      </button>

      {/* Annoying random text */}
      <p style={{
        fontSize: '2px', // Illegibly small text
        marginTop: '100px' // Unnecessary large margin
      }}>
        This login page is powered by absolutely nothing.
      </p>
      {/* Floating Images */}
      {positions.map((position, index) => (
        <img
          key={index}
          src={`/Users/poojaraghuram/Documents/VS Code/H4I/basic-login/src/img${index + 1}.jpg`}
          alt={`Floating image ${index + 1}`}
          style={{
            position: 'absolute',
            top: position.top,
            left: position.left,
            width: '100px',
            height: '100px',
            transform: `rotate(${Math.floor(Math.random() * 360)}deg)` // Random rotation
          }}
        />
      ))}
    </div>
  );
};

export default App;
