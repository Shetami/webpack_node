import {View, CollectionView} from 'Vendor'
import { ItemView } from './Point';
import {_} from 'Vendor';

let ListView = CollectionView.extend({

  tagName: 'ul',


  childView: ItemView,
  childViewOptions() {
    return {
      collection: this.collection
    }
  }

    
})


export {ListView};