let triggerBtn = document.querySelector(".navigation-mobile-trigger"),
    novigationMobileMenu = document.querySelector(".navigation-mobile");

triggerBtn.addEventListener("click", e=>{
	e.preventDefault();
	novigationMobileMenu.classList.toggle("--hide");
});

window.addEventListener('resize', (e) => {
  if(
	  	window.innerWidth>768 &&
	  	!novigationMobileMenu.classList.contains("--hide")
  ){
	novigationMobileMenu.classList.toggle("--hide");
  };
});