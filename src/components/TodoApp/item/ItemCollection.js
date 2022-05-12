import {ItemModel} from './ItemModel'
import {Collection} from 'vendors'

let Items = Collection.extend({
    model: ItemModel,


});
    
export {Items};