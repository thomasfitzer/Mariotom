const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("The hottest band in the world, KISS!");
});

const createNotification = ((notification) => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log("notification added", doc));
});

exports.projectCreated = functions.firestore

// this is the trigger for the functions, not a request and such
// REMEMBER TO DEPLOY FUNCTIONS
.document('projects/{projectId}')
.onCreate(doc => {

    const project = doc.data();
    const notification = {
        content: 'Added a new project',
        user: `${project.authorFirstName} ${project.authorLastName}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }
    return createNotification(notification);
});
//notifies when a new user signs up
exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid).get().then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
        return createNotification(notification);
    })
})
