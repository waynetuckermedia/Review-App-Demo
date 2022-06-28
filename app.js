const express = require('express');
const userRouter = require('./routes/user')

const app = express();
app.use(express.json())
app.use('/api/user', userRouter);


app.listen(8000, () => {
    console.log("The port is listening on port 8000")
});
