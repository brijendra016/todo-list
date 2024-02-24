import React, { useState } from 'react';

const CreateNote = (props) => {
  const [note, setNote] = useState({
        title:"",
        content:""
    });
    const InputEvent = (e) => {
      const {name, value} = e.target;
        setNote((prevData) => {
            return {
                ...prevData,
                [name] : value,
                 };
        });
      }
      const addEvent = () => {
        props.passNote(note); 
        setNote({
        title:"",
        content:""
        });
       }
  return (
    <>
      <div className='container'>
        <input type='text' placeholder='Title' className="title" name="title" value={note.title} onChange={InputEvent} required/>
        <br />
        <textarea rows={10} cols={10} placeholder='Description' name="content" value={note.content} onChange={InputEvent}></textarea>
        <br />
        <input type="submit" className='savbtn' value="Save" onClick={addEvent}/>
      </div>
    </>
  )
}

export default CreateNote;
