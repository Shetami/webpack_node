import {View} from 'Vendor';
import {_} from 'Vendor';


let FooterView = View.extend({


    template: _.template('<button class="all">all</button><button class="completed">completed</button><button class="not-completed">not-completed</button>'),

    events: {
        'click .all': 'allFilter',
        'click .completed': 'completedFilter',
        'click .not-completed': 'notCompletedFilter',
    },

    allFilter() {
        this.collection.where({completed: false});
    }
})
export { FooterView };