

    let login = () => {
        var config = {
            method: 'post',
            url: "https://api.relysia.com/v1/wallet",
            data: {
                  "email": document.getElementById("mail").value,
                  "password": document.getElementById("password").value
            }
        };
                
        axios(config)
        .then((response) => {
          let p = document.getElementById("token");
          console.log(response.data.data);
          p.innerHTML = JSON.stringify(response.data.data.token, null, "<br>");
        })
    };
    