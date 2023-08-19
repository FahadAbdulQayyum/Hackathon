import { logIn, readBlogs, signUp } from "@/services/Services";

export default function handler(req, res) {
  try {
    if(req.method === "POST") {
      const {body} = req;
      const data = logIn(body)
    //   const {firstName, lastName} = data[0];
      const {firstName, lastName} = data;
    //   const filteredD = data.filter(d=>d.firstName === body.firstName)
      console.log('dataaa',data)
    //   console.log('filteredD',filteredD)
      return res.json({success:true, msg: "Successfully Login", detail:{firstName, lastName}})
    } 
  } catch (err) {
    return res.json({msg:err.message, success:false})
    }
    const data = readBlogs()
    // console.log('dataBlog',data)
    return res.json({data})
}
