import React from 'react'

const ContactForm = () => {

  const onChange=()=>{
    console.log('onchange')
  }
  return (
    <form onSubmit ={(e)=> e.preventDefault()}>
            <input type ='text' placeholder='Filter Contacts...' onChange={onChange}/>
        </form>
  )
}

export default ContactForm