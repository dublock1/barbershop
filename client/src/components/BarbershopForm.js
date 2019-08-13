import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'

export default class NewBarbershopForm extends Component {
    state = {
        newBarbershop: {
            name: '',
            address: '',
            currentBarber: '',
            image: ''
        },
        redirectToHome: false
    }

    handleToggleForm = e => {
        this.setState(state => {
            return {isNewFormDisplayed: !state.isNewFormDisplayed }
        })
    }

    handleSubmit = e => {
        e.preventDefault();

        axios.post('/api/barbershops, this.state.newBarbershop').then(() => {
            this.setState({
                isNewFormDisplayed: false,
                redirectToHome: true
            })
            this.handleToggleForm()
        })
    }

    render() {
        if(this.state.redirectToHome) {
            return <Redirect to='/' />
        }
        return (
            <div>
                
            </div>
        )
    }
}
