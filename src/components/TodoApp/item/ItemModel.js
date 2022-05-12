import {Model} from 'vendors'
let ItemModel = Model.extend({
    defaults: {
        title: 'default',
        completed: false,
    },

});
export  {ItemModel};