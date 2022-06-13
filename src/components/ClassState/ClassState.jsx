import React, { Component } from 'react'

export default class ClassState extends Component {
    // state = {
    //     name: "Riju",
    //     email: "riju@gmail.com",
    //     city: this.props.city
    // }
     
    constructor(props){
        super(props)
        this.state={
            name:"Riju",
            email:"riju@gmail.com",
            city:this.props.city
        }
    }
    render() {
        return (
            <>
                <h1>React State in Class Component</h1>
                <p>{this.state.name}</p>
                <p>{this.state.email}</p>
                <p>{this.state.city}</p>
            </>
        )
    }
}
