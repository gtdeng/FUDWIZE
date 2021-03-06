angular.module('myApp.signup', [])

.controller('SignupCtrl', ['$scope', '$routeParams', '$window', '$location', 'AjaxService', function($scope, $routeParams, $window, $location, AjaxService){
  /*
  angular best practice is to save the controller "this" context as "vm" (short for viewmodel)
  doing this allows us to bind something to our view while nested inside a controller function like submitForm
  */
  var vm = this;
  vm.userAlreadyExists = false;
  vm.next = false;
  vm.invalidAddress = false;
  /*
  typeParam will be either "rst" or "fbk" based on our .config setup in app.js
  we must make sure <a> "href=" in signup.html directs us to either #/signup/rst or #/signup/fbk
  */
  var typeParam = $routeParams.type;

  if (typeParam === 'rst') {
    vm.isRst = true;
  }

  vm.mealType = {
    'Breakfast': false,
    'Lunch': false,
    'Dinner': false,
    'Dessert': false,
  };

  vm.foodType = {
    'Baked Goods': false,
    'Produce': false,
    'Canned Goods': false,
    'Meats': false,
    'Dairy': false,
  };

  vm.pickupDay = {
    'Monday': false,
    'Tuesday': false,
    'Wednesday': false,
    'Thursday': false,
    'Friday': false,
    'Saturday': false,
    'Sunday': false,
  };

  vm.pickupTime = {
    'Early Morning (6AM-9AM)': false,
    'Late Morning (9AM-12PM)': false,
    'Early Afternoon (12PM-3PM)': false,
    'Late Afternoon (3PM-6PM)': false,
    'Evening (6PM-9PM)': false,
  };
  //data submited from the html signup form will go in this object
  // postData object will contain these properties (only rst's will have foodData):

  vm.postData = {
    foodData: {
      mealType: vm.mealType,
      foodType: vm.foodType,
      pickupDay: vm.pickupDay,
      pickupTime: vm.pickupTime,
    }
  };

  //calling submitForm invokes "postSignupData(postData, typeParam)" method in AjaxService, passing in form data and param type

  vm.submit = function() {
    AjaxService.postSignupData(vm.postData, typeParam)
      .success(function(data, status, headers, config){
        /* on success, data will be an object with username, type, and token
        this object is placed in the user's browser's localStorage to verify session
        on logout, this object will be removed from localStorage */
        console.log('signup success', data);
        $window.localStorage.setItem('com.fudWize', JSON.stringify(data));
        $location.path('/profile/' + data.type + '/' + data.username);
      })
      .error(function(data, status, headers, config){
        console.log('signup error', status);
        vm.userAlreadyExists = true;
        vm.next = false;
      });
  };
 
 //checking if the input address is valid
  vm.validAddress = function(street, cityStateZip) {
    var geocoder = new google.maps.Geocoder();
    var address = street + " " + cityStateZip;
    geocoder.geocode({ 'address': address }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        vm.next = true;
        vm.invalidAddress = false;
        $scope.$apply();
      }
      else {
        vm.next = false;
        vm.invalidAddress = true;    
        $scope.$apply();
      }
    });
  }

}]);

