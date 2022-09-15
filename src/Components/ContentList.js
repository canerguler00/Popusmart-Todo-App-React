import React from 'react'
import ListItem from './ListItem';

const ContentList = ({contents, handleCheck, handleDelete, handleEdit }) => {
  return (
    <ul>
    {contents.map((content) => (
        <ListItem
            key={content.id}
            content = {content}             
            handleCheck = {handleCheck}
            handleDelete = {handleDelete} 
            handleEdit = {handleEdit}
        />               
    ))}
  </ul> 
  )
}

export default ContentList;