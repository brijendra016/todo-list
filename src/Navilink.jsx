import React from 'react';
import {NavLink} from 'react-router-dom';

const Navilink = () => {
  return (
    <>
    <div className='menu'>
      <NavLink exact activeClassName="active" to='/'>Home</NavLink>
      <NavLink exact activeClassName="active" to='/complete'>Complete</NavLink>
      <NavLink exact activeClassName="active" to='/pending'>Pending</NavLink>
    </div>
    </>
  )
}

export default Navilink;
