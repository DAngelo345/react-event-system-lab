// Code Keypad Component Here
import React, { Component } from 'react';

export default class Keypad extends Component {

    handleOnKeyUP = () => {
        console.log('Entering password...')
    }

    render() {
        return (
            <div>
                <input onKeyUp={this.handleOnKeyUP} type="password" />
                
                </div>
        )
      }
    

}