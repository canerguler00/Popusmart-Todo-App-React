import React from 'react'
import { FaTrashAlt, FaEdit } from 'react-icons/fa'

const ListItem = ({content, handleCheck, handleDelete, handleEdit }) => {
  return (
    <div>
        <li className='content' key={content.id}>
        <input
            type="checkbox"
            onChange={() => handleCheck(content.id)}
            checked={content.isCompleted}
        /> 
        <label
        style ={(content.isCompleted) ? {textDecoration: "line-through"} : null}
             onDoubleClick={() => handleCheck(content.id)}
        >{content.content}</label>
        <FaEdit             
             onClick={() => handleEdit(content.id)}
             role="button"
             tabIndex="0"
             aria-label={`Delete $${content.content}`}              
        />
        <FaTrashAlt 
              onClick={() => handleDelete(content.id)}
              role="button" 
              tabIndex="0"
              aria-label= {`Delete ${content.content}`}
        />  
      </li>        
    </div>
  )
}

export default ListItem;