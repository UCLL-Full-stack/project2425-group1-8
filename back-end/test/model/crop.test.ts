import { Crop } from "../../model/crop";


test('given:valid values for crop,when:crop is added,then:crop is added with those values',()=>{
    //given
    const    name="maize";
    const   purchasePrice=10;
    const    marketPrice=40;
    const    totalYield=200;
    const   attentionRange=3;
    const   growthDuration=15;

    //when
    const crop= new Crop({
        name,
        purchasePrice,
        marketPrice,
        totalYield,
        attentionRange,
        growthDuration       
    });

    //then
    expect(crop.getName()).toEqual(name);
    expect(crop.getPurchasePrice()).toEqual(purchasePrice);
    expect(crop.getAttentionRange()).toEqual(attentionRange);
    expect(crop.getMarketPrice()).toEqual(marketPrice);
    expect(crop.getTotalYield()).toEqual(totalYield);
    expect(crop.getGrowthDuration()).toEqual(growthDuration);


} )
test('given a null name ,when creating a crop,then an error is thrown',()=>{
    //given
    const    name='';
    const   purchasePrice=10;
    const    marketPrice=40;
    const    totalYield=200;
    const   attentionRange=3;
    const   growthDuration=15;

    //when
    const crop=()=> new Crop({name,purchasePrice,marketPrice,totalYield,attentionRange,growthDuration});

    //then

    expect(crop).toThrow('name must be provided');
})

test('given an invalid attention range ,when creating a crop,then an error is thrown',()=>{
    //given
    const    name="maize";
    const   purchasePrice=10;
    const    marketPrice=40;
    const    totalYield=200;
    const   attentionRange=13;
    const   growthDuration=15;

    //when
    const crop=()=> new Crop({name,purchasePrice,marketPrice,totalYield,attentionRange,growthDuration});

    //then

    expect(crop).toThrow('crop attention must be in range 1-5');
})
