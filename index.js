const express = require("express");
const routes = require("./src/routes/index");
const path = require("path");

const app = express();

//view engine setup
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

    //Static files setup
app.use(express.static(__dirname + '../src/public/assets'));

app.use("/", routes);

//404 error
app.use("*", (req, res) => {
  res.render("404", {
    cname: "Avenue25",
    title: "Avenue25-Error",
  });
});

// error handler
app.use(function (err, req, res) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

const Port = process.env.PORT || 5000;

app.listen(Port, console.log(`server started on port ${Port}`));
