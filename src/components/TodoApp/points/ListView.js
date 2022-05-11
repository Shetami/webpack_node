import {View, CollectionView} from 'vendors'
import { ItemView } from './Point';
import {_} from 'vendors';

let ListView = CollectionView.extend({

  tagName: 'ul',

  initialize() {
    let filter = this.getOption('PointModel');
    this.listenTo(filter, 'change', () => {
      this.filter();
    })
  },

  childView: ItemView,
  childViewOptions() {
    return {
      collection: this.collection
    }
  },

  viewFilter(childView) {
    debugger;;
    let filter = this.getOption('PointModel');
    let value = filter.get('completed');

    if (value == null){
      return true;
    }

    return childView.model.get('completed') === value;
  }

})


export {ListView};