import MainView from './views/views.js'
import './collections/collections.js'
import './models/models.js'

var app = app || {};

$(function(){
    app.postView = new MainView({
        el: '#main'
    })
});

