import * as firebase from 'firebase';


const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };

console.log(firebaseConfig)

firebase.initializeApp(firebaseConfig);


const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses')
//   .on('value', (snapshot) => {
//     const expenses = []
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log(expenses)
//   })

// database.ref('expenses').push({
//     description: 'First expense',
//     note: 'a note',
//     amount: 100,
//     createdAt: 0
// })



// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React Native, Angular, Python'
// });

// const firebaseNotes = {
//     notes: {
//         apoijasdf: {
//             title: 'First note!',
//             body: 'This is my note'
//         },
//         abcdefg: {
//             title: 'Another note',
//             body: 'This is my note'
//         }
//     }
// }

// const notes = [{
//     id: '12',
//     title: 'First note',
//     body: 'This is my note'   
// }, {
//     id: '61ase',
//     title: 'Another note',
//     body: 'This is my note'   
// }]

// database.ref('notes').set(notes);

// database.ref('notes/12')

// database.ref().on('value', (snapshot) => {
//     const name = snapshot.val().name
//     const job = snapshot.val().job.title
//     const company = snapshot.val().job.company
//     console.log(`${name} is a/an ${job} at ${company}.`)
// })

// setTimeout( () => {database.ref().update({
//     'job/title': 'astronaut',
//     'job/company': 'NASA'

// })}, 2500)

// setTimeout( () => {database.ref().update({
//     'job/title': 'pizza man',
//     'job/company': 'Pizza Spress'

// })}, 2500)

// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val())
// })


// setTimeout(() => {
//     database.ref('age').set(30);
// }, 3500)

// setTimeout(() => {
//     database.ref().off();
// }, 7000)

// setTimeout(() => {
//     database.ref('age').set(35);
// }, 10500)

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error fetching data', e);
//     })

// database.ref().set({
//     name: 'Matt Puchyr',
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Google'
//     },
//     location: {
//         city: 'Chicago',
//         country: 'United States'
//     }
// }).then(() => {
//     console.log('Data is saved')
// }).catch( (e) => {
//     console.log('This failed', e)
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle',
// })

// database.ref('/isSingle')
//     .remove()
//     .then(() => {
//         console.log('Data removed')
//     }).catch((e) => {
//         console.log('There was an error: ', e)
//     }) 


