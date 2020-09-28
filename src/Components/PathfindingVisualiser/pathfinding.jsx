import React, { Component } from 'react';
import Grid from './grid';
import Navbar from './pathfindingNavbar';

let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;
let NUMBER_OF_ROWS = Math.floor(windowHeight * 0.0304);
let NUMBER_OF_NODES = Math.ceil(windowWidth * 0.0366);

class Pathfinding extends Component {
	state = {
		grid: [],
		animating: false,
		animated: false,
		clicked: false,
		startNodeRow: Math.floor(NUMBER_OF_ROWS / 2),
		startNodeCol: Math.floor(NUMBER_OF_NODES / 5),
		finishNodeRow: Math.floor(NUMBER_OF_ROWS / 2),
		finishNodeCol: NUMBER_OF_NODES - Math.floor(NUMBER_OF_NODES / 5) - 1,
		changingStart: false,
		changingFinish: false,
	};
	componentDidMount() {
		const grid = this.getNewGrid();
		this.setState({ grid });
	}

	createNode = (row, col) => {
		const {
			startNodeRow,
			startNodeCol,
			finishNodeRow,
			finishNodeCol,
		} = this.state;
		return {
			row,
			col,
			isStart: row === startNodeRow && col === startNodeCol,
			isFinish: row === finishNodeRow && col === finishNodeCol,
			distance: Infinity,
			visited: 'false',
			iswall: 'false',
			previousnode: null,
		};
	};

	getNewGrid = () => {
		let grid = [];
		for (let row = 0; row < NUMBER_OF_ROWS; row++) {
			const thisRow = [];
			for (let col = 0; col < NUMBER_OF_NODES; col++) {
				thisRow.push(this.createNode(row, col));
			}
			grid.push(thisRow);
		}
		return grid;
	};

	getNewStart(grid, row, col) {
		let newGrid = grid.slice();
		const node = newGrid[row][col];
		const newNode = { ...node, isStart: !node.isStart };
		newGrid[row][col] = newNode;
		return newGrid;
	}

	getNewFinish(grid, row, col) {
		let newGrid = grid.slice();
		const node = newGrid[row][col];
		const newNode = { ...node, isFinish: !node.isFinish };
		newGrid[row][col] = newNode;
		return newGrid;
	}

	getNewGridWithWalls(grid, row, col) {
		let newGrid = grid.slice();
		const node = newGrid[row][col];
		if (node.iswall === 'false') node.iswall = 'true';
		else node.iswall = 'false';
		newGrid[row][col] = node;
		return newGrid;
	}

	// MOUSE EVENTS

	handleMouseDown(node, row, col) {
		// if (this.state.animated) return;
		// Changes node depending on its attributes
		if (node.isStart) {
			let newGrid = this.getNewStart(this.state.grid, row, col);
			this.setState({ changingStart: true, grid: newGrid, clicked: true });
			return;
		} else if (node.isFinish) {
			let newGrid = this.getNewFinish(this.state.grid, row, col);
			this.setState({ changingFinish: true, grid: newGrid, clicked: true });
			return;
		} else {
			let newGrid = this.getNewGridWithWalls(this.state.grid, row, col);
			this.setState({ grid: newGrid, clicked: true });
		}
	}

	handleMouseEnter(row, col) {
		// if (!this.state.clicked) return;
		// Avoids making start or finish a wall
		if (this.state.changingStart || this.state.changingFinish) return;
		let newGrid = this.getNewGridWithWalls(this.state.grid, row, col);
		this.setState({ grid: newGrid });
	}

	handleMouseUp(row, col) {
		if (this.state.changingStart) {
			let newGrid = this.getNewStart(this.state.grid, row, col);
			this.setState({
				changingStart: false,
				grid: newGrid,
				startNodeRow: row,
				startNodeCol: col,
			});
		} else if (this.state.changingFinish) {
			let newGrid = this.getNewFinish(this.state.grid, row, col);
			this.setState({
				changingFinish: false,
				grid: newGrid,
				finishNodeRow: row,
				finishNodeCol: col,
			});
		}
		this.setState({ clicked: false });
	}

	render() {
		const { grid, animated, animating } = this.state;

		return (
			<Grid
				grid={grid}
				onMouseEnter={(row, col) => this.handleMouseEnter((row, col), col)}
				onMouseDown={(node, row, col) => this.handleMouseDown(node, row, col)}
				onMouseUp={(row, col) => this.handleMouseUp(row, col)}
			/>
		);
	}
}

export default Pathfinding;