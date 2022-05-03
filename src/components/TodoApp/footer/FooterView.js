import {View} from 'Vendor';
import {_} from 'Vendor';


let FooterView = View.extend({


    template: _.template('<button class="all">all</button><button class="completed">completed</button><button class="not-completed">not-completed</button>'),

    events: {
        'click .all': 'getFilter',
        'click .completed': 'completedFilter',
        'click .not-completed': 'notCompletedFilter',
    },

    getFilter() {
        return this.model.get('completed') === true;
        
    }
})
export { FooterView };