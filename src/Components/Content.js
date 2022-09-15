import React from 'react'
import ContentList from './ContentList'

const Content = ({contents, handleCheck, handleDelete, handleEdit}) => {  
  return (
    <>
      {
        contents.length ? (
          <ContentList
              contents = {contents}             
              handleCheck = {handleCheck}
              handleDelete = {handleDelete}
              handleEdit = {handleEdit} 
          />        
        ) 
        : 
        (
          <p style={{marginTop: "15px", color: "red"}}>Your List is Empty</p> 
        )
        }
    </>
  )
}

export default Content;