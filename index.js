const express = require('express');
const app = express();

// app.use((req, res) => {
// 	console.log('new request came in!');
// 	res.send('Got your request, working on it!');
// });

app.get('/', (req, res) => {
	res.send('Welcome to my first express using homepage!');
});

app.get('/p/:subpage', (req, res) => {
	const { subpage } = req.params;
	res.send(`<h1>Browsing the ${subpage} subpage</h1>`);
});

app.get('/p/:subpage/:postId', (req, res) => {
	const { subpage, postId } = req.params;
	res.send(`<h1>Viewing post ID: ${postId} the ${subpage} subpage</h1>`);
});

app.get('/dogs', (req, res) => {
	res.send('WOOF WOOF!');
});

app.get('/cats', (req, res) => {
	res.send('MEOOOOOW!');
});

app.listen(3000, () => {
	console.log('listening on port 3000...');
});
