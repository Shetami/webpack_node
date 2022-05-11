import { normalizeMethods } from 'backbone.marionette';
import {View} from 'vendors';
import {_} from 'vendors';


let FooterView = View.extend({


    template: _.template(`
    <button data="undefined">all</button>
    <button data="true">complete</button>
    <button data="false">not-completed</button>`
    ),

    setFilter(key, value) {
        let filter = this.getOption('filterModel');
        filter.set(key, value);
    },

    events: {
        'click button[date]'(event){
            let value = $(event.target).closest('button').data('role');
            value = normalizeValue(value);
            this.setFilter('completed', value);
        },
        'click .all': 'getFilter',
        'click .completed': 'completedFilter',
        'click .not-completed': 'notCompletedFilter',
    },

    
})
export { FooterView };