const express =  require ('express'),
cors = require ('cors');
const app = express();
app.use(express.json());
app.use(cors());

// app.use('/users', require('./api/users'));
app.use('/users', (req, res)=>{
    console.log("Welcome");
    res.send("hooo",200);
    
});


// app.listen(8000, ()=>{console.log('server is running on port 8000');
// })


module.exports = app;