import React from 'react';
import {Route, Routes} from 'react-router-dom';
import Home from './Home';
import Complete from './Complete';
import Pending from './Pending';
import Error from './Error';
import Navilink from './Navilink';

const Navbar = () => {
  return (
    <div>
      <Navilink />
        <Routes>
            <Route path="/" element={<Home />} exact />
            <Route path="/complete" element={<Complete />} exact />
            <Route path="/pending" element={<Pending />} exact />
            <Route path="*" element={<Error />} />
        </Routes>
    </div>
  )
}

export default Navbar;
