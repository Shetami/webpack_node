import { CollectionView } from 'vendors';
import { ItemView } from './ItemView';


const ListView = CollectionView.extend({

	tagName: 'ul',

	initialize () {

		this.listenTo(this.model, 'change', () => {

			this.filter();

		});

	},

	childView: ItemView,
	childViewOptions () {

		return {
			collection: this.collection
		};

	},

	collectionEvents: {
		'change:completed' () {

			this.filter();

		}
	},
	viewFilter (childView) {

		const value = this.model.get('completed');

		if (value == null) {

			return true;

		}
		const result = childView.model.get('completed');
		return result === value;

	}
});


export { ListView };
