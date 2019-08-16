import React, { Component } from "react";
import axios from "axios";
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'

export default class Barber extends Component {
  state = {
    redirectToHome: false,
    newBarber: {
      name: "",
      email: "",
      experience: "",
      bio: "",
      image: ""
    }
  };

  componentDidMount(){
      axios.get(`/api/barbers/${this.props.match.params.barberId}`).then(res => {
          this.setState({newBarber: res.data})
      })
  }

  handleDelete = () => {
    axios.delete(`/api/barbers/${this.state.newBarber._id}`).then(() => {
        this.setState({redirectToHome: true})
    })
}
  render() {
    if(this.state.redirectToHome) {
        return <Redirect to='/barbers' />
    }
    return (
        <div>
            <p>{this.state.newBarber.name}</p>
            <p>{this.state.newBarber.email}</p>
            <p>{this.state.newBarber.experience}</p>
            <p>{this.state.newBarber.bio}</p>
            <img src={this.state.newBarber.image} />
            <Button onClick={this.handleDelete}>Delete Profile</Button>
            <Link to={`/barbers/${this.state.newBarber._id}/edit`}>
            <Button>Edit</Button>
            </Link>
            
        </div>
    )
  }
}
