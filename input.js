let inputDirection = { x: 0, y: 0 };
let lastInputDirection = { x: 0, y: 0 };

document.addEventListener("keydown", (e) => {
	switch (e.key) {
		case "ArrowUp":
			if (lastInputDirection.y != 0) break;
			return (inputDirection = { x: 0, y: -1 });
		case "ArrowDown":
			if (lastInputDirection.y != 0) break;
			return (inputDirection = { x: 0, y: 1 });
		case "ArrowLeft":
			if (lastInputDirection.x != 0) break;
			return (inputDirection = { x: -1, y: 0 });
		case "ArrowRight":
			if (lastInputDirection.x != 0) break;
			return (inputDirection = { x: 1, y: 0 });
		default:
			return (inputDirection = { x: 0, y: 0 });
	}
});

export function getInputDirection() {
	lastInputDirection = inputDirection;
	return inputDirection;
}
