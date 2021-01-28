const express=require("express");
const app= express();
const {db,User}=require("./models/index");
const volleyball=require("volleyball")
const router=require('./routes/index')

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


/////////////////////////////////////////////////

//cookie
app.use(cookieParser());
//session
app.use(
    sessions({
      secret: "personalBudgetManagement",
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
              return done(null, false, { message: 'Incorrect email or not registred!!!' });
            }  
            user.hashear(password, user.salt).then((hash) => {
              if (hash !== user.password) {
                return done(null, false, { message: 'Incorrect password !!!' });
              }  
              return done(null, user);
            });
          })
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

///////////////////////////////////////////////


app.use("/",router);

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
