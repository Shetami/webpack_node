import { ListView } from './item/ListView';
import { Items } from './item/ItemCollection';
import { FooterView } from './footer/FooterView';
import { HeaderView } from './header/HeaderView';
import { View, _ } from 'vendors';
import { FilterModel } from './item/filterModel';


const TodoView = View.extend({
	className: 'app',
	regions: {
		headerRegion: '#header',
		contentRegion: '#content',
		footerRegion: '#footer'
	},



	onRender () {

		const options = {
			collection: new Items(),
			model: new FilterModel()
		};

		this.showChildView('headerRegion', new HeaderView(options));
		this.showChildView('contentRegion', new ListView(options));
		this.showChildView('footerRegion', new FooterView(options));

	},



	template: _.template('<div id="header"></div><div id="content"></div><div id="footer"></div>')

});

export { TodoView };

