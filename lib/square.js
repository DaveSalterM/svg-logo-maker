const Shapes = require('./shapes.js');

class Square extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor);
	}

	render() {
		return `<rect x="25%" y="25px" width="150" height="150" fill="${this.shapeColor}"/>`;
	}

	renderString() {
		return `<svg width="300" height="200"><rect x="25%" y="25px" width="150" height="150" fill="${this.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="75" fill="${this.textColor}">${this.text}</text></svg>`;
	}
};

module.exports = Square;
