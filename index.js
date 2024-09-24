const { default: RSVP, reject } = require("rsvp");
function dieToss() {
    const tt = Math.floor(Math.random() * 6) + 1;
    return tt;
}
let prom = new RSVP.Promise((fulfill, reject) => {
    let nn = dieToss();
    if (nn == 6) {
        fulfill(nn);
    } else {
        reject(nn);
    }
});
prom.then(function (toss) {
    console.log("I Got a " + toss + "-");
}, function (toss) {
    console.log("Oh No its " + toss + "-");
});


