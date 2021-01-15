const express=require("express");
const app= express();
const {db}=require("./models/index");
const volleyball=require("volleyball");
const path=require("path")
//const router=require('./routes/index')

//const {User}=require('./models/index')

//passport
const passport = require("passport")
const localStrategy = require("passport-local").Strategy
const sessions = require("express-session")
const cookieParser = require("cookie-parser")

app.use(volleyball);

//Bodyparsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//requerido para que nos tome el index.hml
app.use(express.static(__dirname+"/public"))

//cookie
app.use(cookieParser());
//session
app.use(
    sessions({
      secret: "proyectointegrador",
      resave: true,
      saveUninitialized: true,
    })
);
//passport
app.use(passport.initialize());
app.use(passport.session());

passport.use(
    new localStrategy(
      {
        usernameField: "email",
        passwordField: "password",
      },
      function (email, password, done) {
        User.findOne({ where: { email } })
          .then((user) => {
            if (!user) {
              // email not found
              return done(null, false);
            }  
            user.hashear(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false); // wrong password
              }  
              return done(null, user); // success :D
            });
          })
          .catch(done); // done(err)
      }
    )
  );
  
  passport.serializeUser(function (user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function (id, done) {
    User.findByPk(id)
      .then((user) => {
        done(null, user);
      })
      .catch(done);
  });

//

/* app.use("/",router); */

app.get("/*",(req,res,next)=>{
    res.sendFile(__dirname+"/public/index.html")
})

//error middleware
app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err);
});


db.sync({force:false}).then(app.listen("3000",()=>{
    console.log("runing in port 3000 !!!");
}))
