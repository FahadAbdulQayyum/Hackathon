import fs from 'fs';
import path from 'path';

const pathJson = path.join(process.cwd(), "src" , "data", "db.json")

export const readUser = () => {
    const fsRead = fs.readFileSync(pathJson)
    return JSON.parse(fsRead);
}

// export const writeComment = (body) => {
export const signUp = (body) => {
    const data = readUser();
    console.log('dataaaa',data);
    const matched = data.find(u=>u.email === body.email);
    console.log('matched',matched);
    if(matched) {
        throw new Error("This user already exists")
    }
    return fs.writeFileSync(pathJson, JSON.stringify([...data,body]))
}

export const logIn = (body) => {
    console.log('lognIN')
    const data = readUser();
    const matched = data.find(u=>u.email === body.email);
    console.log('matched',matched);
    if(matched) {
        // throw new Error("Successfully login")
        return "Successfully Login"
    }
}