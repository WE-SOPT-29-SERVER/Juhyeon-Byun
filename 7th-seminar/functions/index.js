const admin = require('firebase-admin');
const serviceAccount = require('./wesopt29-29377-firebase-adminsdk-tfx1b-3ef9fb96b1');
const dotenv = require('dotenv');

dotenv.config();

let firebase;
if (admin.apps.length === 0) {
  firebase = admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
} else {
  firebase = admin.app();
}

module.exports = {
  api: require('./api'),
};
