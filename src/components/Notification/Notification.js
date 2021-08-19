import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ messege }) => (
  <div>
    <p>{messege}</p>
  </div>
);

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
