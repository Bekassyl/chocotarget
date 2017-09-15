const functions = require('firebase-functions');

exports.lowercase = functions.database.ref('entries/{entryId}')
  .onWrite(event => {
    const entryKey = event.data.key;
    const entryValue = event.data.val();

    const lowerCaseMessage = entryValue.message.toLowerCase();
    return event.data.ref.child('lowerCase').set(lowerCaseMessage);
  })
