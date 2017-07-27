import React from 'react';
import {connect} from 'react-redux';
import {IncrementAction, DecrementAction} from '../Actions/counterActions'

class Counter extends React.Component{

    increment(){
        this.props.increment(2);
    }

    decrement(){ 
        this.props.decrement(2);
    }

    render(){
        return <div>
                 <button onClick={this.increment.bind(this)}> + </button>
                 <button onClick={this.decrement.bind(this)}> - </button>
                 <span> {this.props.count} </span>
             </div>
    }
}

function mapStateToProps (state) {
    return {
        count : state.count
    }
}

function mapDispatchToProps (dispatch) {
    return {
        increment: (param) => {dispatch(IncrementAction(param))},
        decrement: (param) => {dispatch(DecrementAction(param))}
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (Counter);