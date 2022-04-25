import {View} from 'Vendor'
import {PointModel} from '../point/PointModel'

let HeaderView = View.extend({

    events: {
        'keydown input': 'addKeydown',
    },


    addKeydown(event) {
        if (event.key === 'Enter'){
            let Description = new PointModel();
            var val = this.$el.find('.val').val().trim();
            console.log(val);
            console.log(this.collection);
            this.collection.add({title:val});  
            this.$el.find('.val').val('')
        }
    },

    template: _.template('<h2>TODO</h2><input class="val" type="text">'),   
})

export { HeaderView };