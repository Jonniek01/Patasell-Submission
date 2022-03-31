import React from 'react'
import {Link} from 'react-router-dom'
import '../sass/LogIn.scss'
import { Container,Form ,Button} from 'react-bootstrap'
import { useState } from 'react'
import '../sass/CreateAccount.scss'
import axios from 'axios'

/*eslint-disable */

export function CreateAccount() {

  let [closed,setClosed]=useState(false)
  let [err,setErr]=useState('')


  let[seller,setSeller]=useState(false)
  const[clat,setClat]=useState('');
  const[clong,setClong]=useState('');
  let handleSubmit=(event)=>{
    event.preventDefault();
    let fd = new FormData(event.target);
    let data = Object.fromEntries(fd.entries());
 
    console.log("Attempting to create user..")
    //submit data 
    axios.post(`${SERVER_URL}/users`,data).then(res=>{
      console.log("Finished creating user");
      setClosed(true)
    }).catch(err=>setErr(err))

    console.log("Error here:",err)



  
  


  }

  

  navigator.geolocation.watchPosition(function(position) {
     setClat(position.coords.latitude) 
    setClong(position.coords.longitude) 
  });


  function changeSeller(){
    setSeller(seller);
    seller=!seller
  }

  if(closed===false){



  return (
    <div>

          <Container className='createAccount'>

          <h3>Create Account</h3>
          <Form className='account-form' onSubmit={handleSubmit}>
            <div className='create-names'>


          <Form.Group className="mb-3 " >
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstName" placeholder="First Name" />
          </Form.Group>
            <Form.Group className="mb-3 " controlId="">
          <Form.Label>Second Name</Form.Label>
          <Form.Control type="text" name="lastName" placeholder="Second Name" />

          </Form.Group>
          </div>


          
        <div className='email-phone-text'>
          <div className='email-phone'>

          
          <Form.Group className="mb-3 " >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3 " >
          <Form.Label>Phone Number</Form.Label>
          <Form.Control type="tell"  name="phone" placeholder="+254" />
          </Form.Group>
          </div>

          <Form.Text className="text-muted" >
          As just a buyer, We never share your contact information with anyone. As a seller, it is used by the buyers to contact you
          </Form.Text>

          </div>

          <div className='brand-image'>
          <Form.Group className="mb-3 " >
          <Form.Label>User Name </Form.Label>
          <Form.Control type="text" name="username" placeholder="Enter User Name" />
          </Form.Group>
         
          </div>

          <Form.Group className="mb-3 " >
            <h6><span>Double click</span><span><Button onClick={changeSeller}>Here</Button></span><span>if you are registering as a seller</span></h6>
          </Form.Group>
          <div className='more-seller' style={{display:seller===true?"block":"none"}}>
          <div className='location-up-div'>
    <p>Make sure you are in your bussiness location when submitting this form in order to set up your correct bussiness location</p>
    <Form.Group className="mb-3 " >
    <Form.Control type="text" name="location" placeholder="Location Name" />

    <Form.Control name="fixedLatitude" type="hidden" value={clat} />
    <Form.Control name="fixedLongitude" type="hidden" value={Number(clong)} />

    </Form.Group>

  </div>

          <div className='description'>
          <Form.Group className="mb-3 " >
          <Form.Label>Bussiness description </Form.Label>
          <Form.Control as="textarea" name="description" rows={3} placeholder="Your Bussiness Description" />
          </Form.Group>



          </div>
         <div className='seller-check'>
          {['checkbox'].map((type) => (
              <div key={`default-${type}`} className="mb-3">

                <Form.Check 
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
          <Form.Control type="password" name="password" placeholder="Password" required/>
          </Form.Group>

          <Form.Group className="mb-3 " >

          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required/>
          </Form.Group>
          </div>


          <Button variant="primary" type="submit" >
          Submit
          </Button>
          </Form>

          <div>
          <button>Log In With Google</button>
          </div>
            



          <Link  className='log' to="/">
          Log in

          </Link>




          </Container>


    </div>

          
  )
}

else{
  return(<div className='closed'>

    <h1>Patasell</h1>
    <div className='inner-container'>
    <h3>Account created succesfully</h3>
    <p>Click log in to continue</p>
    <Link  className='log' to="/">Log in </Link>


    </div>











  </div>)
}

}


