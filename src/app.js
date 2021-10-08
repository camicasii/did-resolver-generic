const express = require('express')
const DidKeyDriver = require('did-method-generic')
const app = express()
const svc =   [  {
  "id": "#linkedin",
  "type": "linkedin",
  "serviceEndpoint": "https://www.linkedin.com/company/infinitelabs-co"
},
{
  "id": "#github",
  "type": "github",
  "serviceEndpoint": ""
},
{
  "id": "#gitlab",
  "type": "gitlab",
  "serviceEndpoint": "https://gitlab.com/infinite-labs"
}]
const didKeyDriver =  DidKeyDriver.driver({method:"moncon",service:svc})
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
  }
  catch(err){
    return res.status(500).send(err.message)
  }
})

module.exports = app