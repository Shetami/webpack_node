import {View} from 'vendors'
import {_} from 'vendors';

export const ItemView = View.extend({

    className: 'item',

    initialize() {
        console.log(this.model.toJSON())
    },

    template: _.template(`
    <button class="complete">&nbsp;</button>
    <span><%= title %></span>
    <button class="remove">&times;</button>
    `),

    events: {
        'click .remove': 'removeItem',
        'click .complete': 'completePoint',
    },

    completePoint() {
        let completed = !this.model.get('completed');
        this.model.set({ completed: !completed });
        if (completed) {
            this.$el.addClass('completed');
        } else {
            this.$el.removeClass('completed');
        }
    },

    removeItem() {
        this.collection.remove(this.model)
    }
})