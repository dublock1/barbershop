import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import axios from 'axios'
export default class EditBarberForm extends Component {
    state = {
        newBarber: {
          name: "",
          email: "",
          experience: "",
          bio: "",
          image: ""
        },
        redirectToHome: false
      };

      handleInputChange = e => {
        const copiedBarber = { ...this.state.newBarber };
        copiedBarber[e.target.name] = e.target.value;
    
        this.setState({ newBarber: copiedBarber });
      };

      handleSubmit = event => {
        event.preventDefault();
    
        axios
          .put(`/api/barbers/${this.state.newBarber._id}`, this.state.newBarber)
          .then(res => {
            this.setState({
              newBarber: res.data,
              redirectToHome: true
            });
          });
      };
    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/barbers" />;
          }
          return (
          <div>
              <form onSubmit={this.handleSubmit}>
                      <label htmlFor='new-barber-name'>Barber Name</label>
                          <input
                          type='text'
                          name='name'
                          id='new-barber-name'
                          onChange={this.handleInputChange}
                          value={this.state.newBarber.name}
                      />
                      <label htmlFor='new-barber-email'>Barber email</label>
                          <input 
                          type='text'
                          name='email'
                          id='new-barber-email'
                          onChange={this.handleInputChange}
                          value={this.state.newBarber.email}
                          />
      
                      <label htmlFor='new-barber-image'>Barber Image</label>
                          <input 
                          type='text'
                          name='image'
                          id='new-barber-image'
                          onChange={this.handleInputChange}
                          value={this.state.newBarber.image}
                          />
      
                      <label htmlFor='new-barber-experience'>Barber experience</label>
                          <input
                          type='text'
                          name='experience'
                          id='new-barber-experience'
                          onChange={this.handleInputChange}
                          value={this.state.newBarber.experience}
                      />
      
                      <label htmlFor='new-barber-bio'>Barber Bio</label>
                          <textarea
                          type='text'
                          name='bio'
                          id='new-barber-bio'
                          onChange={this.handleInputChange}
                          value={this.state.newBarber.bio}
                      />
      
                          <input type='submit' value='Edit Barber'/>
                      </form>
          </div>
          )
    }
}
