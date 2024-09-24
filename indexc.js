const promisify = require('promisory');
let prom = promisify.resolve(("Failed Test"));
prom.then(function (a) {
    console.log(a);
}, function (e) {
    console.log("******");
    console.log(e);//axios
});

