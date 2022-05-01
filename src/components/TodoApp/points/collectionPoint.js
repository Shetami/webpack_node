import {PointModel} from './PointsModel'
import {Collection} from 'Vendor'

let Points = Collection.extend({
    model: PointModel,
});

export {Points};