import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {Button} from 'react-bootstrap'

export default class Style extends Component {
    state = {
        newStyle: {
          name: "",
          image: ""
        },
        redirectToHome: false
      };

      componentDidMount() {
        axios.get(`/api/styles/${this.props.match.params.styleId}`).then(res => {
            this.setState({newStyle: res.data})
        })
    }

    handleDelete = () => {
        axios.delete(`/api/styles/${this.state.newStyle._id}`).then(() => {
            this.setState({redirectToHome: true})
        })
    }

    render() {
        if (this.state.redirectToHome) {
            return <Redirect to="/styles" />;
          }
        return (
            <div>
                <p>{this.state.newStyle.name}</p>
                <img src={this.state.newStyle.image} />
                 <Button onClick={this.handleDelete}>Delete Style</Button>                
            </div>
        )
    }
}
