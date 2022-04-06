import $ from 'jquery';
import { Header } from '@/components/header';

let view = new Header({ text: 'hello world' });

$(document.body).append(view.el);

view.render();
