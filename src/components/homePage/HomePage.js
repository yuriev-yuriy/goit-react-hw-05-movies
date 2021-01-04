import { useState, useEffect } from 'react';
import fetchTrending from '../../services/movieApi';

const HomePage = () => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetchTrending().then(data => console.log(data));
  }, []);
  return <h3>Hello</h3>;
};

export default HomePage;
