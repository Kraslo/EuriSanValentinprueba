// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const validateRequest = (body) => {
  const { email, personType, name, account, message, group, degree } = body

  const emailValidation = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  console.log(emailValidation)

  const lengthValidation = Object.values(body).every(elem => {elem === undefined || elem.length < 1000})
  console.log(lengthValidation)

  const typeValidation = ["student", "teacher", "pas"].includes(personType)
  console.log(typeValidation)

  const studentValidation = !(personType === "student" && degree === undefined)
  console.log(studentValidation)

  const nameValidation = !(name === undefined && account === undefined)
  console.log(nameValidation)

  return emailValidation && lengthValidation && typeValidation && studentValidation && nameValidation
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
      const { email, personType, name, account, message, group, degree } = req.body

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
          message: message,
          group: group,
          degree: degree
        }
      })

      res.status(200).end()
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
