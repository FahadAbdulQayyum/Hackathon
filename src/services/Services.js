import fs from 'fs';
import path from 'path';

const pathJson = path.join(process.cwd(), "src" , "data", "db.json")
const pathJsonBlog = path.join(process.cwd(), "src" , "data", "blogDb.json")

export const readUser = () => {
    const fsRead = fs.readFileSync(pathJson)
    return JSON.parse(fsRead);
}

export const readBlogs = () => {
    const fsRead = fs.readFileSync(pathJsonBlog)
    return JSON.parse(fsRead);
}

export const signUp = (body) => {
    const data = readUser();
    const matched = data.find(u=>u.email === body.email);
    if(matched) {
        throw new Error("This user already exists")
    }
    return fs.writeFileSync(pathJson, JSON.stringify([...data,body]))
}

export const logIn = (body) => {
    const data = readUser();
    const matched = data.find(u=>u.email === body.email);
    console.log('matched',matched);
    if(matched) {
        return matched
    }
    throw new Error("Invalid Credentials")
}

export const writeBlog = (body) => {
    const data = readBlogs();
    const date = (new Date()).toLocaleDateString('en-GB')
    body = {...body, date}
    return fs.writeFileSync(pathJsonBlog, JSON.stringify([...data,body]))
}

export const deleteBlog = (body) => {
    let data = readBlogs();
    data = data.filter(d=>d.blog !== body)
    return fs.writeFileSync(pathJsonBlog, JSON.stringify([...data]))
}

export const updateBlog = (body) => {
    let data = readBlogs();
    let targetData = data.filter(d=>d.blog === body)
    data = data.filter(d=>d.blog !== body)
    return fs.writeFileSync(pathJsonBlog, JSON.stringify([...data]))
}