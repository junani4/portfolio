const upText = document.querySelector('.introduce__box-left');
const imageMe = document.querySelector('.introduce__image-me');
const imagePet = document.querySelector('.introduce__image-pet');
const menuLogo = document.querySelector('.menu__logo');
const menuNav = document.querySelector('.menu__nav a');

$(function () {
	$('#wrap').fullpage({
		//options here
		anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
		scrollOverflow: true,
		css3: true,
		afterLoad: function (origin, destination) {
			if (destination == 1) {
				menuLogo.style.animation = "appearLeftS 1s ease-in";
				menuLogo.style.opacity = "1";
			} else {
				menuLogo.style.animation = "disappearLeftS 1s ease-in";
				menuLogo.style.opacity = "0";
			}
			//2 애니메이션
			if (destination == 2) {
				upText.style.animation = "appearUp 1s ease-in-out";
				upText.style.opacity = "1";
				imageMe.style.animation = "appearLeft 1s ease-in-out";
				imageMe.style.opacity = "1";
				imagePet.style.animation = "appearRight 1s ease-in-out";
				imagePet.style.opacity = "1";
			} else {
				upText.style.animation = "disappearUp 1s ease-in-out";
				upText.style.opacity = "0";
				imageMe.style.animation = "disappearLeft 1s ease-in-out";
				imageMe.style.opacity = "0";
				imagePet.style.animation = "disappearRight 1s ease-in-out";
				imagePet.style.opacity = "0";
			}

		}
	});
});




