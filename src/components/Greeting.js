import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../index.css';

const Greeting = (props) => {
  const {
    id, message,
  } = props;
  const navigate = useNavigate();
  const handleRedirectToDetails = (event) => {
    const url = `/pieces/id:${event.target.id}`;
    navigate(url);
  };
  return (
    <div role="button" className="greetingButton" tabIndex={id} onClick={handleRedirectToDetails} onKeyDown={handleRedirectToDetails}>
      <div className="greetingName">{message}</div>
    </div>
  );
};
Greeting.propTypes = {
  id: PropTypes.number.isRequired,
  message: PropTypes.string.isRequired,
};
export default Greeting;
