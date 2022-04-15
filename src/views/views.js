let PointView = Backbone.View.extend({
    tagName: 'li',

    events: {
        "blur .description .completed": "editPoint",
        "keypress .deletePoint": "deletePoint",
        "click .completed": "completedPoint",
    },

    initialize: function() {
        this.template = _.template($('#viewPoint').html());
        this.listenTo(this.model, "change", this.render);
        this.listenTo(this.model, "destroy", this.remove);

    },
    
    render: function(){
        var view = this.template(this.model.toJSON());
        this.$el.html(view);
        return this.$el;
    },    
    
    deletePoint: function(){
        this.model.destroy();
    },

    editPoint: function(){
        var result = this.model.set({
            description: this.$('.description').text(),
            completed: this.$('.completed').attr('value'),   
        });
    },
    completedPoint: function(){
        return false;
    }    
})

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

export default PointView