import React from 'react';
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
      <input type="button" value="Select" />
    </div>);
  }
}

export default LevelSelector;
