import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

const main = async()=> {
    await prisma.customer.deleteMany();
    await prisma.crop.deleteMany();
    await prisma.farmer.deleteMany();
    await prisma.resource.deleteMany();
    await prisma.seedSupplier.deleteMany();

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

    const farmer1=await prisma.farmer.create( { 
        data:{
            name:"Yusuf Doe",
            email:"yusufdoe@gmail.com",
            farmingPractice:"agroforestry",
            farmSizeInHectares:200}
            
});


const resource1=await prisma.resource.create({
     data:{
        name:"BKL tractor",
        manufacturer:"manufact",
        service_duration:12,
        service_start_date:new Date(12/2/2024)}
    });
const resource2=await prisma.resource.create({
    data:{
    name:"Bow rake",
        manufacturer:"AgriExpo",
        service_duration:2,
        service_start_date:new Date(12/10/2024)}
});

const seedSupplier1=await prisma.seedSupplier.create({
    data:{
        name:"Fletcher",
        address:"Genk",
        email:"fletcher123@gmail.com",
        seedType:{
            connect: {id: Sorghum.id}
        }}
});
const seedSupplier2=await prisma.seedSupplier.create({
    data:{
        name:"Fletcheris",
        address:"Luik",
        email:"fletcheris123@gmail.com",
        seedType:{
            connect: {id: Millet.id}
        }}
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