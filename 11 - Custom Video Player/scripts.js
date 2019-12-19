// VARIABLES 
const player = document.querySelector('.player')
const video = player.querySelector('.viewer')
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButton = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

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

function handleRange() {
  video[this.name] = this.value
}

function handleProgress() {
  const percentage = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percentage}%`
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}



// EVENT LISTENERS 

video.addEventListener('click', togglePlay)
video.addEventListener('play', buttonUpdate)
video.addEventListener('pause', buttonUpdate)
video.addEventListener('timeupdate', handleProgress) // triggered when the video is updating its time code

toggle.addEventListener('click', togglePlay)
skipButton.forEach(elem => elem.addEventListener('click', skip))

let mouseDown = false
progress.addEventListener('click', scrub)
progress.addEventListener('mousemove', (e) => mouseDown && scrub(e)) // will only run scrub if mouseDown is TRUE
progress.addEventListener('mousedown', () => mouseDown = true )
progress.addEventListener('mouseup', () => mouseDown = false )

ranges.forEach(elem => elem.addEventListener('change', handleRange))
ranges.forEach(elem => elem.addEventListener('mouseover', handleRange))
