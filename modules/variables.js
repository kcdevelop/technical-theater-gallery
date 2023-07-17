import { getWinWidth } from './get-window-dimensions.js';

//Set handles for slider elements
export const navigation = document.querySelectorAll('nav.direction-nav i'),
sliderFrame = document.querySelector('#slider-frame'),
sliderTrack = sliderFrame.querySelector('.slider-track'),
tabNav = sliderFrame.querySelector('.tab-nav'),
manualSliderWidth = sliderFrame.parentElement.clientWidth;

//Current URL
export const url = window.location.href;

//Slide element array
export const slides = [
    { 'name': 'onceOnThisIntroSlide', 'image': 'images/slides/once-on-this-island-intro.jpg', 'caption': ''},
    { 'name': 'onceOnThisSlide1', 'image': 'images/slides/once-on-this-island-1.jpg', 'caption': ''},
    { 'name': 'onceOnThisSlide2', 'image': 'images/slides/once-on-this-island-2.jpg', 'caption': ''},
    { 'name': 'onceOnThisSlide3', 'image': 'images/slides/once-on-this-island-3.jpg', 'caption': ''},
    { 'name': 'onceOnThisSlide4', 'image': 'images/slides/once-on-this-island-4.jpg', 'caption': ''},
    { 'name': 'onceOnThisSlide5', 'image': 'images/slides/once-on-this-island-5.jpg', 'caption': ''},
    { 'name': 'seussicaIntrolSlide', 'image': 'images/slides/seussical-intro.jpg', 'caption': ''},
    { 'name': 'seussicalSlide1', 'image': 'images/slides/seussical-1.jpg', 'caption': ''},
    { 'name': 'seussicalSlide2', 'image': 'images/slides/seussical-2.jpg', 'caption': ''},
    { 'name': 'seussicalSlide3', 'image': 'images/slides/seussical-3.jpg', 'caption': ''},
    { 'name': 'seussicalSlide4', 'image': 'images/slides/seussical-4.jpg', 'caption': ''},
    { 'name': 'seussicalSlide5', 'image': 'images/slides/seussical-5.jpg', 'caption': ''},
    { 'name': 'seussicalSlide6', 'image': 'images/slides/seussical-6.jpg', 'caption': ''},
    { 'name': 'seussicalSlide6a', 'image': 'images/slides/seussical-6a.jpg', 'caption': ''},
    { 'name': 'seussicalSlide7', 'image': 'images/slides/seussical-7.jpg', 'caption': ''},
    { 'name': 'seussicalSlide8', 'image': 'images/slides/seussical-8.jpg', 'caption': ''},
    { 'name': 'seussicalSlide8', 'image': 'images/slides/seussical-8a.jpg', 'caption': ''},
    { 'name': 'seussicalSlide9', 'image': 'images/slides/seussical-9.jpg', 'caption': ''},
    { 'name': 'seussicalSlide9', 'image': 'images/slides/seussical-9a.jpg', 'caption': ''},
    { 'name': 'seussicalSlide10', 'image': 'images/slides/seussical-10.jpg', 'caption': ''},
    { 'name': 'seussicalSlide10a', 'image': 'images/slides/seussical-10a.jpg', 'caption': ''},
    { 'name': 'seussicalSlide11', 'image': 'images/slides/seussical-11.jpg', 'caption': ''},
    { 'name': 'seussicalSlide12', 'image': 'images/slides/seussical-12.jpg', 'caption': ''}
];

//Default slider properties
export var sliderProps = {
    float: 'left',
    count: slides.length - 1
};

//Default state properties
export var navCalc = {
    trackWidth: getWinWidth() * sliderProps.count,
        trackPos: 0,
        slideCount: 0
};