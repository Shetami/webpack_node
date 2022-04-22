import {View} from 'Vendor'
import {PointModel} from '../Point/PointModel'

let HeaderView = View.extend({

    events: {
        'keydown input': 'addKeydown',
    },


    addKeydown(event) {
        if (event.key === 'Enter'){
            let Description = new PointModel();
            this.collection.add(Description);
        }
    },


    template: _.template('<h2>TODO</h2><input type="text">'),   
})

export { HeaderView };