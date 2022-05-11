import { ListView } from './points/ListView';
import { Points } from './points/collectionPoint';
import { FooterView } from './footer/FooterView';
import { HeaderView } from './header/HeaderView';
import { View } from 'vendors';
import {_} from 'vendors';

let TodoView = View.extend({
    className: 'app',
    regions: {
        headerRegion: '#header',
        contentRegion: '#content',
        footerRegion: '#footer',
    },

    options:{
        model: this.model, 
        collection: this.collection
    },
    onRender(){
        this.showChildView('headerRegion', new HeaderView({model: this.model, collection: this.collection}));
        this.showChildView('contentRegion', new ListView({collection: this.collection}));
        this.showChildView('footerRegion', new FooterView({model: this.model, collection: this.collection}));
    },


    initialize(){
        this.collection = new Points();
    },

    template: _.template('<div id="header"></div><div id="content"></div><div id="footer"></div>'),

});

export {TodoView};



