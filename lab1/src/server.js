const express = require('express');
const axios = require('axios');
var config = require('dotenv').config();
const app = express();
app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,POST');
  res.append('Access-Control-Allow-Headers', '*');
  next();
});

const api_Key = process.env.API_KEY;
console.log(api_Key);
app.get('/getDish', async function(req, response) {

        let Baseurl;
      //  let corsURL = "https://cors-anywhere.herokuapp.com/";

        if (req.headers.stype == null && req.headers.squery == null || req.headers.stype == undefined && req.headers.squery == undefined) {
            Baseurl = "http://sunset.nada.kth.se:8080/iprog/group/15/recipes/search";
            console.log('firssssts',Baseurl);
        }
        else {
            Baseurl = "http://sunset.nada.kth.se:8080/iprog/group/15/recipes/search?type=" + req.headers.stype + "&query=" + req.headers.squery;
            console.log('seconddddd',Baseurl);
        }

        const options = {
          method: 'GET',
          headers: { 'X-Mashape-Key': api_Key }
        };
      
axios.get(Baseurl,options)
  .then(function (res) {
    // handle success
    return response.send(res.data).status(200);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
    


  });

  app.listen(8080, () => console.log(`app listening on port 8080!`));
