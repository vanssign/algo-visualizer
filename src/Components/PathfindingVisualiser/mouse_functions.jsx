export function handleMouseDown(node, row, col) {
	if (this.state.animated) return;
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
