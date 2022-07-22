const close = document.querySelector(".close")

const btn = document.querySelector(".btn")

const centeredDiv = document.querySelector(".centered-div")

const secondCenteredDiv = document.querySelector(".second-centered-div")

const background = document.querySelector(".background")

//btn event listener
btn.addEventListener("click", () => {
				centeredDiv.classList.add("invisible")
				secondCenteredDiv.classList.add("show")
				background.classList.add("dim")
				
})

//close btn event listener
close.addEventListener("click", () => {
				centeredDiv.classList.remove("invisible")
				secondCenteredDiv.classList.remove("show")
				background.classList.remove("dim")
				
})

