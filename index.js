'use strict';

/**
 * The following JSON template shows what is sent as the payload:
{
    "serialNumber": "GXXXXXXXXXXXXXXXXX",
    "batteryVoltage": "xxmV",
    "clickType": "SINGLE" | "DOUBLE" | "LONG"
}
 *
 * A "LONG" clickType is sent if the first press lasts longer than 1.5 seconds.
 * "SINGLE" and "DOUBLE" clickType payloads are sent for short clicks.
 *
 * For more documentation, follow the link below.
 * http://docs.aws.amazon.com/iot/latest/developerguide/iot-lambda-rule.html
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', event.clickType, event.batteryVoltage, event.serialNumber);
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

    var client = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)

    var url = 'https://s3.us-east-2.amazonaws.com/jcf-iot-button/turrible.twiml'
    var jon = '***REMOVED***'
    var kevin = '***REMOVED***'

    client.calls.create({
        url: url,
        to: kevin,
        method: 'GET',
        from:'***REMOVED***'
    }, function(err, call) {
        console.log(err)
        console.log('This call\'s unique ID is: ' + call.sid);
        console.log('This call was created at: ' + call.dateCreated);
    });
};

