"use strict";

require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

//Tabs

import tabs from './modules/tabs';

//Timer

import timer from './modules/timer';

//Modal

import modal from './modules/modal';
import { openModal } from './modules/modal';

// Clsses for cards

import cards from './modules/cards';

//Forms

import forms from './modules/forms';

//Slider

import slider from './modules/slider';

//Calc 

import calc from './modules/calc';


window.addEventListener('DOMContentLoaded', () => {
    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 500000);

    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');

    timer('.timer', '2021-12-31');

    modal('[data-modal]', '.modal', modalTimerId);

    cards();

    forms('form', modalTimerId);

    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        totalCounter: '#total',
        currentCounter: '#current',
        wrapper: '.offer__slider-wrapper',
        field: '.offer__slider-inner',
        slide: '.offer__slide'
    });

    calc();
});