import React from 'react';
import { useParams } from 'react-router-dom';

export default function RGB() {
  const { red, green, blue } = useParams();

  return (
    <div style={{ height: '200px', width: '200px', background: `rgb(${red} ${green} ${blue})` }}>
      RGB
    </div>
  );
}
