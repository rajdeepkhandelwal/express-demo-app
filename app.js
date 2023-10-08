//write express basic setup code this is app.js file
const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.get('/', (req, res) => {
    res.json({success: true});
})

app.listen(port, () => {
    console.log(`app listening on port ${port}!`);
})