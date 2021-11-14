import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { createConnection } from 'typeorm';
import { schema } from './schema';

const bootstrap = async () => {
  const conn = await createConnection();
  const app = express()

  app.get('/', (req, res) => {
    res.status(200).send({
        hello: 'world'
    })
  })

  app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema,
    context: {
      em: conn.createEntityManager()
    }
  }));

  const port = 3000
  app.listen(port, () => {
    console.log(`server running at ${port}`)
  })
};

bootstrap();
