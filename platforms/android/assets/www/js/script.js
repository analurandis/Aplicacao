$(".sucesso").hide(); 

            var rand = function() {
                return Math.random().toString(36).substr(2); // remove `0.`
            };
            var token = function() {
                return rand() + rand(); // to make it longer
            };
            function token(){

            } 
            

            $("#formLogin").submit(function (e){
                var email_field_value=$("#email_field").val();
                var password_field_value=$("#password_field").val();
                
                var JSONdata= {
                       "email": email_field_value,
                       "senha": password_field_value,
                       "dispositivo": device.uuid,
                       "token":{"uuid":device.uuid,
                                "model":device.model,
                                "platform":device.platform,
                                "uuid":device.uuid,
                                "version":device.version,
                                "manufacture":device.manufacturer}}

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
                    var token = token();
                    storage.setItem('Usuario', token);                      
                 },
                error: function(XMLHttpRequest, textStatus, errorThrown) { 
                    alert("Status: " + textStatus); alert("Error: " + errorThrown); 
                } 
          
            });
      });

