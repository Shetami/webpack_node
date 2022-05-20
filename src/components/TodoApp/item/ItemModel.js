import { Model } from 'vendors';
const ItemModel = Model.extend({
	defaults: {
		title: 'default',
		completed: false
	}

});
export { ItemModel };
