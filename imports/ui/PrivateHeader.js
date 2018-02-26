import React from 'react';
// prop-types needs to be installed in updated react
import PropTypes from 'prop-types';
import { Accounts } from 'meteor/accounts-base';

// stateless functional component
const PrivateHeader = (props) => {
  return (
    <div className="header">
      <div className="header__content">
        <h1 className="header__title">{props.title}</h1>
        <button className="button button--link-text" onClick={() => Accounts.logout()}>Logout</button>
      </div>
    </div>
  );
};

PrivateHeader.propTypes = {
  title: PropTypes.string.isRequired
};

export default PrivateHeader;
