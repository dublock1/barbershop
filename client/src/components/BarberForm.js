import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Form, Col, Button } from "react-bootstrap";

export default class BarberForm extends Component {
  state = {
    newBarber: {
      name: "",
      email: "",
      experience: "",
      bio: "",
      image: "",
      barbershopId: this.props.match.params.barbershopId
    },
    redirectToHome: false
  };

  handleSubmit = e => {
    e.preventDefault();

    axios.post("/api/barbers", this.state.newBarber).then(() => {
      this.setState({
        redirectToHome: true
      });
    });
  };

  handleInputChange = e => {
    const copiedBarber = { ...this.state.newBarber };
    copiedBarber[e.target.name] = e.target.value;

    this.setState({ newBarber: copiedBarber });
  };
  render() {
    if (this.state.redirectToHome) {
      return (
        <Redirect to={`/barbershops/${this.props.match.params.barbershopId}`} />
      );
    }
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridName">
              <Form.Label htmlFor="new-barber-name">Barber Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                id="new-barber-name"
                onChange={this.handleInputChange}
                value={this.state.newBarber.name}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label htmlFor="new-barber-email">Barber email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                id="new-barber-email"
                onChange={this.handleInputChange}
                value={this.state.newBarber.email}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId="formGridImage">
              <Form.Label htmlFor="new-barber-image">Barber Image</Form.Label>
              <Form.Control
                type="text"
                name="image"
                id="new-barber-image"
                onChange={this.handleInputChange}
                value={this.state.newBarber.image}
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridExp">
              <Form.Label htmlFor="new-barber-experience">
                Barber experience
              </Form.Label>
              <Form.Control
                type="text"
                name="experience"
                id="new-barber-experience"
                onChange={this.handleInputChange}
                value={this.state.newBarber.experience}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label htmlFor="new-barber-bio">Barber Bio</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              type="text"
              name="bio"
              id="new-barber-bio"
              onChange={this.handleInputChange}
              value={this.state.newBarber.bio}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Barber
          </Button>
        </Form>
      </div>
    );
  }
}
