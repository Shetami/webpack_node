import {PointView} from './Point/PointView';
import { Points } from './Point/collectionPoint';
import { HeaderView } from './Header/HeaderView';
import { View } from 'Vendor';


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
        this.collection = new Points()
    },

    template: _.template('<div id="header"></div><div id="content"></div>'),

    initialize() {
        this.triggerMethod('after:initialize');
    }
});

export {TodoView};



