import TinCan from 'tincanjs';

let lrs;

try {
    export lrs = new TinCan.LRS(
        {
            endpoint: "https://cloud.scorm.com/tc/public/",
            username: "<Test User>",
            password: "<Test Password>",
            allowFail: false
        }
    );
}
catch (ex) {
    console.log("Failed to setup LRS object: ", ex);
    // TODO: do something with error, can't communicate with LRS
}