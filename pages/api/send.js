import { supabase } from "../../utils";

const validateRequest = (body) => {
  const { email, personType, name, account, message, group, degree, findHint } = body

  const emailValidation = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)
  console.log("Email validation:")
  console.log(emailValidation)

  const lengthValidation = Object.values(body).every(elem => {
    return elem === undefined || elem.length < 1000
  })
  console.log("Length validation:")
  console.log(lengthValidation)

  const typeValidation = ["student", "teacher", "pas"].includes(personType)
  console.log("Incorrect person type validation:")
  console.log(typeValidation)

  const studentValidation = !(personType === "student" && degree === undefined)
  console.log("Student but not degree validation:")
  console.log(studentValidation)

  const teacherValidation = !(personType !== "student" && findHint === undefined)
  console.log("Teacher but not findHint validation:")
  console.log(teacherValidation)

  const nameValidation = !(name === undefined && account === undefined)
  console.log("Neither name nor account validation:")
  console.log(nameValidation)

  return emailValidation && lengthValidation && typeValidation && studentValidation && teacherValidation && nameValidation
}

export default async function handler(req, res) {
  if (req.method === 'POST') {

    if(validateRequest(req.body)) {
      console.log(req.body);
      const { email, personType, name, account, message, group, degree, findHint } = req.body

      const { data, error } = await supabase
        .from('piruletas')
        .insert([
          { email, person_type: personType, name, account, message, group, degree, find_hint: findHint }
      ], { returning: "minimal" });  // So it doesn't perform a select after it finishes

      console.log(data);

      console.log(error);

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
