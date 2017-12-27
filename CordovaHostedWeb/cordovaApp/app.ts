/// <reference path="typings/cordova/cordova.d.ts" />
/// <reference path="typings/cordova/plugins/Camera.d.ts" />
module CordovaHostedApp {
    "use strict";

    export module Application {
        export function initialize() {
            alert('cordova initialize');

            this.document.addEventListener('deviceready', this.onDeviceReady, false);
        }

        function onDeviceReady() {
            // Handle the Cordova pause and resume events
            alert('On Device Ready()');
            document.addEventListener('pause', onPause, false);
            document.addEventListener('resume', onResume, false);
            document.getElementsByClassName('btn-lg')[0].addEventListener('mousedown', takePicture);
            document.getElementsByClassName('btn-lg')[0].addEventListener('click', takePicture);
            document.getElementsByName('btnTest')[0].addEventListener('mousedown', sayHello);
            document.getElementsByName('btnTest')[0].addEventListener('click', sayHello);
        }
        function sayHello() {
            alert('asdfasdf');
            //cordova.exec(function (d) { alert(d) }, function (d) { alert(d) }, "Hello", "sayhello", ['from sayhello function in HostedApp']);
        }
        function takePicture() {
            alert("takepicture method");
            if (!navigator.camera) {
                alert("Camera API not supported");
                return;
            }

            var options = {
                quality: 20,
                destinationType: Camera.DestinationType.DATA_URL,
                sourceType: 1,
                encodingType: 0
            };

            navigator.camera.getPicture(
                function (imgData) {
                    var el: HTMLElement;
                    el = <HTMLElement>document.getElementsByClassName('media-object')[0];
                    var srcAttr = document.createAttribute("src");
                    srcAttr.value = "data:image/jpeg;base64," + imgData;
                    el.attributes.setNamedItem(srcAttr);
                },
                function () {
                    alert('Error taking picture');
                },
                options);

            return false;
        }

        function onPause() {
            
        }

        function onResume() {
            
        }

    }

    window.onload = function () {
        alert('application initialize');
        Application.initialize();
    }
}