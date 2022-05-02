import {PointModel} from './PointsModel'
import {Collection} from 'Vendor'

let Points = Collection.extend({
    model: PointModel,

    getCompleted() {
        return this.filter(this.setCompleted);
    },

    getNotCompleted() {
        return this.reject(this.setCompleted);
    },

    setCompleted(point) {
        return point.PointModel.isCompleted();
    }

});
    
export {Points};