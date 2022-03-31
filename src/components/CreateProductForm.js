import axios from '../axios';
import React, { Component, useState } from 'react'
import { Button ,Form} from 'react-bootstrap'

/*eslint-disable */
export default class CreateProductForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.responseRef = React.createRef();
    this.formRef = React.createRef();
    this.state={
      user: JSON.parse(localStorage.getItem('_user')),
      message:""
    }
  }

// Form submitting logic, prevent default page refresh 
handleSubmit(event){
  event.preventDefault();
  let form = event.target;
  let fd = new FormData(form);
  let data = Object.fromEntries(fd.entries());
  axios.post(`/products`,data).then(({data})=>{
    if(data.status == true){
      //hide after 1.5 s
      setTimeout(()=>this.props.onHide(), 1500)
    }
  }).catch(err=>  console.log(err))
  
  this.state.message=data.productName+" created succesfully"
  this.setState(message=>message)


}
  render() {
    return (
      <div>        
    <Form className='form-product' onSubmit={this.handleSubmit}>
      <div className='message' style={{color:'Green'}}>{this.state.message}</div>
      <div className='serverResponse' ref={this.responseRef}></div>
      <div className='name-price'>

    <Form.Group className="mb-3 " >
    <Form.Control type="hidden" value={this.state.user.id} name="userId"/>
    <Form.Control type="hidden" value="1" name="available"/>
    <Form.Label>Product Name</Form.Label>
    <Form.Control name="productName" type="text" placeholder="Product Name" required/>
    </Form.Group>
    <Form.Group className="mb-3 " >
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" type="number" placeholder="Price" required/>
    </Form.Group>

    </div>
    <div className='product-description'>
    <Form.Group className="mb-3 " >
    <Form.Label>Product description </Form.Label>
    <Form.Control name="description" as="textarea" rows={2} placeholder="Product Description" required/>
    </Form.Group>
    </div>
    
    <Button variant="primary" type="submit" >
    Create
    </Button>


    </Form>
</div>
    )
  }
}
