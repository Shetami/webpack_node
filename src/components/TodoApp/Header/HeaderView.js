import { View, _ } from 'vendors';


const HeaderView = View.extend({

	className: 'todo',
	events: {
		'keydown input': 'addKeydown',
		'click #complete': 'complete'
	},


	addKeydown (event) {

		if (event.key === 'Enter') {

			const val = this.$el.find('.val').val().trim();
			this.collection.add({ title: val });
			this.$el.find('.val').val('');

		}

	},


	template: _.template('<h2>TODO</h2><input class="val" type="text">')
});

export { HeaderView };
