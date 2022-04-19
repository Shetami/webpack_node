import Backbone from 'backbone'
import {Application, View} from 'backbone.marionette'
import MainView from './Main/MainView'

export default Application.extend({
    region: '#app',

    onStart(app, options){
        this.showView(new MainView({model: this.model}))
        Backbone.history.start()
    }
})



