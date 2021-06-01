'use strict'

const background = document.querySelector('body');
const img = document.querySelector('.mario');
let pos = 0;
let moving = false;
let int;

function moveBottomR() {
    background.style.backgroundPosition = `${pos}px bottom`;
    pos -= 30;
}

function runningRight(e) {
    if (e.keyCode === 39) {
        if (!moving) {
            img.setAttribute('src', './img/mario_running.gif')
            img.classList.add('mario')
            img.classList.toggle('flip')
            int = setInterval(moveBottomR, 100)
            moving = true;
        }
    }
}

function moveBottomL() {
    background.style.backgroundPosition = `${pos}px bottom`;
    pos += 30;
}

function runningLeft(e) {
    if (e.keyCode === 37) {
        if (!moving) {
            img.setAttribute('src', './img/mario_running.gif')
            img.classList.add('mario')
            img.classList.toggle('flip')
            int = setInterval(moveBottomL, 100)
            moving = true;
        }
    }
}

function standing(e) {
    if (e.keyCode === 39 || e.keyCode === 37) {
        img.setAttribute('src', './img/mario.png')
        img.classList.add('mario')
        moving = false;
        clearInterval(int)
    }
}

function jump(e) {
    if (e.keyCode === 32) {
        img.classList.toggle('jump')
    }
}




background.addEventListener('keydown', runningRight)
background.addEventListener('keydown', runningLeft)
background.addEventListener('keyup', standing)
background.addEventListener('keydown', jump)
background.addEventListener('keyup', jump)





