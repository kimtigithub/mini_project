import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import cookieParser from 'cookie-parser';

const express = require('express');
const mysql = require('mysql')
const cors = require('cors')

const app = express();
app.use(cors());
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: "localhost",
    user:'root',
    password:'',
    database:'signup'
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`gender`,`contact`,`email`,`password`,`retypeNewPass`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.gender,
        req.body.contact,
        req.body.email,
        req.body.password,
        req.body.retypeNewPass
    ]
    db.query(sql, [values],(err, data) => {
        if(err){
            return res.json("Error");
        }
        return res.json(data);
    })
})


  
app.listen(8081, ()=> {
    console.log("listening....");
})