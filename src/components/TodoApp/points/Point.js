import {View} from 'Vendor'
import {_} from 'Vendor';

export const ItemView = View.extend({

    className: 'item',

    initialize() {
        console.log(this.model.toJSON())
    },

    template: _.template('<li class="todoPoint"><%= title %></li><button id="del">&times;</button><button id="com">complete</button>'),

    events: {
        'click #del': 'removeItem',
        'click #com': 'completePoint',
    },

    completePoint() {
        this.model.set({compleated: true})
    },

    removeItem() {
        this.collection.remove(this.model)
    }
})