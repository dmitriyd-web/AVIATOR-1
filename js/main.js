document.addEventListener('DOMContentLoaded', function(){
	
	const playVideo = document.getElementById("video")
	const videoProgress = document.querySelector(".progress")

	playVideo.addEventListener("click", () => {
		videoProgress.classList.add("progress-start")
	})
})