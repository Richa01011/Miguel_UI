const projectBlock = document.querySelector('.project');
const heroBtn = document.querySelector('.hero__link');

function scrollToProject() {
	projectBlock.scrollIntoView({block: "start", behavior: "smooth"});
}

heroBtn.addEventListener('click', scrollToProject);