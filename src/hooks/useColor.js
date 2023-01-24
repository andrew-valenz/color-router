import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function useColor() {
  const [red, setRed] = useState('');
  const [blue, setBlue] = useState('');
  const [green, setGreen] = useState('');

  useEffect(() => {
    const color = useParams();
    setRed(color.red);
    setBlue(color.blue);
    setGreen(color.green);
  });
}
