import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Barber extends Component {
  state = {
    redirectToHome: false,
    newBarber: {
      name: "",
      email: "",
      experience: "",
      bio: "",
      image: ""
    },
    styles: []
  };

  componentDidMount() {
    axios.get(`/api/barbers/${this.props.match.params.barberId}`).then(res => {
      this.setState({
        newBarber: res.data.barber,
        styles: res.data.styles
      });
    });
  }

  handleDelete = () => {
    axios.delete(`/api/barbers/${this.state.newBarber._id}`).then(() => {
      this.setState({ redirectToHome: true });
    });
  };
  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        <Link to='/'>
          <Button>
            Back to Shops
          </Button>
        </Link>
        <img src={this.state.newBarber.image} />
        <p> Barber name: {this.state.newBarber.name}</p>
        <p>Email: {this.state.newBarber.email}</p>
        <p> Experience: {this.state.newBarber.experience}</p>
        <p> Bio: {this.state.newBarber.bio}</p>
        <Button onClick={this.handleDelete}>Delete Profile</Button>
        <Link to={`/barbers/${this.state.newBarber._id}/edit`}>
          <Button>Edit</Button>
        </Link>

        {this.state.styles.map(style => {
          return (
            <div>
              <Link className="link-color" to={`/styles/${style._id}`}>
                {style.name}
                
              </Link>
            </div>
          );
        })}
        <Link
          to={`/barbers/${
            this.props.match.params.barberId
          }/styles/new`}
        >
          <Button>Add Style</Button>
        </Link>
      </div>
    );
  }
}
