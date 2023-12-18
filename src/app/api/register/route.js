const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

export async function POST(request) {
  
     const response = await request.json()

     const reg = await prisma.users.create({
          data: response
     })
  
     return  Response.json({name:reg});
}
