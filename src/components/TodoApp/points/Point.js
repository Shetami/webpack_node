import {View} from 'Vendor'
import {_} from 'Vendor';

export const ItemView = View.extend({

    className: 'item',

    initialize() {
        console.log(this.model.toJSON())
      },

    template: _.template('<li class="todoPoint"><%= title %></li><button>&times;</button>'),

    events: {
        'click button': 'removeItem'
    },

    removeItem(){
        this.collection.remove(this.model)
    }
})