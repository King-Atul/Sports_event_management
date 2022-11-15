const express = require('express')
const app=express()

const connection = mysql.createConnection({
    host: 'dbms ass',
    user: 'root',
    password: 'Rajatul@08',
    database: 'sport'
})
const SELECT_ALL_USER_QUERY = 'SELECT * FROM player_info'
connection.connect(err => {
    if(err) {
        return err;
    }
})


app.use(cors())

app.get('/', (req, res) =>{
    res.send('go to /player to see the players')
})

app.get('/user', (req, res) => {
    connection.query(SELECT_ALL_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.json({
                data: result
            })
        }
    })
})

app.get('/player_info/c_player_records', (req, res) => {
    const{ f_name, l_name, age,gender } = req.query
    const INSERT_USER_QUERY = `INSERT INTO  player_info(p_fname,p_lname ,p_age,p_gender ) VALUES('${f_name}', '${l_name}','${age}', '${gender}')`
    connection.query(INSERT_USER_QUERY, (err, result) => {
        if(err) {
            return res.send(err)
        } else {
            return res.send('player added successfully')
        }
    })
})

// app.get('/',(req,res)=>{
//     res.send("Hello World")
// })

app.listen(3001,()=>{
    console.log("RUNNING ON PORT 3001")
})