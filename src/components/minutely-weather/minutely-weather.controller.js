/*jshint esversion: 6*/
MinutelyWeatherController.$inject=['WeatherService','ImageService'];

function MinutelyWeatherController (weather,images){
  this.imageLookup = images.imageLookup;
  this.missingImage = images.missingImage;
  //this.weatherdataunavailable='';
  this.weatherMinutelyNotAvailable = false;

  /*this.searchByCoordinates = function searchByCoordinates(){
    weather.getWeatherDataByCoordinates(this.lat,this.lon)
                                  .then(resp=>{
                                    if(resp){
                                      this.weatherMinutely=resp.minutely;
                                    }
                                    else{
                                      this.weatherMinutelyNotAvailable='true';
                                    }
                                  });
  };

  this.searchByLocation = function searchByLocation(){
    const loc =  `${this.city}${this.state}${this.zip}`;
    weather.getWeatherDataByLocation(this.lat,this.lon)
                                  .then(resp=>{
                                    if(resp){
                                      this.weatherMinutely=resp.minutely;
                                    }
                                    else{
                                      this.weatherMinutelyNotAvailable='true';
                                    }
                                  });
  };*/
}

module.exports = MinutelyWeatherController;
