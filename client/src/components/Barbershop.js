import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
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
        <p>{this.state.newBarbershop.name}</p>
        <p>{this.state.newBarbershop.address}</p>
        <li>{this.state.newBarbershop.currentBarbers}</li>
        <img src={this.state.newBarbershop.image} />
        <ul>
          {this.state.barbers.map(barber => {
            return (
              <div>
                <li>{barber.name}</li>
              </div>
            );
          })}
        </ul>
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
