import React from 'react';
import {connect} from 'react-redux';

import {restartAction} from '../../snake_model/actions/snakeActions';

import Level from './Level';

class LevelSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  handleChange(e) {
    this.setState({
      selected: e.target.value,
    });
    e.preventDefault();
  }

  handleSubmit(){
    this.props.restart(this.props.levels[this.state.selected]);
  }

  render() {
    const children = this.props.levels.map(
            (child, id) =>
              <Level
                id={id}
                size={child.size}
                speed={child.speed}
              />);

    return (<div className="levelSelector">
      <select onChange={e => this.handleChange(e)} value={this.state.selected}>
        {children}
      </select>
      <input type="button" value="Restart" onClick={() => this.handleSubmit()}/>
    </div>);
  }
}

function mapStateToProps(state) {
    return state;
}

function mapDispatchToProps(dispatch) {
    return {
        restart: level => dispatch(restartAction(level)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LevelSelector);
