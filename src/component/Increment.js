import React, { Component } from 'react'
import { connect } from "react-redux"
import { INCREMENT, DECREMENT } from './Reducer';

class Increment extends Component {
    state= {
        count:0
    }

    increment = () => {
        this.props.dispatch({ type: INCREMENT });
      }
    
      decrement = () => {
        this.props.dispatch({ type: DECREMENT });
      }
    
    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div> 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps)(Increment);