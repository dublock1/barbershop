import React, { Component } from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import {Button} from 'react-bootstrap'


export default class StyleList extends Component {
    state ={
        newStyle: {
            name: '',
            image: ''
        },
        style: []
    }

    componentDidMount() {
        this.getAllStyles()
    }

    getAllStyles = () => {
        axios.get('/api/styles').then(res => {
            this.setState({style: res.data})
        })
    }

    render() {
        const styleList = this.state.style.map(style => {
            return(
                <div>
                    <Link to={`/styles/${style._id}`}>
                    <h2>Type of Cut: {style.name}</h2>
                    <img src={style.image}/>
                    </Link>
                </div>
            )
        })

            return (
                <div>
                    <Link to={'/styles/new'}>
                    <Button>Add Style</Button>
                    </Link>
                    {styleList}                
                </div>
        )
    }
}
