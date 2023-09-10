const initialScreenWidth = window.innerWidth;

const element = document.querySelector('.side-bar');

const container = document.querySelector('.container')

element.style.width = `${initialScreenWidth * 0.2}px`; // Adjust the factor as needed

container.style.gridTemplateColumns = element.style.width + ' auto';