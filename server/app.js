const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Allow cross-origin requests
app.use(cors());

mongoose.connect(
  'mongodb://naveen:naveen123@ds111623.mlab.com:11623/graphql-fullstack-youtube',
  { useNewUrlParser: true }
);
mongoose.connection.once('open', () => console.log('Connected to Database'));

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(5000, () => console.log('Server is listening on port 5000'));
