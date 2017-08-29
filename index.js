import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

// import schema from './graphql';

const app = express();

//route router with some text
app.get('/', (req, res) => {
  res.send('Hello Guys, this is graphql api by Faith.');
});

//graohql api endpoint -aka router for graphql
// app.use('/graphql', graphqlHTTP(() => ({
//   schema:true,
//   graphiql: true
// })));

app.listen(4000, ()=> {
  console.log('Graphql API Running at port 4000');
});
