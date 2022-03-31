import React, { Component, useEffect } from 'react'
import { Button ,Form} from 'react-bootstrap'
import { useState } from 'react';
import axios from '../axios';

/*eslint-disable */ 
function UpdateForm({clat,clong, user, onHide}) {
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);
  const [username, setUsername] = useState(user.displayName || user.username);
  const [location, setLocation] = useState(user.location);
  const [description, setDescription] = useState(user.description);
  const [password, setPassword] = useState(user.password);
  const [cPassword, setCPassword] = useState(user.password);

 let handleSubmit=(event)=>{
    event.preventDefault();
    let fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
    
    //update user details
    axios.put(`/users/${user.id}`,data).then(({data})=>{
      if(data.success == true){
        alert("Your information was updated successfully")
        //update login data
        sessionStorage.setItem('_user', JSON.stringify(data.data))
        localStorage.setItem('_user', JSON.stringify(data.data))
        //hide create account modal
        setTimeout(()=>onHide(), 1500)
      }
    }).catch(err=>console.log(err))
    
  }
  return (
    <div>
    <Form className='form' onSubmit={handleSubmit}>
  <div className='create-names'>


<Form.Group className="mb-3 " >
<Form.Label>First Name</Form.Label>
<Form.Control name="firstName" type="text" value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="First Name" />
</Form.Group>
  <Form.Group className="mb-3 " controlId="">
<Form.Label>Last Name</Form.Label>
<Form.Control name="lastName" type="text" value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Second Name"/>

</Form.Group>
</div>



<div className='email-phone-text'>
<div className='email-phone'>


<Form.Group className="mb-3 " >
<Form.Label>Email address</Form.Label>
<Form.Control name="email" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
</Form.Group>
<Form.Group className="mb-3 " >  
<Form.Label>Phone Number</Form.Label>
<Form.Control name="phone" type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+254" />
</Form.Group>
</div>

<Form.Text className="text-muted">
As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
</Form.Text>

</div>

<div className='brand-image'>
<Form.Group className="mb-3 " >
<Form.Label>User Name </Form.Label>
<Form.Control name="username" type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter User Name" />
</Form.Group>
</div>

<div className='more-seller' >
  <div className='location-up-div'>
    <p>Make sure you are in your bussiness location when submitting this form in order to set up your correct bussiness location</p>
    <Form.Group className="mb-3 " >
          <Form.Control type="text" name="location" value={location} placeholder="Location Name" onChange={e => setLocation(e.target.value)} />
    <Form.Control name="fixedLatitude" type="hidden" value={Number(clat)} readOnly/>
    <Form.Control name="fixedLongitude" type="hidden" value={Number(clong)} readOnly/>

    </Form.Group>

  </div>

<div className='description'>
<Form.Group className="mb-3 " >
<Form.Label>Bussiness description </Form.Label>
<Form.Control name="description" as="textarea" rows={3} value={description} onChange={e => setDescription(e.target.value) } placeholder="Your Bussiness Description" />
</Form.Group>



</div>
<div className='seller-check'>
{['checkbox'].map((type) => (
    <div key={`default-${type}`} className="mb-3">

      <Form.Check name="isSeller"
       label={'I am a seller'}

        type={type}
        id={`default-${type}`}
      />

            </div>
          ))}
</div>

</div>






<div className='passwords'>

<Form.Group className="mb-3 " >
<Form.Label>Password</Form.Label>
<Form.Control name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
</Form.Group>

<Form.Group className="mb-3 " >

<Form.Label>Confirm Password</Form.Label>
<Form.Control value={cPassword} type="password" placeholder="Password" onChange={e => setCPassword(e.target.value)}/>
</Form.Group>
</div>


<Button variant="primary" type="submit" >
Update
</Button>
</Form>


    </div>

  )
}

export default UpdateForm