const Shapes = require('./shapes.js');

class Circle extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor);
	}

	render() {
		return `<circle cx="150" cy="100" r="80" width="300" height="200" fill="${this.shapeColor}"/>`;
	}

	renderString() {
		return `<svg width="300" height="200"><circle cx="150" cy="100" r="80" width="300" height="200" fill="${this.shapeColor}"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="75" fill="${this.textColor}">${this.text}</text></svg>`;
	}
};

module.exports = Circle;