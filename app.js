const express = require("express")
const indexRouter = require("./routes/index")
const cors = require("cors")
const app = express();

const port = 4001;
app.use(express.json());
app.use(cors())
app.use('/api', indexRouter);
app.listen(port, function () {
    console.log(`Listening port on the ${port}`)
});
