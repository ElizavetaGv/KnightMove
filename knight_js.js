var fieldWidth=40;
var fieldHeight=40;

for (var x=1;x<=8;x++) {
	for (var y=1;y<=8;y++) {
		var field=document.createElement('div');
		if ((x+y)%2==0){
			field.classList='blackField';
		} else {
    			field.classList='whiteField';
   		}
    
		var X=(x-1)*fieldWidth;
		var Y=(y-1)*fieldHeight;
    
		field.setAttribute('style', 'left: ' + X + 'px' + ';' + 'top: ' + Y + 'px');
		field.setAttribute('id', 'field-' + x + '-' + y);
		field.setAttribute('data-x', x);
		field.setAttribute('data-y', y);
    
		document.getElementById('board').appendChild(field);
	}
}


document.getElementById('board').addEventListener('click', findPoints);
var button=document.getElementById('points');
button.addEventListener('click',findPoints1);

function findPoints(event) {
	var knightX=+event.target.getAttribute('data-x');
	var knightY=+event.target.getAttribute('data-y');

	Find(knightX,knightY);
}



function findPoints1() {
	var knightX=+document.getElementById('knightX').value;
	var knightY=+document.getElementById('knightY').value;

	if (knightX<1 || knightX>8 || knightY<1 || knightY>8) {
		document.getElementById('message').innerHTML='Неверные данные!';
		return;
	} else {
		document.getElementById('message').innerHTML='';
	}
	Find(knightX,knightY);

}

function Find(knightX,knightY) {
	var oldBlackKnights=document.getElementsByClassName('blackKnight');
	for (var i=0; i<oldBlackKnights.length;i++) {
  		oldBlackKnights[i].classList.remove('blackKnight');
	}
	var oldWhiteKnights=document.getElementsByClassName('whiteKnight');
	for (var i=0; i<oldWhiteKnights.length;i++) {
		oldWhiteKnights[i].classList.remove('whiteKnight');
	}
	if ((knightX+knightY)%2==0){
		document.getElementById('field-' + knightX + '-' + knightY).classList.add('blackKnight');
	} else {
		document.getElementById('field-' + knightX + '-' + knightY).classList.add('whiteKnight');
	}

	var oldPoints=document.getElementsByClassName('go');
	while (oldPoints.length>0) {
		oldPoints[0].classList.remove('go');
	}

	for (var pointX=1; pointX<=8; pointX++){
		for (var pointY=1; pointY<=8; pointY++){
			if ( ( Math.abs(knightX-pointX)==1 && Math.abs(knightY-pointY)==2 ) || ( Math.abs(knightX-pointX)==2 && Math.abs(knightY-pointY)==1 ) )  {
        
				document.getElementById('field-' + pointX + '-' + pointY).classList.add('go');
			}
		}
	}
}