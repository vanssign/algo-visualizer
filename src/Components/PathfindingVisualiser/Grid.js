import React, { Component } from 'react';
import Node from './Node';
import './Pathfinding.css';

class Grid extends Component {
	render() {
		return (
			<div className='grid stop'>
				{this.props.grid.map((row, rowidx) => {
					return (
						<div className='row stop' key={rowidx}>
							{row.map((node, nodeidx) => {
								const {
									row,
									col,
									isStart,
									isFinish,
									distance,
									visited,
									iswall,
									previousnode,
								} = node;

								const { onMouseEnter, onMouseDown, onMouseUp } = this.props;

								return (
									<Node
										key={nodeidx}
										row={row}
										col={col}
										distance={distance}
										visited={visited}
										iswall={iswall}
										previousnode={previousnode}
										node={node}
										isStart={isStart}
										isFinish={isFinish}
										onMouseEnter={(row, col) => onMouseEnter(row, col)}
										onMouseDown={(node, row, col) =>
											onMouseDown(node, row, col)
										}
										onMouseUp={(row, col) => onMouseUp(row, col)}
									/>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Grid;

