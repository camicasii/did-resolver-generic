const express = require('express')
const didKeyDriver = require('did-method-generic').driver({method:"moncon"})
const app = express()
app.get('/1.0/identifiers/*',async function (req, res) {  
  try{
    const url = req.url
    const regex = /\/1.0\/identifiers\/(did:.*)/
  const did = regex.exec(url)[1]
  console.log(did);
  let meta = await didKeyDriver.get({did:did})  
  console.log('Resolving DID: ' + did)
  res.setHeader('Content-Type', 'application/json');
  return res.json(meta)
  }catch{
      return res.json({hola:'error'})
  }
})

module.exports = app