import { expect } from 'chai';
import { Item, GildedRose } from '../app/gilded-rose';

describe('Gilded Rose', function () {

    it('should foo', function () {
        const gildedRose = new GildedRose([new Item('foo', 0, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].name).to.equal('foo');
    });


    it('should up quality for the Brie and down sellIn', function() {
        const gildedRose = new GildedRose([ new Item("Aged Brie", 2, 0)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(1);
        expect(items[0].quality).to.equal(1);
    });

    it('should up quality+2  of backstage pass and down sellIn', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(9);
        expect(items[0].quality).to.equal(12);
    });

    it('should up quality+3 of backstage pass and down sellIn', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(4);
        expect(items[0].quality).to.equal(13);
    });

    it('should put quality to 0 of backstage pass and down sellIn', function() {
        const gildedRose = new GildedRose([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 10)]);
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn).to.equal(-1);
        expect(items[0].quality).to.equal(0);
    });



    it('master test', function () {
        //Arange
        const items = [
            new Item("+5 Dexterity Vest", 10, 20), //
            new Item("Aged Brie", 2, 0), //
            new Item("Elixir of the Mongoose", 5, 7), //
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20),
            new Item("Backstage passes to a TAFKAL80ETC concert", 10, 49),
            new Item("Backstage passes to a TAFKAL80ETC concert", 5, 49),
            // this conjured item does not work properly yet
            new Item("Conjured Mana Cake", 3, 6)
        ];

        const gildedRose = new GildedRose(items)

        //act
        const updatedItems = gildedRose.updateQuality()
       
        //updatedItems.should.include..( import the should at the top)
        expect(updatedItems).to.deep.include.members([
            new Item('+5 Dexterity Vest', 9, 19),
            new Item('Aged Brie', 1, 1),
            new Item('Elixir of the Mongoose', 4, 6),
            new Item("Sulfuras, Hand of Ragnaros", 0, 80), //
            new Item("Sulfuras, Hand of Ragnaros", -1, 80),
            new Item("Backstage passes to a TAFKAL80ETC concert", 14, 21),
            new Item("Backstage passes to a TAFKAL80ETC concert", 9, 50),
            new Item("Backstage passes to a TAFKAL80ETC concert", 4, 50),
            new Item("Conjured Mana Cake", 2, 4)

        ])
        // assert

    })

});
