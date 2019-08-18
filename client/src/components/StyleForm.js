import React, { Component } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

export default class StyleForm extends Component {
  state = {
    newStyle: {
      name: "",
      image: ""
    },
    redirectToHome: false
  };

  handleSubmit = e => {
    e.preventDefault();

    axios.post("/api/styles", this.state.newStyle).then(() => {
      this.setState({
        redirectToHome: true
      });
    });
  };

  handleInputChange = e => {
    const copiedStyle = { ...this.state.newStyle };
    copiedStyle[e.target.name] = e.target.value;

    this.setState({ newStyle: copiedStyle });
  };

  render() {
    if (this.state.redirectToHome) {
      return <Redirect to="/styles" />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-style-name">Type of Cut</label>
          <input
            type="text"
            name="name"
            id="new-style-name"
            onChange={this.handleInputChange}
            value={this.state.newStyle.name}
          />

          <label htmlFor="new-style-image">Style Image</label>
          <input
            type="text"
            name="image"
            id="new-style-image"
            onChange={this.handleInputChange}
            value={this.state.newStyle.image}
          />

          <input type="submit" value="Add Style" />
        </form>
      </div>
    );
  }
}
