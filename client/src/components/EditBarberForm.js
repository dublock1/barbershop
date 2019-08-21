import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { Form, Col, Button } from "react-bootstrap";

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

  componentDidMount() {
    axios.get(`/api/barbers/${this.props.match.params.barberId}`).then(res => {
      this.setState({ newBarber: res.data.barber });
    });
  }

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
      return <Redirect to={`/barbers/${this.props.match.params.barberId}`} />;
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
            Update Barber
          </Button>

        </Form>
      </div>
    );
  }
}
