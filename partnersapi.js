// const axios = require('axios');

// axios.get('http://join.navgurukul.org/api/partners')
//   .then(response => {
//     console.log(response.data);
//     // console.log(response.data.explanation);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const request = require('request');

request('http://join.navgurukul.org/api/partners', { json: true }, (err, res, body) => {
  if (err){
    return err
  }
  else{
    data = body['data']
    for (var i = 0; i < data.length; i++){
      console.log(data[i]['name'])
    }
  }
});

