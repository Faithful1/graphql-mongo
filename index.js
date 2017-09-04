import express from 'express';
import mongoose from 'mongoose';
import graphqlHTTP from 'express-graphql';

import schema from './graphql';

const app = express();

//setup mongoose connection
mongoose.connect('mongodb://Faithful:password@ds161493.mlab.com:61493/ffgraphql-api');
const db = mongoose.connection;
db.on('error', () => console.log('For some reason i have failed to connect to database, please check'))
  .once('open', () => console.log('I am now Connected to DB'))

//route router with some text
app.get('/', (req, res) => {
  res.send('Hello Guys, this is graphql api by Faith.');
});

//graohql api endpoint -aka router for graphql
app.use('/graphql', graphqlHTTP(() => ({
  schema,
  graphiql: true,
  pretty: true
})));

app.listen(4000, ()=> {
  console.log('Graphql API Running at port 4000');
});
