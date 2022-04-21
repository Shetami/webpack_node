import {PointView, Points} from './Point/PointView';
import { HeaderView } from './Header/HeaderView';
import { View } from 'backbone.marionette';
import _ from 'underscore';


let TodoView = View.extend({

    regions: {
        headerRegion: '#header',
        contentRegion: '#content',
    },

    onRender(){
        this.showChildView('headerRegion', new HeaderView({model: this.model, collection: this.collection}))
        this.showChildView('contentRegion', new PointView({collection: this.collection}))
    },

    initialize(){
        const collection = new Points()
    },

    template: _.template('<div id="header"></div><div id="content"></div>'),

    initialize() {
        this.triggerMethod('after:initialize');
    }
});

export {TodoView};


