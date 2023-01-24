import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';

export default function RGB() {
  const { red, green, blue } = useParams();

  return (
    <div
      className="background"
      style={{ height: '100vh', width: '100vw', backgroundColor: `rgb(${red} ${green} ${blue})` }}
    >
      rgb ({red},{green},{blue})
    </div>
  );
}
