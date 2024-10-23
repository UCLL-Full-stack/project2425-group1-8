import { Farmer } from "../../model/farmer";


test('given:valid values for farmer,when: getting the farmer,then:farmer is seen with those values',()=>{
    //given
    const    name="Yusuf Doe";
    const   age=40;
    const    email="yusufdoe@gmail.com";
    const   farmingPractice="agroforestry";
    const   farmSize=200;
    //when
    const farmer= new Farmer({
        name,
        age,
        email,
        farmingPractice,
        farmSize       
    });

    //then
    expect(farmer.getName()).toEqual(name);
    expect(farmer.getAge()).toEqual(age);
    expect(farmer.getEmail()).toEqual(email);
    expect(farmer.getFarmingPractice()).toEqual(farmingPractice);
    expect(farmer.getfarmSize()).toEqual(farmSize);


} )
