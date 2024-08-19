const express =  require ('express'),
cors = require ('cors');
const app = express();
app.use(express.json());
app.use(cors());

// app.use('/users', require('./api/users'));

app.get('/', (req, res) => {
  res.send('ברוך הבא לדף הבית!');
});

app.use('/users',   
    (req, res) => {
     const response = { message: 'Hello from users' };
     res.json(response); 
   });


app.listen(8000, ()=>{console.log('server is running on port 8000');
})


// module.exports = app;