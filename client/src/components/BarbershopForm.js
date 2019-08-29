import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { Form, Col} from 'react-bootstrap'

export default class BarbershopForm extends Component {
    state = {
        newBarbershop: {
            name: '',
            address: '',
            currentBarbers: '',
            image: ''
        },
        redirectToHome: false
    }

    

    handleSubmit = e => {
        e.preventDefault();

        axios.post('/api/barbershops', this.state.newBarbershop).then(() => {
            this.setState({
                isNewFormDisplayed: false,
                redirectToHome: true
            })
           
        })
    }

    handleInputChange = e => {
        const copiedBarbershop = { ...this.state.newBarbershop };
        copiedBarbershop[e.target.name] = e.target.value;
    
        this.setState({ newBarbershop: copiedBarbershop });
      };

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/' />
        }
        return (
            <div >
                <Form onSubmit={this.handleSubmit} className='form'>
                <Form.Row>
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label htmlFor='new-barbershop-name'>Shop Name</Form.Label>
                    <Form.Control
                    type='text'
                    name='name'
                    id='new-barbershop-name'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.name}
                />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAddress" >
                <Form.Label htmlFor='new-barbershop-address'>Shop Address</Form.Label>
                    <Form.Control
                    type='text'
                    name='address'
                    id='new-barbershop-address'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.address}
                    />
                    </Form.Group>
                    </Form.Row>

                <Form.Label htmlFor='new-barbershop-image'>Shop Image</Form.Label>
                    <input 
                    type='text'
                    name='image'
                    id='new-barbershop-image'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.image}
                    />

                    <input type='submit' value='Add Shop'/>
                </Form>
            </div>
        )
    }
}
