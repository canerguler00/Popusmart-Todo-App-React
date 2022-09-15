import React from 'react'

const Footer = ({contents}) => {
    const today = new Date(); 
  return (
    <footer className='footer'>
        <p className='footer-item'>{contents.length} List {contents.length === 1  ? "Item" : "Items"}</p>
        <p className='footer-info'>Copyright &copy; {today.getFullYear()}</p>
    </footer>
  )
}

export default Footer;