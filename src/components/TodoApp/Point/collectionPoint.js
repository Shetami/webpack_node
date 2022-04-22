import {PointModel} from './PointModel'
import {Collection} from 'Vendor'

let Points = Collection.extend({
    model: PointModel,
});

export {Points};