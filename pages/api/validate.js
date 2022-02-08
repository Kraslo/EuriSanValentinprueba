// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const validateRequest = (body) => {
  const { email, personType, name, account, message } = body

  return true
}

const connectToDB = async () => {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
}

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Process a POST request

    // Email: email
    // Estudainte, profe, PAS: personType
    // Name: name
    // Instagram o twitter: account
    // Text: message

    if(validateRequest(req.body)) {
      const { email, personType, name, account, message } = req.body

      console.log(email)
      console.log(personType)
      console.log(name)
      console.log(account)
      console.log(message)

      await prisma.present.create({
        data: {
          email: email,
          personType: personType,
          name: name,
          account: account,
          message: message
        }
      })

      const presents = await prisma.present.findMany()

      res.json(presents)
      res.status(200).end()

      // return new Promise(resolve => {
      //   connectToDB()
      //     .then(() => {
      //       res.status(200).end()
      //       resolve();
      //     })
      //     .catch(error => {
      //       console.error('Unable to connect to the database:', error);
      //       res.status(500).end();
      //       resolve(); // in case something goes wrong in the catch block (as vijay commented)
      //     });
      // });
    }

    else {
      // If body not valid: bad request
      res.status(400).end()
    }

  } else {
    // Handle any other HTTP method: not allowed
    res.status(405).end()
  }
}
