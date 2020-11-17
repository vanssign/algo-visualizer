import React, { Component } from 'react';
import './Pathfinding.css';

class Node extends Component {
	render() {
		const {
			row,
			col,
			distance,
			visited,
			iswall,
			previousnode,
			node,
			isStart,
			isFinish,
			onMouseEnter,
			onMouseDown,
			onMouseUp,
		} = this.props;

		let startorfinish;

		if (isStart) {
			startorfinish = 'node start';
		} else if (isFinish) {
			startorfinish = 'node finish';
		} else if (iswall === 'true') {
			startorfinish = 'node wall';
		} else {
			startorfinish = 'node';
		}

		return (
			<div
				id={`node-${row}-${col}`}
				className={startorfinish}
				node={node}
				row={row}
				col={col}
				iswall={iswall}
				distance={distance}
				visited={visited}
				previousnode={previousnode}
				onMouseEnter={() => onMouseEnter(row, col)}
				onMouseDown={() => onMouseDown(node, row, col)}
				onMouseUp={() => onMouseUp(row, col)}
			></div>
		);
	}
}

export default Node;

