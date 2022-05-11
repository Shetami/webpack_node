import {PointModel} from './PointsModel'
import {Collection} from 'vendors'

let Points = Collection.extend({
    model: PointModel,


});
    
export {Points};