import PointModel from './PointModel'
import {View, CollectionView} from 'backbone.marionette'
import Backbone from 'backbone';

let PointView = CollectionView.extend({

    tagName: 'ul',

    events: {
        click: 'click',
    },

      
    childView: View.extend({
        template: _.template('<p><%= description %></p>'),
    })
})


let Points = Backbone.Collection.extend({
    model: PointModel,
});

export {PointView, Points};