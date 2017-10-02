
var Controller = function () {
    var controller = {
        
        self: null,
        initialize: function () {
            self = this;
           
            if (window.localStorage.length >= 1) {
               
                       self.renderLogin();
                
            } else {
                self.renderLoginToken();
            }
           
        },
       

        renderLogin: function () {
            var $cotent = $('ui-content');
            $cotent.empty();
            $('.nav-bar').hide();
            $('.ui-content').load("./view/login.html");
           
        },
         renderLoginToken: function () {
            var $cotent = $('ui-content');
            $cotent.empty();
            $('.nav-bar').hide();
            $('.ui-content').load("./view/loginToken.html");
           
        },
         renderPaginaInicial: function () {
            var $cotent = $('ui-content');
             $cotent.empty();
             $('.nav-bar').show();
             $('.ui-content').load("./view/page.html");
        }
    }
    controller.initialize();
    return controller;
}
 /*
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        $("#plataforma").html(device.uuid);
        
         $(".sucesso").hide();         
        
    },
    */