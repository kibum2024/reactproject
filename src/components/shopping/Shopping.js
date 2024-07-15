import React from 'react';
import { Outlet } from 'react-router-dom';

function Shopping() {
  return (
    <div>
      {/* <h2>Shopping</h2> */}
      <Outlet />
    </div>
  );
}

export default Shopping;
