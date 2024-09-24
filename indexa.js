const { default: RSVP } = require("rsvp");

function tossADie() {
    return new RSVP.Promise((fulfill, reject) => {
        let n = Math.floor(Math.random() * 6) + 1;
        if (n === 6) {
            fulfill(n);
        } else {
            reject(n);
        }
    })
}
function logandTossAgain(toss) {
    console.log("Tossed a " + toss + " , need to try again!");
    return tossADie();
}
function logSuccess(toss) {
    console.log("Success Managed to toss " + toss + " ");
}
function logFailure(toss) {
    console.log("Tossed a toss " + toss + " too bad!");
}
tossADie().then(null, logandTossAgain).then(null, logandTossAgain).then(logSuccess, logFailure);
