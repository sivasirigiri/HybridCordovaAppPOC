var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },
    bindEvents: function () {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function () {
        app.receivedEvent('deviceready');

         //Here, we redirect to the web site.
        var targetUrl = "http://cordovahostedwebapp.azurewebsites.net/";
        var bkpLink = document.getElementById("bkpLink");
        bkpLink.setAttribute("href", targetUrl);
        bkpLink.text = targetUrl;
        window.location.replace(targetUrl);
        //alert("adfasdfasdf");
        //debugger;
        //cordova.exec(function (d) { alert(d) }, function (d) { alert(d) }, "Hello", "sayhello", ['from sayhello function in HostedApp']);
        
    },
    // Note: This code is taken from the Cordova CLI template.
    receivedEvent: function (id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();

//// For an introduction to the Blank template, see the following documentation:
//// http://go.microsoft.com/fwlink/?LinkID=397704
//// To debug code on page load in Ripple or on Android devices/emulators: launch your app, set breakpoints, 
//// and then run "window.location.reload()" in the JavaScript Console.
//(function () {
//    "use strict";

//    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

//    function onDeviceReady() {
//        // Handle the Cordova pause and resume events
//        document.addEventListener( 'pause', onPause.bind( this ), false );
//        document.addEventListener( 'resume', onResume.bind( this ), false );
        
//        // TODO: Cordova has been loaded. Perform any initialization that requires Cordova here.
//        var parentElement = document.getElementById('deviceready');
//        var listeningElement = parentElement.querySelector('.listening');
//        var receivedElement = parentElement.querySelector('.received');
//        listeningElement.setAttribute('style', 'display:none;');
//        receivedElement.setAttribute('style', 'display:block;');
//    };

//    function onPause() {
//        // TODO: This application has been suspended. Save application state here.
//    };

//    function onResume() {
//        // TODO: This application has been reactivated. Restore application state here.
//    };
//} )();