const app = require('./app');
const cors = require('cors');
app.use(cors());
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.get('/',  async(_req, res) => {
    res.status(200).send("Welcome to the student management api")
})


