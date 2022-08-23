import React from 'react'
import ContactDetails from './ContactDetails';

const Contact = ({data}) => {
  return (
    <div>{data.map(item=>(
      <ContactDetails key={item.id} item={item}/>
    ))}</div>
  )
}

export default Contact