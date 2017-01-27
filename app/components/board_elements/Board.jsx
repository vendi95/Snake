import React from 'react';
import {connect} from 'react-redux';

import {turnAction, stepAction} from '../../snake_model/actions/snakeActions'

import BoardElement from './BoardElement';

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.keyBoardEventHandler = e => {
            if (e.which == 37) {
                this.props.turn({x: -1, y: 0});
            }
            else if (e.which == 38) {
                this.props.turn({x: 0, y: -1});
            }
            else if (e.which == 39) {
                this.props.turn({x: 1, y: 0});
            }
            else if (e.which == 40) {
                this.props.turn({x: 0, y: 1});
            }
        };
    }

    componentWillMount() {
        document.addEventListener("keydown", this.keyBoardEventHandler);
        this.timer = setInterval(() => {
            this.props.step();
        }, this.props.speed);
        this.setState({
            speed: this.props.speed
        });
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyBoardEventHandler);
        clearInterval(this.timer);
    }

    componentDidUpdate() {
        if (this.props.speed != this.state.speed) {
            clearInterval(this.timer);
            this.timer = setInterval(() => {
                this.props.step();
            }, this.props.speed);
            this.setState({
                speed: this.props.speed
            });
        }
    }

    render() {
        const snakeElements = this.props.snake.map(pos => {
            const element = {
                type: 'snake',
                position: pos,
            };
            return <BoardElement childrenData={element}/>
        });
        const boardElements = this.props.boardObjects.map(element => <BoardElement
            childrenData={element}
        />);

        const boardStyle = {
            width: `${this.props.size.width * 15}px`,
            height: `${this.props.size.height * 15}px`,
        };

        var gameOver = null;
        if(this.props.gameOver){
            gameOver = (<div className="gameOver">
                GAME OVER
            </div>);
        }

        return (
            <div>
                <div className="board" style={boardStyle}>
                    {boardElements}
                    {snakeElements}
                </div>
                <div className="score">
                    score:{this.props.snake.length}
                </div>
                {gameOver}
            </div>);
    }
}

function mapStateToProps(state) {
    return state;
}


function mapDispatchToProps(dispatch) {
    return {
        turn: direction => dispatch(turnAction(direction)),
        step: () => dispatch(stepAction()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
