const express = require('express')
const nunjucks = require("nunjucks");
const app = express();
const tasks = ['Estudar','programar'];

//configuração do nunjucks
nunjucks.configure("views", {
  autoscape: true, //manipuar o nome do arquivos
  express: app, //servidor express
  watch: true //toda vez que alterar o nunjucks, o nunjunks restarta 
  });

  app.use(express.urlencoded({extended : false}));
  app.set('view engine', 'njk'); //o set serve para setar configurações global

//middleware
// const logMiddleware = (req, res, next) => {
//   console.log(
//     `HOST: ${req.headers.host} | URL: ${req.url} | METHOD: ${req.method}`
//   ); 
//   return next();
// }

// app.use(logMiddleware);

// app.get('/', logMiddleware, (req, res) => {
//   return res.send('Home');
// });
// //Passagem via get com ? e & /nome/?name=david
// app.get('/nome/', (req, res) => {
//   return res.send(`Bem-vindo ${req.query.name}`);
// });

// //passagem direta /nome/david
// app.get('/nome/:name', (req, res) => {
//   return res.send(`Bem-vindo ${req.params.name}`);
// });
//passagem direta /nome/david
app.get('/', (req, res) => {
  return res.render('list', 
  {
    tasks
  });
});

app.get('/new',(req,res)=> {
  return res.render('new');
});

app.post('/create', (req, res)=>{
  tasks.push(req.body.task);
  return res.redirect("/");
})

app.listen(3001);