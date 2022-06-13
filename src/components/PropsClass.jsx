import React, { Component } from 'react'

export default class PropsClass extends Component {
  render() {
    return (
      <>
         <h1>Student Name: {this.props.name}</h1> 
         <h1>Student email: {this.props.email}</h1> 
         <h1>Student phone: {this.props.phone}</h1> 
         <h1>Student class: {this.props.class}</h1> 
      </>
    )
  }
}
