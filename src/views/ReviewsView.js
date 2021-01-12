import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import API from '../services/movieApi';

const ReviewsView = ({ id }) => {
  const [rewiew, setRewiew] = useState(null);

  useEffect(() => {
    const fetchReview = async () => {
      const data = await API.getReview(id);
      setRewiew(data);
    };
    fetchReview();
  }, [id]);
  return (
    <>
      {rewiew && rewiew.length ? (
        rewiew.map(each => <p key={each.id}>{each.content}</p>)
      ) : (
        <p>no reviews</p>
      )}
    </>
  );
};

ReviewsView.propTypes = {
  id: PropTypes.number,
};

export default ReviewsView;
