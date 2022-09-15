import React from 'react'
import {  FaPen } from 'react-icons/fa'

const EditContent = ({ editingText, setEditingText,handleEditSubmit, }) => {
  return (
    <>
      <div><h2>Edit</h2></div>
      <form className='addForm' onSubmit={handleEditSubmit}>       
         <label htmlFor='addContent'> Content</label>
         <input
              autoFocus
              id='editContent'
              type="text"            
              value= {editingText.content}
              onChange= {(e)=> setEditingText({...editingText, content : e.target.value})}             
         />
         <button
             type='submit'
             aria-label='Edit Content'            
         >                 
             <FaPen />
         </button>                    
      </form>
    </>
  )
}

export default EditContent;

