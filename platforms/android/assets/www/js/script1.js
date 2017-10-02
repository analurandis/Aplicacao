var Controller = function () {
    var controller = {
        self: null,
        initialize: function () {
            self = this;
            this.bindEvents();
            self.renderLogin();
        }


    }
    renderLogin: function() {
        var $cotent = $('ui-content');
        $cotent.empty();
        $('.ui-content').load("./view/login.html");
    }
}
controller.initialize();
return controller;

