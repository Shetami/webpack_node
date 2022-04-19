import PointModel from './PointModel'
import { View } from 'backbone.marionette'
import templatePointView from '../templates'

let PointView = View.extend({

    // events: {
    //     click: 'click',
    // },

    template: _.template(templatePointView),
    
    // render: function(){
    //     var view = this.template(this.model.toJSON());
    //     this.$el.html(view);
    //     return this.$el;
    // },    
    
    // deletePoint: function(){
    //     this.model.destroy();
    // },

    // editPoint: function(){
    //     var result = this.model.set({
    //         description: this.$('.description').text(),
    //         completed: this.$('.completed').attr('value'),   
    //     });
    // },
    // completedPoint: function(){
    //     return false;
    // }    
})


let Points = Backbone.Collection.extend({
    model: PointModel,
});