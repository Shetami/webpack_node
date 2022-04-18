let MainView = Backbone.View.extend({

    events:{
        "click .addPoint": "addPoint",
    },

    initialize: function(){
        this.template = _.template($('#viewMain').html());
        this.$el.html(this.template());
        this.collect = PostCollection();
        this.listenTo(this.collect, "add", this.addOne);
    },

    addPoint: function(){
        this.collect.add({});
    },

    addOne: function(model){
        var view = new PointView({model: model});
        this.$('.PointList').append(view.render);
    }
});