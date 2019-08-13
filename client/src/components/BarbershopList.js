import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class BarbershopList extends Component {
    state = {
        newBarbershop: {
            name: '',
            address: '',
            currentBarber: '',
            image: ''
        },
        barbershops: []
    }

    componentDidMount() {
        this.getAllBarbershops();
    }

    getAllBarbershops = () => {
        axios.get('/api/memes').then(res => {
            this.setState({barbershops: res.data})
        })
    }    
    
    render() {

        const barbershopList = this.state.barbershops.map(barbershop => {
            return(
                <div>

                <Link key={barbershop._id} to ={`/barbershops/${barbershop._id}`}>
                    <h2>name={barbershop.name}</h2>
                    <h2>address={barbershop.address}</h2>
                    <h2>currentBarber={barbershop.currentBarber}</h2>
                    <img src ={barbershop.image} />
                </Link>
                </div>
            )
        })
        return barbershopList
    }
}
