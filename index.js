const express = require('express');
const app = express();

app.use((req, res) => {
	console.log('new request came in!');
	res.send('Got your request, working on it!');
});

app.listen(3000, () => {
	console.log('listening on port 3000...');
});
