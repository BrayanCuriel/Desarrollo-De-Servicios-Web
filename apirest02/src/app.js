const express = require('express');
const userRoutes=require('./routes/users.routes');

const app = express();
app.use(express.json()); //json

app.get("/",(req,res)=>{
    res.status(200).send("ok");
});

app.use('/api/users',userRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`server running on http://localhost:${PORT}`);
});