import React, { Component } from 'react'
import { Button ,Form} from 'react-bootstrap'
import axios from '../axios'

/*eslint-disable */
export default class UpdateProductForm extends Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={
      ...this.props.product,
      response:''
    }
  }
// Form submitting logic, prevent default page refresh 
handleSubmit(event){
  event.preventDefault();
  let fd = new FormData(event.target);
  let data = Object.fromEntries(fd.entries());

  //update product
  let productId = this.state.id;
  axios.put(`products/${productId}`,data).then(({data})=>{
    this.setState({
      response:data.message
    })
    //hide modal
    setTimeout(()=>this.props.onHide(),1500)
  }).catch(err=>console.log(err))

}

  render() {
    return (
      <div>        
    <Form className='form-product'onSubmit={this.handleSubmit} >
      <h2 className="text-success lead text-center">{this.state.response}</h2>
      <div className='name-price'>

    <Form.Group className="mb-3 " >
    <Form.Label>Product Name</Form.Label>
    <Form.Control name="productName" type="text" placeholder="Product Name" value={this.state.productName}  onChange={(e)=>this.setState({productName: e.target.value})}/>
    </Form.Group>
    <Form.Group className="mb-3 " >
    <Form.Label>Price</Form.Label>
    <Form.Control name="price" type="number" placeholder="Price" value={this.state.price} onChange={(e)=>this.setState({price: e.target.value})}/>
    </Form.Group>

    </div>
    <div className='product-description'>
    <Form.Group className="mb-3 " >
    <Form.Label>Product description </Form.Label>
    <Form.Control name="description" as="textarea" rows={2} placeholder="Product Description" value={this.state.description}  onChange={(e)=>this.setState({description: e.target.value})}/>
    </Form.Group>



    </div>
    <Button variant="primary" type="submit">
    Update
    </Button>


    </Form>
</div>
    )
  }
}
