import React from 'react';
import {connect} from 'react-redux';
import { push } from 'react-router-redux';

import {setNameAction} from '../snake_model/actions/snakeActions';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
        };
    }

    handleChange(e) {
        this.setState({
            username: e.target.value,
        });
    }

    handleSubmit(){
        this.props.setName(this.state.username);
        this.props.dispatch(push('/play'));
    }

    render() {
        return (<div className="login">
            <input type="input" placeholder="username" onKeyDown={(e) => this.handleChange(e)}/>
            <input type="button" value="GO" onClick={() => this.handleSubmit()}/>
        </div>);
    }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        setName: name => dispatch(setNameAction(name)),
        dispatch: dispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
