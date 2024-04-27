class Shapes {
	constructor(text, textColor, shapeColor) {
		if (text.length > 3) {
			throw new Error('Please enter a maximum of 3 letters');
		}
		this.text = text;

		if (textColor[0] === '#') {
			if (textColor.length < 4 || textColor.length > 7) {
				throw new Error('Please enter a valid color');
			}
		}
		this.textColor = textColor;

		if (shapeColor[0] === '#') {
			if (shapeColor.length < 3 || shapeColor.length > 7) {
				throw new Error('Please enter a valid color');
			}
		}
		this.shapeColor = shapeColor;
	}
}

module.exports = Shapes;
