import React, { useEffect, useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';

const Notes = (props) => {
  const [check, setCheck] = useState(false);

  const deleteNote = () => {
    props.deleteItem(props.id);
  }
  const handleCheck = () => {
    setCheck(!check);
    // check?alert("Yahoo !! Completed"):alert("no");
  }
  useEffect(() => {
  check && alert("Yahoo!! Task Completed");
}, [check]);
  return (
 <> 
      <div className="card">
        <div style={{width: "4%", marginLeft:"1rem",marginBottom:"0.7rem"}} >
        <label className='check'>
        <input type="checkbox" onClick={handleCheck}></input>
        <span class="checkmark"></span>
        </label>
        </div>
        <div style={{width: "25%", paddingLeft:"4rem"}}><p>{props.title}</p></div>
        <div style={{width: "65%"}}><p>{props.content}</p></div>
        <div style={{width: "5%"}}><button className='delbtn' onClick={deleteNote}>
          <ClearIcon />
        </button>
        </div>
      </div>
    </>  
  )
}

export default Notes;
