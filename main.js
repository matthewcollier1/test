let videoButton = document.querySelector('.video-button');

videoButton.addEventListener('click', () => {
	let header = document.querySelector('.header');
	let video = document.querySelector('.youtube-video');
	header.classList.add('clicked');
	video.setAttribute('style', 'display: block');
});

// Info from json

var section = document.querySelector('.car-data');

var requestURL = 'test.json';
var request = new XMLHttpRequest();

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
	var cars = request.response;
	showCars(cars);
};

function showCars(jsonObj) {
	var carObj = jsonObj['cars'];
	console.log(carObj);
	for (var i = 0; i < carObj.length; i++) {
		var myArticle = document.createElement('article');
		var myH5 = document.createElement('h5');
		var p1 = document.createElement('p');
		var myImg = document.createElement('img');
		var p2 = document.createElement('p');
		var p3 = document.createElement('p');
		var p4 = document.createElement('p');
		var p5 = document.createElement('p');
		var p6 = document.createElement('p');
		var p7 = document.createElement('p');
		var p8 = document.createElement('p');
		var b1 = document.createElement('button');
		var b2 = document.createElement('button');

		myH5.textContent = carObj[i].Name;
		p1.textContent = 'Price: ' + carObj[i].Price;
		myImg.src = carObj[i].Photo;
		p2.textContent = 'Retailer: ' + carObj[i].Retailer;
		p3.textContent = 'Kilometres: ' + carObj[i].Kilometres;
		p4.textContent = 'Transmission: ' + carObj[i].Transmission;
		p5.textContent = 'Exterior: ' + carObj[i].Exterior;
		p6.textContent = 'Interior: ' + carObj[i].Interior;
		p7.textContent = 'VIN: ' + carObj[i].VIN;
		p8.textContent = 'Drive Train: ' + carObj[i].DriveTrain;
		b1.textContent = 'View Details';
		b2.textContent = 'Book A Test Drive';

		myArticle.appendChild(myH5);
		myArticle.appendChild(p1);
		myArticle.appendChild(myImg);
		myArticle.appendChild(p2);
		myArticle.appendChild(p3);
		myArticle.appendChild(p4);
		myArticle.appendChild(p5);
		myArticle.appendChild(p6);
		myArticle.appendChild(p7);
		myArticle.appendChild(p7);
		myArticle.appendChild(b1);
		myArticle.appendChild(b2);

		section.appendChild(myArticle);
	}
}
