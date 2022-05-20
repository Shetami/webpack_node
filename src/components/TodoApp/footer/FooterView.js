import { View, _, $ } from 'vendors';



const FooterView = View.extend({


	template: _.template(`
    <button data-data="">all</button>
    <button data-data="true">complete</button>
    <button data-data="false">not-completed</button>`
	),


	_setFilter (key, value) {

		this.model.set(key, value);

	},

	events: {
		'click button[data-data]' (event) {

			let value = $(event.target).closest('button').data('data');
			if (value === '') {

				value = undefined;

			}
			this._setFilter('completed', value);

		},
		'click .all': 'getFilter',
		'click .completed': 'completedFilter',
		'click .not-completed': 'notCompletedFilter'
	}


});
export { FooterView };
