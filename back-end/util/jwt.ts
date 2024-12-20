import jwt from 'jsonwebtoken';
const  generateJwtToken=({name,role}:{name:string;role:string}):string=>{
    const options={expiresIn:`${process.env.JWT_EXPIRES_HOURS}h`, issuer:'crop App'};

    try{
        return jwt.sign({name,role},process.env.JWT_SECRET!,options);
    }catch(error){
        console.log(error);
        throw new Error('Error generating JWT token')

    }
}
export {generateJwtToken};