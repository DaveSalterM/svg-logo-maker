const fs = require('fs');
const inquirer = require('inquirer');
const Circle = require('./lib/circle.js');
const Square = require('./lib/square.js');
const Triangle = require('./lib/triangle.js');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter up to 3 letters for logo: ',
			name: 'text',
		},
		{
			type: 'input',
			message: 'Enter TEXT color (name ie "blue" or Hex including "#"): ',
			name: 'textColor',
		},
		{
			type: 'list',
			message: 'Choose a logo shape: ',
			name: 'shape',
			choices: ['circle', 'square', 'triangle'],
		},
		{
			type: 'input',
			message: 'Enter SHAPE color (name ie "blue" or Hex including "#"): ',
			name: 'shapeColor',
		},
	])
	.then((data) => {
		let shape;
		if (data.shape === 'circle') {
			shape = new Circle(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}
		if (data.shape === 'square') {
			shape = new Square(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}
		if (data.shape === 'triangle') {
			shape = new Triangle(data.text, data.textColor, data.shapeColor);
			shape = shape.renderString();
		}

		fs.writeFile('./examples/logo.svg', shape, (err) => {
			err ? console.error(err) : console.log('Generated logo.svg');
		});
	});
