import React, { Component } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class BarberList extends Component {
  state = {
    barbers: [],
    newBarber: {
      name: "",
      email: "",
      experience: "",
      bio: "",
      image: ""
    }
  };

  componentDidMount() {
    this.getAllBarbers();
  }

  getAllBarbers = () => {
    axios.get("/api/barbers").then(res => {
      this.setState({ barbers: res.data });
    });
  };

  render() {
    const barberList = this.state.barbers.map(barber => {
      return (
        <div>
          <Link key={barber._id} to={`/barbers/${barber._id}`}>
            {barber.name}
            {barber.email}
            {barber.experience}
            {barber.bio}
            {barber.image}
          </Link>
        </div>
      );
    });
    return (
      <div>
        <Link to={"/barbers/new"}>
          <Button>Add Barber</Button>
        </Link>
        <Link to={'/'}>
            <Button>Find Shop</Button>
        </Link>
        {barberList}
      </div>
    );
  }
}
