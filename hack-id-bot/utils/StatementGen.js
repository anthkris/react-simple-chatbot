import TinCan from 'tincanjs';
import {lrs} from './LRS';

const statement = new TinCan.Statement(
    {
        actor: {
            mbox: "mailto:info@tincanapi.com"
        },
        verb: {
            id: "http://adlnet.gov/expapi/verbs/experienced"
        },
        target: {
            id: "http://rusticisoftware.github.com/TinCanJS"
        }
    }
);

lrs.saveStatement(
    statement,
    {
        callback: function (err, xhr) {
            if (err !== null) {
                if (xhr !== null) {
                    console.log("Failed to save statement: " + xhr.responseText + " (" + xhr.status + ")");
                    // TODO: do something with error, didn't save statement
                    return;
                }

                console.log("Failed to save statement: " + err);
                // TODO: do something with error, didn't save statement
                return;
            }

            console.log("Statement saved");
            // TOOO: do something with success (possibly ignore)
        }
    }
);