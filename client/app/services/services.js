angular.module('myApp.services', [])

.factory('AjaxService', ['$http', function($http){
  var obj = {};

  //invoking this method will perform a POST ajax and return a promise
  obj.postSignupData = function(data, param){
    return $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000' + '/signup/' + param,
      data: JSON.stringify(data)
    });
  }
  obj.postLoginData = function(data) {
    return $http({
      method: 'POST',
      url: 'http://127.0.0.1:3000' + '/login',
      data: JSON.stringify(data)
    });
  };

  return obj;

}])

//will need to update and understand this --> currently copied from shortly.js

.factory('AuthService',['$http', '$location', '$window', function ($http, $location, $window) {
  // Don't touch this Auth service!!!
  // it is responsible for authenticating our user
  // by exchanging the user's username and password
  // for a JWT from the server
  // that JWT is then stored in localStorage as 'com.shortly'
  // after you signin/signup open devtools, click resources,
  // then localStorage and you'll see your token from the server
  var signin = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signin',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var signup = function (user) {
    return $http({
      method: 'POST',
      url: '/api/users/signup',
      data: user
    })
    .then(function (resp) {
      return resp.data.token;
    });
  };

  var isAuth = function () {
    return !!$window.localStorage.getItem('com.shortly');
  };

  var signout = function () {
    $window.localStorage.removeItem('com.shortly');
    $location.path('/signin');
  };


  return {
    signin: signin,
    signup: signup,
    isAuth: isAuth,
    signout: signout
  };
}]);
