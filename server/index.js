const express =  require ('express'),
cors = require ('cors');
const app = express();
app.use(cors());
app.use(express.json());

// app.use('/users', require('./users'));


// app.listen(8000, ()=>{console.log('server is running on port 8000');
// })

app.get('/users', (req, res) => {
    res.json({ message: 'Hello from users endpoint!' });
  });
  
  module.exports = app;