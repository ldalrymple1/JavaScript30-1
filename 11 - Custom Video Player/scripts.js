// VARIABLES 
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButton = player.querySelectorAll('[data-skip]')
const ranges = player.querySelector('.player__slider')

// let vidPlaying = false

// FUNCTIONS

function togglePlay() {
  if (video.paused) {
    video.play()
  } else {
    video.pause()
  }
}
togglePlay()

function buttonUpdate(){
  const icon = this.paused ? '►' : '❚ ❚'
  toggle.textContent = icon
}

function skip() {
  console.log('skippety skip')
  video.currentTime += parseFloat(this.dataset.skip)
}

functio



// EVENT LISTENERS 

video.addEventListener('click', togglePlay)
video.addEventListener('play', buttonUpdate)
video.addEventListener('pause', buttonUpdate)
toggle.addEventListener('click', togglePlay)
skipButton.forEach(elem => elem.addEventListener('click', skip))
