import { readBlogs, writeBlog } from "@/services/Services";

export default function handler(req, res) {
  try {
    if(req.method === "POST") {
      const {body} = req;
      writeBlog(body)
      return res.json({success:true, msg: "Blog posted Successfully"})
    } 
  } catch (err) {
    return res.json({msg:err.message, success:false})
    }
    const data = readBlogs()
    return res.json({data})
}