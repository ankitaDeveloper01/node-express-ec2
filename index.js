import express from 'express'

const app =  express()
app.listen(5001, () => console.log("API is running on port"))

app.get('/pop', (req,res) => res.json('My API running'))

app.push('/name', (req,res) => res.json('chitti robot 1.0'))