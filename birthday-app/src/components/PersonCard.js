import React, { Component } from 'react';

import React, { useState } from "react";

class PersonCard extends Component{
    constructor(props){
        super(props)
        this.state = {
            age: props.age
        }
    }
    handleClick = () => {
        this.setState({
            age: this.state.age += 1
        })
    }
    render(){
        return(
            <div>
                <h1>{this.props.lastName}, {this.props.firstName}</h1>
                <p>Age: {this.props.age}</p>
                <p>Location: {this.props.location}</p>
                <button onClick={ () => this.handleClick()} className='btn btn-primary'>Click Here to Age</button>
            </div>
        )
    }
}

export default PersonCard