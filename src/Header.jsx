import React from 'react';

const Header = () => {
  return (
    <>
      <header className='notehead'>
        {/* <label className='check'>
        <input type="checkbox"></input>
        <span class="checkmark"></span>
        </label> */}
        <div>Complete</div>
        <div style={{width: "27%", paddingLeft:"2rem"}}>Title</div>
        <div style={{width: "66%"}}>Description</div>
        <div style={{width: "5%", marginRight:"1rem"}}>Delete</div>
      </header>
    </>
  )
}

export default Header;
