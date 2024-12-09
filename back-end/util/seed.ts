import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';



const prisma = new PrismaClient();

const main = async()=> {
    await prisma.customer.deleteMany();
    await prisma.crop.deleteMany();
    await prisma.farmer.deleteMany();
    await prisma.resource.deleteMany();
    await prisma.seedSupplier.deleteMany();
    await prisma.role.deleteMany();

    const farmerRole = await prisma.role.create({
        data: {
            name: 'farmer',
        },
    });

    const customerRole = await prisma.role.create({
        data: {
            name: 'customer',
        },
    });

    const seedSupplierRole = await prisma.role.create({
        data: {
            name: 'seedSupplier',
        },
    });
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
            password: await bcrypt.hash('makkonen123', 12),
            email: 'mak123@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id},{id:Millet.id}]
            },
            role: {
                connect: { id: customerRole.id },
            }
        }
    });
    const customerTwo = await prisma.customer.create({
        data:{
            name:'Future',
            password: await bcrypt.hash('future123', 12),
            address:'Bethlehem',
            email: 'future254@gmail.com',
            cropPreference:{
                connect:[{id:Sorghum.id}]
            },
            role: {
                connect: { id: customerRole.id },
            }
        }
    });
    const customerThree = await prisma.customer.create({
        data:{
            name:'BigSean',
            password: await bcrypt.hash('bigsean123', 12),
            address:'Nazareth',
            email: 'sean542@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id}]
            },
            role: {
                connect: { id: customerRole.id },
            }
        }
    });
    const customerFour = await prisma.customer.create({
        data:{
            name:'Cammie',
            password: await bcrypt.hash('cammie123', 12),
            address:'Jordan',
            email: 'cammie789@gmail.com',
            cropPreference:{
                connect:[{id:Oats.id},{id:Sorghum.id}]
            },
            role: {
                connect: { id: customerRole.id },
            }
        }
    });

    const farmer1=await prisma.farmer.create( { 
        data:{
            name:"Yusuf Doe",
            password: await bcrypt.hash('yusuf123', 12),
            email:"yusufdoe@gmail.com",
            farmingPractice:"agroforestry",
            farmSizeInHectares:200,
            role: {
                connect: { id: farmerRole.id },
            }
        }
            
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
        password: await bcrypt.hash('fletcher123', 12),
        address:"Genk",
        email:"fletcher123@gmail.com",
        seedType:{
            connect: {id: Sorghum.id}
        },
        role: {
            connect: { id: seedSupplierRole.id },
        }
    }
});
const seedSupplier2=await prisma.seedSupplier.create({
    data:{
        name:"Fletcheris",
        password: await bcrypt.hash('fleris123', 12),
        address:"Luik",
        email:"fletcheris123@gmail.com",
        seedType:{
            connect: {id: Millet.id}
        },
        role: {
            connect: { id: seedSupplierRole.id },
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