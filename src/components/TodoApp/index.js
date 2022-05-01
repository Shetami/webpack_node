import { ListView } from './points/ListView';
import { Points } from './points/collectionPoint';
import { HeaderView } from './header/HeaderView';
import { View } from 'Vendor';
import {_} from 'Vendor';

let TodoView = View.extend({
    className: 'app',
    regions: {
        headerRegion: '#header',
        contentRegion: '#content',
    },

    onRender(){
        this.showChildView('headerRegion', new HeaderView({collection: this.collection}));
        this.showChildView('contentRegion', new ListView({collection: this.collection}));
    },


    initialize(){
        this.collection = new Points();
    },

    template: _.template('<div id="header"></div><div id="content"></div>'),

});

export {TodoView};



