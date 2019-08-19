import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class BarbershopForm extends Component {
    state = {
        newBarbershop: {
            name: '',
            address: '',
            currentBarbers: [],
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
            <div>
                <form onSubmit={this.handleSubmit}>
                <label htmlFor='new-barbershop-name'>Shop Name</label>
                    <input
                    type='text'
                    name='name'
                    id='new-barbershop-name'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.name}
                />
                <label htmlFor='new-barbershop-address'>Shop Address</label>
                    <input 
                    type='text'
                    name='address'
                    id='new-barbershop-address'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.address}
                    />

                <label htmlFor='new-barbershop-image'>Shop Image</label>
                    <input 
                    type='text'
                    name='image'
                    id='new-barbershop-image'
                    onChange={this.handleInputChange}
                    value={this.state.newBarbershop.image}
                    />

                    <input type='submit' value='Add Shop'/>
                </form>
            </div>
        )
    }
}
