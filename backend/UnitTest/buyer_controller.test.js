let buyer = require('../controllers/buyer_controller');

describe('buyer Properties', ()=>{
    test('buyer property is an empty Array', ()=>{
        expect(Array.isArray(buyer.buyer)).toBeTruthy();   
    });

    test('total buyers equals 0', ()=>{
        expect(buyer.buyerCount).toEqual(0);      
    });   
});

describe('getbuyer is working', ()=>{
    test('getbuyer is working', ()=>{
    buyer.getBuyer;

    expect(buyer.buyerCount).toEqual(buyer.buyer.length)
});
});