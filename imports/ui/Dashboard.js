import React from 'react';
import PrivateHeader from './PrivateHeader';

//stateless functional component is different to class component
export default () => {
  return (
    <div>
      <PrivateHeader title="Dashboard"/>
      <div className="page-content">
        Dashboard page content.
      </div>
    </div>
  );
};
