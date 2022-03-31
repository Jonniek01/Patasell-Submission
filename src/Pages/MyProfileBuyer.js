import React from 'react'
import { Container,Modal,Button } from 'react-bootstrap'
import { useState } from 'react'


import '../sass/MyProfileBuyer.scss'
import UpdateBuyerForm from '../components/UpdateForm';

function MyProfileBuyer({clat,clong}) {
  const User = JSON.parse(localStorage.getItem('_user'));


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState(sessionStorage.getItem('_user'));

  return (
    <Container>
      <div className='buyer-profile'>
    <div className='buyer-profile-head'>
        <div className='profile-image'><p>Profile Image</p></div>
        <div className='buyer-contents'>
          <h1 className='buyer-name'>{User.displayName}</h1>
          <Button variant="primary" onClick={handleShow}>
        Edit account
      </Button>          

        </div>
        <span>userId:{User.id}</span><span>lat:{clat}</span><span>long:{clong}</span>




    </div>
    </div>

        {/*modal fo editing account*/}
        <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBuyerForm user={user}/>

        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>



</Container>  )
}

export default MyProfileBuyer