import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Notes from './Notes';
import Header from './Header';
// var list = [
//   {
//     content:"user",
//     title:"hello"
//   }
// ];
const Home = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    // console.log(note);
    // list=list.concat(note);
    setAddItem((prevData) =>{
      return [...prevData, note];
    });
  };

   const onDelete = (id) => {
    // console.log("del");
    setAddItem((oldData) => 
      oldData.filter((currData, indx) => {
        return indx !== id;
      })
    );
  };

  return (
    <>
      <div className='body'>
        <CreateNote passNote={addNote}/>
        <Header />
        {/* <Notes /> */}
        <div className='notecont '>
        {
    addItem.map((val,index) => {
      // console.log(val);
      return (
        <Notes key={index} 
        id={index} 
        title={val.title}
        content={val.content}
        deleteItem={onDelete}/>
      );
    })
  }
  </div>
      </div>
    </>
  )
}

export default Home;
