
let issueToken = () => {
    var config = {
        method: 'post',
        url: "https://api.relysia.com/v1/issue",
        headers: { authToken: document.getElementById("authToken").value },
        data: {
          "name": document.getElementById("tokenName").value,
          "protocolId": "STAS",
          "symbol": document.getElementById("symbol").value,
          "description": document.getElementById("description").value,
          "image": document.getElementById("icon").value,
          "tokenSupply": document.getElementById("supply").value,
          "decimals": 0,
          "satsPerToken": 1,
          "properties": {
            "legal": {
              "terms": "Your token terms and description.",
              "licenceId": "T3ST-2"
            },
            "issuer": {
              "organisation": "Vaionex Corp.",
              "legalForm": "Limited",
              "governingLaw": "US",
              "issuerCountry": "US",
              "jurisdiction": "US",
              "email": "info@vaionex.com"
            },
            "meta": {
              "schemaId": "NFT1.0/MA",
              "website": "vaionex.com",
              "legal": {
                "terms": "© 2020 TAAL TECHNOLOGIES SEZC\nALL RIGHTS RESERVED. ANY USE OF THIS SOFTWARE IS SUBJECT TO TERMS AND CONDITIONS OF LICENSE. USE OF THIS SOFTWARE WITHOUT LICENSE CONSTITUTES INFRINGEMENT OF INTELLECTUAL PROPERTY. FOR LICENSE DETAILS OF THE SOFTWARE, PLEASE REFER TO: www.taal.com/stas-token-license-agreement"
              },
              "media": [
                {
                  "URI": "string",
                  "type": "string",
                  "altURI": "string"
                }
              ]
            }
          },
          "splitable": true
        }
    };
            
    axios(config)
    .then((response) => {
      let p = document.getElementById("token");
      console.log(response.data.data);
      p.innerHTML = JSON.stringify(response.data.data, null, "<br>");
    })
};
