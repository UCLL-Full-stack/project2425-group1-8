import { Farmer } from "../../model/farmer";


test('given:valid values for farmer,when: getting the farmer,then:farmer is seen with those values',()=>{
    //given
    const    name="Yusuf Doe";
    const   password="yusuf123";
    const    email="yusufdoe@gmail.com";
    const   farmingPractice="agroforestry";
    const   farmSizeInHectares=200;
    //when
    const role='farmer'
    const farmer= new Farmer({
        name,
password,        email,
        farmingPractice,
        farmSizeInHectares    ,
        role   
    });

    //then
    expect(farmer.getName()).toEqual(name);
    // expect(farmer.getAge()).toEqual(age); we removed age;
    expect(farmer.getEmail()).toEqual(email);
    expect(farmer.getFarmingPractice()).toEqual(farmingPractice);
    expect(farmer.getfarmSizeInHectares()).toEqual(farmSizeInHectares);


} )

test('given a null name ,when creating a farmer,then an error is thrown',()=>{
     //given
     const    name="";
     const   password="yusuf123";
     const    email="yusufdoe@gmail.com";
     const   farmingPractice="agroforestry";
     const   farmSizeInHectares=200;
     //when
     const role='farmer'

     const farmer=()=> new Farmer({
         name,
password,
         email,
         farmingPractice,
         farmSizeInHectares,
         role       
     });
    //then

    expect(farmer).toThrow('name must be provided');
})

test('given an invalid email ,when creating a farmer,then an error is thrown',()=>{
    //given
    const    name="Yusuf Doe";
    const   password="yusuf123";
    const    email="yusufdoegmail.com";
    const   farmingPractice="agroforestry";
    const   farmSizeInHectares=200;
    //when
    const role='farmer'

    const farmer=()=> new Farmer({
        name,
        password,
        email,
        farmingPractice,
        farmSizeInHectares ,
        role      
    });
   //then

   expect(farmer).toThrow('invalid email provided!');
})

test('given a negative farm size ,when creating a farmer,then an error is thrown',()=>{
    //given
    const    name="Yusuf Doe";
    const   password="yusuf123";
    const    email="yusufdoe@gmail.com";
    const   farmingPractice="agroforestry";
    const   farmSizeInHectares=-200;
    //when
    const role='farmer'

    const farmer=()=> new Farmer({
        name,
password,
        email,
        farmingPractice,
        farmSizeInHectares ,
        role      
    });
   //then

   expect(farmer).toThrow('farm size can not be negative!!');
})