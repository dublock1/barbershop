import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Barbershop extends Component {
  state = {
    redirectToHome: false,
    newBarbershop: {
      name: "",
      address: "",
      currentBarbers: [],
      image: ""
    },
    barbers: []
  };

  componentDidMount() {
    axios
      .get(`/api/barbershops/${this.props.match.params.barbershopId}`)
      .then(res => {
        this.setState({
          newBarbershop: res.data.barbershop,
          barbers: res.data.barbers
        });
      });
  }

  handleDelete = () => {
    axios
      .delete(`/api/barbershops/${this.state.newBarbershop._id}`)
      .then(() => {
        this.setState({ redirectToHome: true });
      });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Jumbotron className="tron" style={{maxWidth: '50em', margin: '0 20rem'}}>
        <p>Shop name: {this.state.newBarbershop.name}</p>
        <p> Address: {this.state.newBarbershop.address}</p>
        <img src={this.state.newBarbershop.image} />
        <p>{this.state.newBarbershop.currentBarbers}</p>
        <ul>
          {this.state.barbers.map(barber => {
            return (
              <div>
                <Link className="link-color" to={`/barbers/${barber._id}`}>
                  <li>{barber.name}</li>
                </Link>
              </div>
            );
          })}
        </ul>
          </Jumbotron>
        <Button onClick={this.handleDelete}>Delete Shop</Button>
        <Link
          to={`/barbershops/${
            this.props.match.params.barbershopId
          }/barbers/new`}
        >
          <Button>Add Barber</Button>
        </Link>
      </div>
    );
  }
}
