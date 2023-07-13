const express = require('express');


const app = express();
app.use(express.json());
const port = 3000;
const userRoute = require('./routes/userRoute');
const AcademicoRouter = require('./routes/AcademicoRouter');
const cors = require('cors');
app.use(cors());

app.use('/academicos', AcademicoRouter);
app.use('/api/user', userRoute);



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});