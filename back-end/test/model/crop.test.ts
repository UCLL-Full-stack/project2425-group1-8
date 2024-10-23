import { Crop } from "../../model/crop";


test('given:valid values for crop,when:crop is added,then:crop is added with those values',()=>{
    //given
    const    name="maize";
    const   purchasePrice=10;
    const    marketPrice=40;
    // const    yield=200;
    const   attentionRange=3;
    const   growthDuration=15;

    //when
    const crop= new Crop({
        name,
        purchasePrice,
        marketPrice,
        attentionRange,
        growthDuration       
    });

    //then
    expect(crop.getName()).toEqual(name);
    expect(crop.getPurchasePrice()).toEqual(purchasePrice);
    expect(crop.getAttentionRange()).toEqual(attentionRange);
    expect(crop.getMarketPrice()).toEqual(marketPrice);
    expect(crop.getGrowthDuration()).toEqual(growthDuration);


} )
