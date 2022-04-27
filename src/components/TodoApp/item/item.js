import {View} from 'Vendor'
import {_} from 'Vendor';

export const ItemView = View.extend({

    initialize() {
        console.log(this.model.toJSON())
      },

    template: _.template('<p><%= title %></p> | <button>&times;</button></li>'),

    events: {
        'click button': 'removeItem'
    },

    removeItem(){
        this.collection.remove(this.model)
    }
})