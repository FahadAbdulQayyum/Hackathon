
import { signUp } from "@/services/Services";

export default function handler(req, res) {
  try {
    if(req.method === "POST") {
      const {body} = req;
      signUp(body)
      return res.json({success:true, msg: "Successfully Registered"})
    } 
  } catch (err) {
    return res.json({msg:err.message, success:false})
    }
  res.status(200).json({ name: 'John Doe' })
}
