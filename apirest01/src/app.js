const express = require('express');
const tasksRouter = require('./routes/tasks.routes');
const app = express();
app.use(express.json());
app.use('/api/tasks', tasksRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost: ${PORT}`);
});
