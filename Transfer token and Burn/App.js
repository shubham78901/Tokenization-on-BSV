
    let sendToken = async() => {  
        var config = {
            method: 'post',
            url: "https://api.relysia.com/v1/send",
            headers: { 
                authToken: "authToken" 
            },
            data: {
                 "dataArray": [
                    {
                      "to": "yourAddress",
                      "tokenId": "yourTokenId",
                      "amount": "amountToSend"
                    }
                  ]
            }
        };
        let p = document.getElementById("response");
        const res = await axios(config)
        .then((response) => {
           p.innerHTML = JSON.stringify(response.data.data.msg, null, "<br/>"); 
            console.log(response.data.data);
        }).catch(function (error) {
            p.innerHTML = JSON.stringify(error.response.data.data.msg, null, "<br/>");
            return error.message
        })
      
    };
    