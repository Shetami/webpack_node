import './header.less';
import {View} from 'backbone.marionette';
import _ from 'underscore';

export const Header = View.extend({
    tagName: 'h1',
    template: _.template('<%= text %>'),
    templateContext() {
      return {
        text: this.getOption('text')
      }
    }
  });
