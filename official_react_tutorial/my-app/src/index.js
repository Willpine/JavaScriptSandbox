import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Square (props){
    return(
        <button className="square" 
        onClick={() => {props.onClick()}}> 
            {/* This is an event handler, we are going to use arrow functions for this */}
            {/* A common mistake is using onClick={alert('click');} which will fire this event everytime this component re-renders*/}
            {props.value}
        </button>
    );
}

class Board extends React.Component {

    renderSquare(i) {
        return ( 
            <Square value={this.props.squares[i]} onClick={() => this.props.onClick(i)} />
        );
    }

    render () {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            history: [{squares: Array(9).fill(null),}],
            stepNumber: 0,
            xIsNext: true,
            position: [],
        }
    }
    
    handleClick(i) {
        const history = this.state.history.slice(0, this.state.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        const position = this.state.position.slice();

        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
            history: history.concat([{squares: squares,}]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext,
            position: position.concat(i),
        });
    }

    jumpTo(step) {
        this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
    }

    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber];
        const winner = calculateWinner(current.squares);

        const moves = history.map((step, move) => 
        {
            const square = this.state.position[move - 1];
            const position = calculatePosition(square);
            const desc = move ? `Go to move ${move} col: ${position[1]}, row: ${position[0]}` : 'Go to game start'
            return(
                <li key={move}>
                <button onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = `Winner: ${winner}`;
        } else {
            status = `Next player: ${this.state.xIsNext ? 'X' : 'O'}`;
        }
        return (
            <div className="game">
                <div className="game-board">
                    <Board squares={current.squares} onClick={(i) => this.handleClick(i)}/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div>
        );
    }
}

// The lines array represents all possible 3 square lines
// For every 3 square line possible, the corresponding
//squares from the game previously played are comapared.
// If all of them are the same, then we got a winner.
function calculateWinner(squares) {
   const lines = [
       [0,1,2],
       [3,4,5],
       [6,7,8],
       [0,3,6],
       [1,4,7],
       [2,5,8],
       [0,4,8],
       [2,4,6],
   ];
   for (let i = 0; i < lines.length; i++) {
       const [a,b,c] = lines[i];
       if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
           return squares[a];
       } 
   } 
   return null;
}

function calculatePosition(square) {
    switch (square) {
        case 0:
            return [1,1];
        case 1:
            return [1,2];
        case 2:
            return [1,3];
        case 3:
            return [2,1];
        case 4:
            return [2,2];
        case 5:
            return [2,3];
        case 6:
            return [3,1];
        case 7:
            return [3,2];
        case 8:
            return [3,3];
        default:
            return null;
    
    }
}
// =======================================

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);