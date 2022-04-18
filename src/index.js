import $ from 'jquery';
import { MainView } from './models';

let main = new MainView();

$(document.body).append(view.el);

view.render();
