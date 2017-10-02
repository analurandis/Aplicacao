 <script src="js/core.js"></script>
<script src="js/enc-base64.js"></script>
<script src="js/hmac.js"></script>
<script src="js/sha256.js"></script>
 function getBase64Encode(rawStr){
                var wordArray = CryptoJS.enc.Utf8.parse(rawStr);
                var result = CryptoJS.enc.Base64.stringify(wordArray);
                return result
            };
             function getBase64Decode(rawStr){
                var wordArray =CryptoJS.enc.Base64.parse(rawStr);
                var result = wordArray.toString(CryptoJS.enc.Utf8);
                return result
            };
                var email_field_value=$("#email_field").val();
                var password_field_value=$("#password_field").val();
            if (window.localStorage.length>=1) {
                var dados =  window.localStorage.getItem('token');
            }
                var header = {
                    "header":{
                        "alg": "HS256",
                        "typ": "JWT"
                    }
                };
                var payload ={
                    "payload":{
                        "uuid": device.uuid,
                        "email": email_field_value,
                        "model":device.model,
                        "platform":device.platform
                    }
                };
                var headerBase64 = getBase64Encode(header);
                var payloadBase64 = getBase64Encode(payload);
                var signature=CryptoJS.HmacSHA256(headerBase64 +"."+ payloadBase64 , password_field_value)
                var signatureBase64 = CryptoJS.enc.Base64.stringify(signature);
                var jwt = headerBase64 + "." +payloadBase64+"."+signatureBase64;
                var JSONdata = {
                    "email":email_field_value,
                    "senha":password_field_value,
                    "jwt": jwt,
                    "cadastro":false
                };
            
            

            function cadastrarToken()
            {
                 var header = {
                    "header":{
                        "alg": "HS256",
                        "typ": "JWT"
                    }
                };
                var payload ={
                    "payload":{
                        "uuid": device.uuid,
                        "email": email_field_value,
                        "model":device.model,
                        "platform":device.platform
                    }
                };
                var headerBase64 = getBase64Encode(header);
                var payloadBase64 = getBase64Encode(payload);
                var signature=CryptoJS.HmacSHA256(headerBase64 +"."+ payloadBase64 , password_field_value)
                var signatureBase64 = CryptoJS.enc.Base64.stringify(signature);
                var jwt = headerBase64 + "." +payloadBase64+"."+signatureBase64;
                var JSONdata = {
                    "email":email_field_value,
                    "senha":password_field_value,
                    "jwt": jwt,
                    "cadastro":false
                };
            alert(JSON.stringify(JSONdata));
                $.ajax({
                type: "post",
                url: "http://192.168.0.10/Usuarios/ValidarUsuario", 
                data: { 'dados': JSONdata },         
                dataType: "json", 
                success: function(resultado){  
                    $(".TelaLogin").hide();
                    $(".sucesso").fadeIn(); 
                    var res = JSON.stringify(resultado);
                    $(".retorno2").html('retorno'+ resultado["Retorno"]);
                    alert(res);
                    $(".BarraAcima").html('Pagina Inicial');
                    var storage = window.localStorage;
                    if (JSONdata['cadastro']==false) {
                        storage.setItem('token', JSONdata['jwt']);
                    };                   
                 },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                } 
          
            });
            }
 
         
            var btn = document.getElementById("btn");
 
            btn.addEventListener("click",cadastrar);




            $("#formLogin").submit(function (e){
                alert(JSON.stringify(JSONdata));
                $.ajax({
                type: "post",
                url: "http://localhost:51320/Usuarios/ValidarUsuario", 
                data: { 'dados': JSONdata },         
                dataType: "json", 
                success: function(resultado){  
                    $(".TelaLogin").hide();
                    $(".sucesso").fadeIn(); 
                    var res = JSON.stringify(resultado);
                    $(".retorno2").html('retorno'+ resultado["Retorno"]);
                    alert(res);
                    $(".BarraAcima").html('Pagina Inicial');
                    var storage = window.localStorage;
                    if (JSONdata['cadastro']==false) {
                        storage.setItem('token', JSONdata['jwt']);
                    };                   
                 },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                } 
          
            });
      });