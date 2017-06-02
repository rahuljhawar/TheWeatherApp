$(document).ready(function(){
	var latitude;
	var longitude;
	 if (navigator.geolocation) {
 navigator.geolocation.getCurrentPosition(function(position) {
    latitude = position.coords.latitude ;
   longitude = position.coords.longitude;
   $.ajax({
   		url:'http://api.openweathermap.org/data/2.5/weather?lat='+latitude+'&lon='+longitude+'&APPID=85d70ecd7117908fce736877b8620966&units=metric',
   		success:function(data){
   		 var city=data.name;
   		 var temperature=data.main.temp;
   		 var image_code=data.weather[0].icon;
   		 var country=data.sys.country;
   		 

   		 
		$('.lead').html(`<div class="row">
							<div class="col-md-4">
								<h3 id="temp">${temperature}&deg <strong style="color:red">C</strong></h3>
							</div>
							<div class="col-md-4">
								<h3 id="city"><img src="location.ico" height="40" width="40">${city}</h3>
								<h3 style="color:#54bfd6"><strong>${country}</strong</h3>
							</div>
							<div class="col-md-4">
								<img src="http://openweathermap.org/img/w/${image_code}.png" height="45" width="45">
								<h4 id="desc" style="color:#f0dc72">${data.weather[0].description}</h4>

							</div>
						</div>	




			`);
			}

  		});
 	});
}
 		var lati;
        var longi;
        google.maps.event.addDomListener(window, 'load', intilize);
   		 function intilize() {
        var autocomplete = new google.maps.places.Autocomplete(document.getElementById("textarea"));

        google.maps.event.addListener(autocomplete, 'place_changed', function () {

        var place = autocomplete.getPlace();
        var location = "Address: " + place.formatted_address + "<br/>";
        location += "Latitude: " + place.geometry.location.A + "<br/>";
        location += "Longitude: " + place.geometry.location.F;
        var lati=place.geometry.location.lat();
        var longi=place.geometry.location.lng();

        $.ajax({
   		url:'http://api.openweathermap.org/data/2.5/weather?lat='+lati+'&lon='+longi+'&APPID=85d70ecd7117908fce736877b8620966&units=metric',
   		success:function(data){
   		 var city=data.name;
   		 var temperature=data.main.temp;
   		 var image_code=data.weather[0].icon;
   		 var country=data.sys.country;
   		 

   		 
		$('.lead').html(`<div class="row">
							<div class="col-md-4">
								<h3 id="temp">${temperature}&deg <strong>C</strong></h3>
							</div>
							<div class="col-md-4">
								<h3 id="city"><img src="location.ico" height="40" width="40">${city}</h3>
								<h3>${country}</h3>
							</div>
							<div class="col-md-4">
								<img src="http://openweathermap.org/img/w/${image_code}.png" height="45" width="45">
								<h4 id="desc">${data.weather[0].description}</h4>

							</div>
						</div>	




			`);
			}

  		});
    });
	}	
 });                       