var page = require('webpage').create();  
var url = 'https://nodejs.org';

page.onConsoleMessage = function (msg) {  
    console.log('Page title is ' + msg);
};

page.open(url, function (status) {  
    page.evaluate(function () {
        console.log(document.title);
        // process.exit();
    });
});


