// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const validateRequest = (body) => {
  const { email, personType, name, account, message } = body

  return true
}

export default function handler(req, res) {
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
