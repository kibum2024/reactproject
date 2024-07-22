import React from 'react';
import { Outlet } from 'react-router-dom';

function Shopping({onImageClick}) {
  return (
  <div>
     <Outlet context={{ onImageClick }} />
  </div>
  );
}

export default Shopping;
