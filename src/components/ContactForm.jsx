import React from 'react'

const ContactForm = () => {

  const onChange=()=>{
    console.log('onchange')
  }
  return (
    <h1>Form</h1>
    // <form onSubmit ={(e)=> e.preventDefault()}>
    //         <input type ='text'/>
    //     </form>
  )
}

export default ContactForm