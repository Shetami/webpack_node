import { View } from 'backbone.marionette';
import _ from 'underscore';
import content from '../templates'

let MainView = View.extend({

    events:{
        "click .addPoint": "addPoint",
    },

    initialize: function(){
        this.content = content;
        this.template = _.template('<% content %>');
        this.collect = PointCollection();
        this.listenTo(this.collect, "add", this.addOne);
    },

    addPoint: function(){
        this.collect.add({});
    },

    addOne: function(model){
        
    }
});