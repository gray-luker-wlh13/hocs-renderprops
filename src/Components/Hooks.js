import React, { Component } from 'react';

class Hooks extends Component {
    constructor(){
        super();
        this.state = {
            count: 0
        }
    }

    render(){
        return(
            <div>
                {this.state.count}
            </div>
        )
    }
}

export default Hooks;