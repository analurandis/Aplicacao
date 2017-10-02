var controller = null;
var app = {
    // Application Constructor
    initialize: function () {
        if (navigator.userAgent.match(/(iPhone|ipod|ipad|Android|BlackBerry)/)) {
            document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        }
        else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function () {
       controller = new Controller();
    },
   
    /*
    onDeviceReady: function() {
        this.receivedEvent('deviceready');
        $("#plataforma").html(device.uuid);
         if (window.localStorage.length>=1) {
            var dados =  window.localStorage.getItem('token');
            $(".TelaLoginToken").hide();
            $(".TelaLogin").show();
        }else{
            $(".TelaLoginInicial").show();
            $(".TelaLogin").hide();
        }
         $(".sucesso").hide();         
        
    },
    */

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);

        

    }
};

app.initialize();

