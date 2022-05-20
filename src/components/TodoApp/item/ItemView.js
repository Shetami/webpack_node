import { View, _ } from 'vendors';


export const ItemView = View.extend({

	className: 'item',

	initialize () {

		console.log(this.model.toJSON());

	},

	template: _.template(`
    <button class="complete">&nbsp;</button>
    <span><%= title %></span>
    <button class="remove">&times;</button>
    `),

	events: {
		'click .remove': 'removeItem',
		'click .complete': 'completeItem'
	},


	completeItem () {

		const completed = !this.model.get('completed');
		this.model.set({ completed });
		if (completed) {

			this.$el.addClass('completed');

		} else {

			this.$el.removeClass('completed');

		}

	},

	removeItem () {

		this.collection.remove(this.model);

	}
});
