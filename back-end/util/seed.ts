import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async()=> {
    await prisma.customer.deleteMany();
    await prisma.crop.deleteMany();

    const Millet = await prisma.crop.create({
        data: {
            name:'Millet',
            purchasePrice:30,
            marketPrice:50,
            totalYield:300,
            attentionRange:2,
            growthDurationInMonths:9
        }
    })
    const Sorghum = await prisma.crop.create({
        data: {
            name:'Sorghum',
            purchasePrice:20,
            marketPrice:40,
            totalYield:100,
            attentionRange:3,
            growthDurationInMonths:6
        }
    });
    const Oats = await prisma.crop.create({
        data: {
            name:'Oats',
            purchasePrice:10,
            marketPrice:30,
            totalYield:400,
            attentionRange:5,
            growthDurationInMonths:4
        }
    });

    const customerOne = await prisma.customer.create({
        data:{
            name:'Makkonen',
            address:'Galilee',
            email: 'mak123@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id},{id:Millet.id}]
            }
        }
    });
    const customerTwo = await prisma.customer.create({
        data:{
            name:'Future',
            address:'Bethlehem',
            email: 'future254@gmail.com',
            cropPreference:{
                connect:[{id:Sorghum.id}]
            }
        }
    });
    const customerThree = await prisma.customer.create({
        data:{
            name:'BigSean',
            address:'Nazareth',
            email: 'sean542@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id}]
            }
        }
    });
    const customerFour = await prisma.customer.create({
        data:{
            name:'Cammie',
            address:'Jordan',
            email: 'cammie789@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id},{id:Sorghum.id}]
            }
        }
    });
};

(async()=> {
        try {
            await main();
            await prisma.$disconnect();
        }catch (error) {
            console.error(error);
            await prisma.$disconnect();
            process.exit(1);
        }
    })();