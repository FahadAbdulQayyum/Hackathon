import { logIn, readBlogs } from "@/services/Services";

export default function handler(req, res) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const data = logIn(body)
      const { firstName, lastName, password } = data;
      if (password !== body.password) {
        throw new Error("Password Incorrect!")
      }
      console.log('dataaa', data)
      return res.json({ success: true, msg: "Successfully Login", detail: { firstName, lastName } })
    }
  } catch (err) {
    return res.json({ msg: err.message, success: false })
  }
  const data = readBlogs()
  return res.json({ data })
}
