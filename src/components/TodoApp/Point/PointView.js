import {View, CollectionView} from 'Vendor'

let PointView = CollectionView.extend({

    tagName: 'ul',

    events: {
        click: 'click',
    },

      
    childView: View.extend({
        template: _.template('<p><%= description %></p>'),
    })
})


export {PointView};