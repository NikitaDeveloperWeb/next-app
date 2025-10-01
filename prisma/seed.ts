
import { hashSync } from "bcrypt"
import { prisma } from "./prisma-client"
async function up() {
    
    await prisma.user.createMany({
        data:[
            {
            fullname: 'User',
            email: 'user@test.ru',
            password: hashSync('1111111',10),
            role: 'USER' ,
            phone: '89020222121',
            varified: new Date(),
                


            },
            {
            fullname:"Admin",
            email:"admin@gmail.com",
            role: "ADMIN",
            phone:"89008782345",
            varified: new Date(),
            password: hashSync('1111111',10),
            }

        ]
    })
    
}
async function down() {

    await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`
    
}
async function main() {
    try {
        await up()
        await down()
    } catch (error) {
        console.log(error)
    }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
