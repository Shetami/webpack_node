import {View} from 'backbone.marionette';
import _ from 'underscore';

export let Template = View.extend({
    tagName: 'div',
    template: _.template('<%= text %>'),
    templateContext() {
      return {
        text: this.getOption('text')
      }
    }
  });
