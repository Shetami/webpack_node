import {PointView, Points} from '../Point/PointView';
import HeaderView from '../Header/HeaderView';
import { View } from 'backbone.marionette';
import _ from 'underscore';


let MainView = View.extend({

    regions: {
        headerRegion: '#header',
        contentRegion: '#content',
    },

    onRender(){
        this.showChildView('headerRegion', new HeaderView())
        this.showChildView('contentRegion', new PointView())
    },

    initialize(){
        const collection = new Points()
    },

    template: _.template('<div id="header"></div><div id="content"></div>'),

    initialize() {
        this.triggerMethod('after:initialize');
    }

    

});

export default MainView;