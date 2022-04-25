import {View, CollectionView} from 'Vendor'
import { ItemView } from '../item';

let PointView = CollectionView.extend({

    tagName: 'ul',


    childView: ItemView,

})


export {PointView};