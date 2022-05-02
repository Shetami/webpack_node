import {Model} from 'Vendor'
let PointModel = Model.extend({
    defaults: {
        title: 'default',
        compleated: false,
    },

    isCompleted() {
        return this.get('completed');
    },

    swap() {
        return this.set('completed', !this.isCompleted());
    },
});
export  {PointModel};