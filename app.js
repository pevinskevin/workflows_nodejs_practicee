import express from 'express';
import path from 'path';

const app = express();

app.get('/', (req, res) => {
	res.send('Hello.');
});

app.listen(8080, () => {
	console.log('Server is runnig on port 8080');
});
