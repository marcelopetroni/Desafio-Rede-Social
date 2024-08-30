const path = require('path');
require('dotenv').config({
    override: true,
    path: path.join(__dirname, '.env')
});

const express = require('express');
const cors = require('cors');  
const app = express();

app.use(cors());
app.use(express.json());

// user route
const userRouter = require('./routes/userRoutes');
app.use('/users', userRouter);

// post route
const postRouter = require('./routes/postRoutes');
app.use('/posts', postRouter);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Backend running on port ${PORT}`);
});
