import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyCgB6NkZ4JQXwLOiqOA95x5v7CZ-UFQ8Qg",
    authDomain: "todolist-fbf4c.firebaseapp.com",
    databaseURL: "https://todolist-fbf4c.firebaseio.com",
    projectId: "todolist-fbf4c",
    storageBucket: "todolist-fbf4c.appspot.com",
    messagingSenderId: "384605263394"
};

firebase.initializeApp(config);

// const databaseRef = firebase.database().ref();
// export const todosRef = databaseRef.child("todos");

const auth = firebase.auth();

export {
    auth,   
};