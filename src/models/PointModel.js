var app = app || {};
app.PointModel = Backbone.Model.extend({
    defaults:{
        descripion: '',
        completed: false,
    },

    initialize: function() {},
});

let PostCollection = Backbone.Collection.extend({
    model: PointModel,
});