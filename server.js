import express from "express";
import bcrypt from "bcrypt";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, collection, setDoc, getDoc, updateDoc } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABXLhoROln5sWPF8Mug6-PXPo94c_jM5w",
  authDomain: "project-a-ae7b2.firebaseapp.com",
  projectId: "project-a-ae7b2",
  storageBucket: "project-a-ae7b2.appspot.com",
  messagingSenderId: "996304466861",
  appId: "1:996304466861:web:6245eefbf8a89cd81d2724"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig); 
const db =getFirestore();

// init server
const app = express();

// middlewares
app.use(express.static("public"));
app.use(express.json()) // enables from sharing

// aws
import aws from "aws-sdk";
import "dotenv/config";

// aws setup


// routes
// home route
app.get('/', (req, res) => {
    res.sendFile("index.html", {root : "public"})
})

// signup
app.get('/signup', (req, res) => {
    res.sendFile("signup.html", {root : "public"})
} )

app.post('/signup', (req, res) => {
    const {name, email, password, number, tac} = req.body;

    // form validation

    if(name.length < 3){
        res.json({ 'alert' : 'name must be 3 letter long'});
    }
     else if(!email.length){
        res.json({ 'alert' : 'enter your email'});
    }
    else if(password.length < 8){
        res.json({ 'alert' : 'password must be 8 letter long'});
    }
    else if(!Number(number) || number.length < 10){
        res.json({ 'alert' : 'invaild number, please enter valid one'});
    }
    else if(!tac){
        res.json({ 'alert' : 'you must agree to our terms and condition'});
    }
    else{
        // store the data in database
        const users = collection(db, "users");

        getDoc(doc(users, email)).then(user => {
            if(user.exists()){
                return res.json({'alert' : 'email already exists'})
            }
            else{
                //encrypt the password
                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(password, salt, (err, hash) => {
                        req.body.password = hash;
                        req.body.seller = false;

                        // set the doc
                        setDoc(doc(users, email), req.body).then(data => {
                            res.json({
                                name: req.body.name, 
                                email: req.body.email,
                                seller: req.body.seller, 
                            })
                        })
                    })
                })
            }
        })
    }
})

app.get('/login', (req, res) => {
    res.sendFile("login.html", { root : "public"})

})

app.post('/login', (req, res) => {
    let { email, password} = req.body;

    if(!email.length || !password.length){
        res.json({ 'alert' : 'fill all the inputs'})
      }

      const users = collection(db, "users");

      getDoc(doc(users, email))
      .then(user => {
        if(!user.exists()){
            return res.json({'alert' : 'email does not exists' });
        }
        else{
            bcrypt.compare(password, user.data().password, (err, result) => {
                if(result){
                    let data = user.data();
                    return res.json({
                        name: data.name,
                        email: data.email,
                        seller: data.seller
                    })
                }
                else{
                    return res.json({ 'alert' : 'password is incorrect'});
                }
            })
        }
      })
})

//seller route
app.get('/seller', (req, res) => {
    res.sendFile('seller.html', {root : "public"})
})

app.post('/seller', (req, res) => {
    let {name, address, about, number, email} = req.body;

    if(!name.length || !address.length || !about.length || number.length<10 || !Number(number)) {
        return res.json({ 'alert' : 'some information(s) is/are incorrect' });
    }
    else{
        // update the seller status

        const sellers = collection(db, "sellers");
        setDoc(doc(sellers, email), req.body)
        .then(data => {
            const users = collection(db, "users");
            updateDoc(doc(users, email), {
                seller: true
            })
            .then(data => {
                res.json({ 'seller' : true})
            })
        })
    }
})

// dashboard

app.get('/dashboard', (req, res) => {
    res.sendFile('dashboard.html', {root: "public"});
})

// add product

app.get('/add-product', (req, res) => {
    res.sendFile('add-product.html', {root: "public"});
})


app.get('/search/:key', (req, res) => {
    res.sendFile('search.html', {root: "public"});
})

//404 route
app.get('/404', (req, res) => {
    res.sendFile("404.html", { root : "public"})
})

app.use((req, res) => {
    res.redirect('/404')
})

app.listen (3000, () => {
    console.log('listening on port 3000');
})