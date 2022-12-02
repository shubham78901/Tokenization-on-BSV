
function myfunction() {
  longfunctionfirst(send);
}

function longfunctionfirst(callback) {
  setTimeout(function() {
      alert('Time reached');
      if(typeof callback == 'function')
          callback();
  }, 10000);
};





function send() {  


  var config = {
    method: 'post',
    url: "https://api.relysia.com/v1/send",
    headers: { 
      authToken: document.getElementById("authToken").value 
    },
    data: {
       "dataArray": [
        {
         "to": document.getElementById("to").value,
       
         "tokenId": document.getElementById("tokenId").value,
         "amount": document.getElementById("amount").value
        }
        ]
     }
};
            
    let p = document.getElementById("response");   
     
    axios(config)
    .then((response) => {
      
      console.log(response.data.data);
      p.innerHTML = JSON.stringify(response.data.data.msg, null, "<br/>");
    }).catch(function (error) {
        p.innerHTML = JSON.stringify(error.response.data.data.msg, null, "<br/>");
        return error.message
    })
}

