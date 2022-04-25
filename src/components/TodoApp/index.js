import { PointView } from './point/PointView';
import { Points } from './point/collectionPoint';
import { HeaderView } from './header/HeaderView';
import { View } from 'Vendor';


let TodoView = View.extend({

    regions: {
        headerRegion: '#header',
        contentRegion: '#content',
    },

    onRender(){
        this.showChildView('headerRegion', new HeaderView({model: this.model, collection: this.collection}))
        this.showChildView('contentRegion', new PointView({model: this.model, collection: this.collection}))
    },

    initialize(){
        this.collection = new Points()
    },

    template: _.template('<div id="header"></div><div id="content"></div>'),

});

export {TodoView};



