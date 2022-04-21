import {View} from 'backbone.marionette'
import PointModel from '../Point/PointModel'

let HeaderView = View.extend({
    ui: {
        input: 'input'
    },

    events: {
        'keydown @ui.input': 'addKeydown',
    },


    addKeydown(event){
        if (event.key === 'Enter'){
            const description = this.ui.input.val()
            this.collection.add([description])
            this.ui.input.val('')
        }
    },


    template: _.template('<h2>TODO</h2><input type="text">'),   
})

export { HeaderView };