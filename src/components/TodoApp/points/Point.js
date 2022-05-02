import {View} from 'Vendor'
import {_} from 'Vendor';

export const ItemView = View.extend({

    className: 'item',

    initialize() {
        console.log(this.model.toJSON())
    },

    template: _.template('<input type="checkbox" class="checkbox" id="check"></input><li class="todoPoint"><%= title %></li><button>&times;</button>'),

    events: {
        'click button': 'removeItem',
        'click .checkbox': 'completePoint'
    },

    completePoint() {
        let check = document.getElementById('check'); 
        if (check.checked) {
            this.model.set({completed: true})
        }
        else {
            this.model.set({completed: false})    
        }
    },

    removeItem() {
        this.collection.remove(this.model)
    }
})