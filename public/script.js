
async function decode(){
    const token=document.getElementById("token").value 
    const decode_header=document.getElementById("decoded_header_text")
    const decode_payload=document.getElementById("decoded_payload_text")

    if(!token.trim()){
        decode_header.value = "Invalid Token";
        decode_payload.value = "Invalid Token";
        return;
    }

    try{
        const response = await axios.post("http://localhost:3000/decode",{
            token: token
        });

        console.log(response.data);
        
        getInfo(decode_header, decode_payload, response);

    }catch(err){
        decode_header.value = "Invalid Token";
        decode_payload.value = "Invalid Token";
    }
}


function getInfo(decode_header, decode_payload, response){
    try{
        decode_header.value = JSON.stringify(response.data.header, null, 2);
        decode_payload.value = JSON.stringify(response.data.payload, null, 2);
    }catch(err){
        decode_header.value = "Invalid Token";
        decode_payload.value = "Invalid Token";
    }
}