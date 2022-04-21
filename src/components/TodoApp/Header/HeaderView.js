import {View} from 'Vendor'
import {PointModel} from '../Point/PointModel'

let HeaderView = View.extend({

    events: {
        'keydown input': 'addKeydown',
    },


    addKeydown(event){
        if (event.key === 'Enter'){
            let description = PointModel();
            this.collection.add(description);
        }
    },


    template: _.template('<h2>TODO</h2><input type="text">'),   
})

export { HeaderView };