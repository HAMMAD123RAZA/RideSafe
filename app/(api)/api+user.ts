import { neon } from '@neondatabase/serverless';


export async function POST(request:Request){
    try {
    const sql = neon('postgresql://main_owner:Z8uYmOhfNB3E@ep-plain-voice-a58f8v1s.us-east-2.aws.neon.tech/main?sslmode=require');
const {name,email}= await request.json() 
if(!name || !email){
    return new Response('Missing name or email', {status: 400})
}

const response=await sql`INSERT INTO USERS(
name,email
)
Values (
${name},${email}
)`

return Response.json({response, status:200})

    } catch (error) {
        console.log(error)
        return Response.json({error,status:500})
    }
}


// See https://neon.tech/docs/serverless/serverless-driver
// for more information