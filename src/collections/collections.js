import PointModel from '../models/models'

let PostCollection = Backbone.Collection.extend({
    model: PointModel,
});

export default PostCollection