const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors())
const PORT = 3001


app.get("/",(req, res) => {
    res.status(200).json({message: 'nde server is ok'})
    
})

app.listen(PORT,() => {
console.log(`listening on port ${PORT}`);
});