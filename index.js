const fs = require('fs');
const inquirer = require('inquirer');

inquirer
	.prompt([
		{
			type: 'input',
			message: 'Enter up to 3 letters for logo: ',
			name: '',
		},
		{
			type: 'input',
			message: 'Enter TEXT color (red, green, blue, etc.): ',
			name: '',
		},
		{
			type: 'list',
			message: 'Choose a logo shape: ',
			name: '',
			choices: [],
		},
		{
			type: 'input',
			message: 'Enter SHAPE color (red, green, blue, etc.): ',
			name: '',
		},
	]);