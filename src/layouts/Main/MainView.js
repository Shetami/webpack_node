import { Collection } from 'backbone';
import { View, CollectionView } from 'backbone.marionette';
import _ from 'underscore';
import content from '../templates'

let MainView = View.extend({

    events:{
        "click .add-task": "createNewPoint",
    },

    template: _.template(content),

    templateID:{
        description: '#description'
    },

    createNewPoint: function(){
        this.collection.add({
            description: this.templateID.description.val(),
        });
        this.templateID.description.val("");
    },


});