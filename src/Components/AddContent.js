import React from 'react'
import { FaPlus } from 'react-icons/fa'

const AddContent = ({newContent, setNewContent, handleSubmit}) => {
  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor='addContent'>Add Content</label>
        <input
             autoFocus
             id='addContent'
             type="text"
             placeholder='Add Content'             
             value= {newContent}
             onChange= {(e)=> setNewContent(e.target.value)}
        />
        <button
            type='submit'
            aria-label='Add Content'            
        >
          <FaPlus />            
        </button>        
    </form>
  )
}

export default AddContent;