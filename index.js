const express = require('express');
const userRouter = require('./route/user.route')
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);

app.use((req, res, next) => {
    res.status(404).json({
        message: "resource not found"
    })
});

app.listen(port, () => {
    console.log(`server is running at http://localhost:${port}/users`)
});