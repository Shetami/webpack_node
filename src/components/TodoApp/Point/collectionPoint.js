import {PointModel} from './PointModel'

let Points = Backbone.Collection.extend({
    model: PointModel,
});

export {Points};