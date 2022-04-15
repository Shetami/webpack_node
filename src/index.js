import PointView from './views/views.js'
import './collections/collections.js'
import './models/models.js'

var app = app || {};

var Backbone = require('backbone');
Backbone.$(function(){
    app.postView = new PointView({
        el: '#main'
    })
});

