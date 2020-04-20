import React, { Component } from 'react'
import { connect } from "react-redux"
import { INCREMENT, DECREMENT } from './Reducer';
import styled from "styled-components"

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
                <div>
                    <Button className="ml-2 mr-2 p-3" onClick={this.decrement}>-</Button>
                    <Input className="text-center" value={this.props.count} readonly="readonly"/>
                    <Button className="ml-2 mr-2 p-3" onClick={this.increment}>+</Button>
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

const Button = styled.button`
  color: white;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  background-color: palevioletred ;
`;

const Input = styled.input`
  padding: 15px;
  color: "palevioletred";
  border: 2px solid palevioletred;
  border-radius: 3px;
`;