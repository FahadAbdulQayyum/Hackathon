import { deleteBlog, logIn, readBlogs, signUp } from "@/services/Services";

export default function handler(req, res) {
  try {
    if(req.method === "POST") {
      const {body} = req;
      deleteBlog(body)
      return res.json({success:true, msg: "Blog Deleted Successfully!"})
    } 
  } catch (err) {
    return res.json({msg:err.message, success:false})
    }
    const data = readBlogs()
    // console.log('dataBlog',data)
    return res.json({data})
}