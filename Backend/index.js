const express = require('express')
const app = express()
const port = 3000
const cors = require("cors")

const mysql = require('mysql')

app.use(express.json())
app.use(cors())


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbadmin',
    password: '123',
    database: 'db'
})

connection.connect()
if (connection) { console.log("connect success") }
else { console.log("failed") }

// user table //

app.post("/register", (req, res) => {
    const username = req.body.username
    const firstname = req.body.username
    const lastname = req.body.username
    const phone = req.body.username
    const password = req.body.password
    connection.query('INSERT INTO user (username,firstname,lastname,phone, password) VALUES (?, ?,?,?,?)', [username, firstname, lastname, phone, password],
        (err, result) => {
            res.send(err)
        })
});

app.post('/login', (req, res) => {
    const username = req.body.username
    const password = req.body.password

    connection.query('SELECT * FROM user WHERE username= ? AND password = ?', [username, password],
        (err, result) => {
            if (err) {
                res.send(err)
            }
            if (result.length > 0) {
                res.send(result)
            } else {
                res.send({ message: 'User does not exist' })
            }
        }
    )
})

app.get('/allusers', (req, res) => {
    connection.query('SELECT * from user', (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/changepassword', (req, res) => {
    let username = req.query.username;
    let npassword = req.query.npassword;
    let cnpassword = req.query.cnpassword;
    let query = `UPDATE user SET password = '${npassword}' WHERE username = '${username}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err && npassword == cnpassword) throw err
        res.send(rows)
    })
});

app.get('/delete_user', (req, res) => {
    let cusid = req.query.cusid;
    let query = `DELETE FROM user WHERE cusid = '${cusid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

// orders table //

app.get("/order", (req, res) => {
    let cusid = req.query.cusid;
    let menuid = req.query.menuid;
    let quantity = req.query.quantity;
    let total = req.query.total;
    let query = `INSERT INTO orders (cusid, menuid, quantity, total) VALUES ('${cusid}', '${menuid}', '${quantity}', '${total}')`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/allorders', (req, res) => {
    connection.query('SELECT * from orders', (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/cus_order', (req, res) => {
    let cusid = req.query.cusid;
    let query = `SELECT * from orders WHERE cusid = '${cusid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/order_history', (req, res) => {
    let cusid = req.query.cusid;
    let query = `SELECT * from orders WHERE cusid = '${cusid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/delete_order', (req, res) => {
    let orderid = req.query.orderid;
    let query = `DELETE FROM orders WHERE orderid = '${orderid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

// menu table //

app.get('/allmenu', (req, res) => {
    connection.query('SELECT * from menu', (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/menu', (req, res) => {
    let menuid = req.query.menuid;
    let query = `SELECT * from menu WHERE menuid = '${menuid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/update_menu', (req, res) => {
    let menuid = req.query.menuid;
    let quantity = req.query.quantity;
    let query = `UPDATE menu SET quantity ='${quantity}' WHERE menuid = '${menuid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.get('/delete_menu', (req, res) => {
    let menuid = req.query.menuid;
    let query = `DELETE FROM menu WHERE menuid = '${menuid}'`;
    console.log(query);
    connection.query(query, (err, rows, fields) => {
        if (err) throw err
        res.send(rows)
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})