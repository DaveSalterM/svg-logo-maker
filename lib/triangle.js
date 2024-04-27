const Shapes = require('./shapes.js');

class Triangle extends Shapes {
	constructor(text, textColor, shapeColor) {
		super(text, textColor, shapeColor);
	}

	render() {
		return `<polygon points="150, 18 244, 182 56, 182" width="300" height="200" fill="${this.shapeColor}"/>`;
	}

	renderString() {
		return `<svg width="300" height="200"><polygon points="150, 18 244, 182 56, 182" width="300" height="200" fill="${this.shapeColor}"/><text x="50%" y="70%" dominant-baseline="middle" text-anchor="middle" font-size="75" fill="${this.textColor}">${this.text}</text></svg>`;
	}
};

module.exports = Triangle;
