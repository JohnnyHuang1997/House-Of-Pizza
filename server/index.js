const express = require('express');
const helmet = require('helmet');
const morgan = require('morgan');

express()
	.use(express.json())
	.use(helmet())
	.use(morgan('tiny'))

	.listen(8000, () => {
		console.log(`Server listening on port ${8000}`);
	});
