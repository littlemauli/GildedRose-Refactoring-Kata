export class Item {
    name: string;
    sellIn: number;
    quality: number;

    constructor(name, sellIn, quality) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    handelBackStage(item:Item) {
        let days = item.sellIn;
        let quality = item.quality;
        // for all these case days should decrease by 1
        days--;

        // on negative days the quality is 0
        if (days < 0) {
            quality = 0;
        }
        //supposed to update quality by 3 each day for days 5 4 3 2 1 0
        else if (days < 6) {
            quality += 3;
        }
        //supposed to update quality by 2 for each day for days 10,9,8,7,6 
        else if (days < 11) {
            quality += 2;
        }
        // if more than 10 days left quality goes up by 1
        else {
            quality++;
        }
        
        // for all these case quality should be no more than 50
        if (quality > 50) {
            quality = 50;
        }
        item.sellIn = days;
        item.quality= quality;
    }

    handelSulfuras(item:Item) {
        //nothing changes
        item.quality = 80;
    }

    handelAgedBrie(item:Item){
        //days go down by one
        // quality goes up by 1
        // quality doesn't go over 50
        item.sellIn --;
        item.quality ++;
        if (item.quality > 50) {
            item.quality= 50;
        }
    }

    handelAllElse(item:Item){
          // days diminish by one
          item.sellIn --;
          // quality goes down 1 per day
          item.quality --;
          // quality degrades twice as fast after sell by date
          if( item.sellIn <0){
              item .quality -=2;
          }
        // quality never negative
         if(item.quality<0){
              item.quality=0;
            }
        // quality always<51
        if(item.quality>50){
            item.quality=50;
        }   
    }

    handelConjured(item:Item){
          // days diminish by one
          item.sellIn --;
          // quality goes down 2 per day
          item.quality -=2;
          // quality degrades twice as fast after sell by date compared to normal item
          if( item.sellIn <0){
            item .quality -=4;
          }
          // quality never negative
         if(item.quality<0){
            item.quality=0;
          }
      // quality always<51
      if(item.quality>50){
          item.quality=50;
      }   
    }

    updateQuality() {
        for (let i = 0; i < this.items.length; i++) {
      
            if(this.items[i].name === 'Sulfuras, Hand of Ragnaros'){
                this.handelSulfuras(this.items[i]);
            }


            else if(this.items[i].name === 'Aged Brie'){
                this.handelAgedBrie(this.items[i]);
            }
           
           else if (this.items[i].name === 'Backstage passes to a TAFKAL80ETC concert') {
                        this.handelBackStage(this.items[i]);
                    }
            
            else if(this.items[i].name ==='Conjured Mana Cake'){
                this.handelConjured(this.items[i]);
            }

            else { this.handelAllElse(this.items[i])}
                   
         }

        return this.items;
    }
}


//for (let i = 0; i < this.items.length; i++) {
      // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            //     if (this.items[i].quality > 0) {
            //         if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //             this.items[i].quality = this.items[i].quality - 1
            //         }
            //     }
             // } else {
                // if (this.items[i].quality < 50) {
                //     this.items[i].quality = this.items[i].quality + 1

 // if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
                    //     if (this.items[i].sellIn < 11) {
                    //         if (this.items[i].quality < 50) {
                    //             this.items[i].quality = this.items[i].quality + 1
                    //         }
                    //     }
                    //     if (this.items[i].sellIn < 6) {
                    //         if (this.items[i].quality < 50) {
                    //             this.items[i].quality = this.items[i].quality + 1
                    //         }
                    //     }
                    // }
                //}
            //}
            // if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            //     this.items[i].sellIn = this.items[i].sellIn - 1;
        //     }
        //     if (this.items[i].sellIn < 0) {
        //         if (this.items[i].name != 'Aged Brie') {
        //             if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        //                 if (this.items[i].quality > 0) {
        //                     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        //                         this.items[i].quality = this.items[i].quality - 1
        //                     }
        //                 }
        //             } else {
        //                 this.items[i].quality = this.items[i].quality - this.items[i].quality
        //             }
        //         } else {
        //             if (this.items[i].quality < 50) {
        //                 this.items[i].quality = this.items[i].quality + 1
        //             }
        //         }
        //     }