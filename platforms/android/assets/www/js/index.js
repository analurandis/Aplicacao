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
   
   

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        console.log('Received Event: ' + id);

        

    }
};

app.initialize();

