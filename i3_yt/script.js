var vidCont = document.querySelector('video');
var hideDone = false;
var able_id;
var hide_id;

function hideable() {
	hideDone = false;
}

function killTime(timeId) {
	clearTimeout(timeId);
}

function hide() {
	vidCont.style.cursor = 'none';
	hideDone = true;
};

function hideTime() {
	killTime(hide_id);
	killTime(able_id);
	if(!hideDone) { 
		vidCont.style.cursor = 'auto';
	}
	hide_id = setTimeout(hide, 180);
	able_id = setTimeout(hideable, 24);
};		

function unhide() {
	vidCont.style.cursor = 'auto';
	hideDone = false;
}

if(vidCont != null) {
	vidCont.addEventListener('mouseover', hideTime);
	vidCont.addEventListener('mouseout', unhide);
	vidCont.addEventListener('mousemove', hideTime);
} 


