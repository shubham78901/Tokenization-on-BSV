
    let sendToken = async() => {  
        var config = {
            method: 'post',
            url: "https://api.relysia.com/v1/send",
            headers: { 
                authToken: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImE5NmFkY2U5OTk5YmJmNWNkMzBmMjlmNDljZDM3ZjRjNWU2NDI3NDAiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiU0hVQkhBTSBHQVVUQU0iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EtL0FDTlBFdS01bjNtd0NmcThFdFlRY1V5T1NMVkpaUHVZRWQ1T0pxcFQ2VVdPPXM5Ni1jIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL2hpdmVkYi1jZGJmNyIsImF1ZCI6ImhpdmVkYi1jZGJmNyIsImF1dGhfdGltZSI6MTY2NDQ0Mzc0MSwidXNlcl9pZCI6ImMyc3ZFdHZYV25NMUNWUHUwQVVOckR6dkpJaDEiLCJzdWIiOiJjMnN2RXR2WFduTTFDVlB1MEFVTnJEenZKSWgxIiwiaWF0IjoxNjY5Nzg0OTc3LCJleHAiOjE2Njk3ODg1NzcsImVtYWlsIjoic3MzNjM3NTdAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZ29vZ2xlLmNvbSI6WyIxMDMwMzc4OTQ5ODA5NDAxODMxMjUiXSwiZW1haWwiOlsic3MzNjM3NTdAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoiZ29vZ2xlLmNvbSJ9fQ.WLd2bFt9_gxnUIVF216yXLJk5iyUP6e7djSoAIHG0ZTGW7WrClRH8IntvRIMOwYJvG6W0qLk8bxYPXHvK0hzHjm17Wjmvtbty0CSQWdzmOih7kimF-064H-kNdeey_YrJQNrcFKb50vPvHZpNXDt9WdZIB_y4w8bnbgl_3FlQzuIKPZ4JnYb6rJmf2i4PznRGJ_8zn4R0yM1t0wGO5cjWBvzv7MtVZ52I1iKjF-_oXWyoFUWywvxYFTp90YI5JJp-_RaE7LppKBnfNe3YbBB9X4lz05yfd4J67tJ0IK5abvoTnRZAxuF440R7qeqVD2VCXXMZCZcjlX3kqakskYxdw"
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
        const res = await axios(config)
        .then((response) => {
           p.innerHTML = JSON.stringify(response.data.data.msg, null, "<br/>"); 
            console.log(response.data.data);
        }).catch(function (error) {
            p.innerHTML = JSON.stringify(error.response.data.data.msg, null, "<br/>");
            return error.message
        })
      
    };
    