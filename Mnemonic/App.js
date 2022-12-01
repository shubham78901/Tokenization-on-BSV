
let getMnemonic = () => {
    var config = {
        method: 'get',
        url: "https://api.relysia.com/v1/mnemonic",
        headers: { authToken: document.getElementById("authToken").value }
    };
            
    axios(config)
    .then((response) => {
      let p = document.getElementById("token");
      p.innerHTML = JSON.stringify(response.data.data, null, "<br>");
    })
};
