var mongoose = require('mongoose');
var User = require('./userModel.js');

var SALT_WORK_FACTOR = 10;

var createTestUsers = function(hashPassword) {

  // Remove any prior instances of testUsers

  User.remove({username: 'johnnyrockets'}, function(err) {
    if (err) {
      console.log("Unable to delete johnnyrockets");
    }
    else {
      console.log("johnnyrockets removed");
    }
  });

  User.remove({username: 'turtletower'}, function(err) {
    if (err) {
      console.log("Unable to delete turtletower");
    }
    else {
      console.log("turtletower removed");
    }
  });

  User.remove({username: 'chipotle'}, function(err) {
    if (err) {
      console.log("Unable to delete chipotle");
    }
    else {
      console.log("chipotle removed");
    }
  });

  User.remove({username: 'mehfil'}, function(err) {
    if (err) {
      console.log("Unable to delete mehfil");
    }
    else {
      console.log("mehfil removed");
    }
  });

  User.remove({username: 'tacoshop'}, function(err) {
    if (err) {
      console.log("Unable to delete tacoshop");
    }
    else {
      console.log("tacoshop removed");
    }
  });

  User.remove({username: 'sffbk'}, function(err) {
    if (err) {
      console.log("Unable to delete sffbk");
    }
    else {
      console.log("sffbk removed");
    }
  });

  User.remove({username: 'alamedafbk'}, function(err) {
    if (err) {
      console.log("Unable to delete alamedafbk");
    }
    else {
      console.log("alamedafbk removed");
    }
  });

  User.remove({username: 'napafbk'}, function(err) {
    if (err) {
      console.log("Unable to delete napafbk");
    }
    else {
      console.log("napafbk removed");
    }
  });

  hashPassword('johnnyrockets', function(hashPassword) {
    var johnnyrockets = new User({
      username: 'johnnyrockets',
      password: hashPassword,
      type: 'rst',
      contactInfo: {
        name: 'Johnny Rockets',
        phoneNumber: '4156939120',
        email: '',
        streetName: '81 Jefferson Street',
        cityStateZip: 'San Francisco, CA 94133'
      },
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0f/Johnny_Rockets_logo.png',
      websiteUrl: 'www.johnnyrockets.com',
      additional: {
        aboutUs: "Ronn Teitelbaum, an award-winning men's fashion retailer, launched the first Johnny Rockets on June 6, 1986, on Melrose Avenue, in Los Angeles, California. He founded the concept on the belief that everyone deserves a place where they can escape from today’s complicated world and experience the uncomplicated goodness of classic Americana. The name originated by combining the timeless Johnny Appleseed story with the classic Oldsmobile Rocket 88. Together, they embody the concept of classic Americana and the promise of the future"
      },
      connections: [],
      foodData: {

        mealType : {
          'Breakfast': false,
          'Lunch': false,
          'Dinner': true,
          'Dessert': true,
        },

        foodType : {
          'Baked Goods': true,
          'Produce': false,
          'Canned Goods': true,
          'Meats': true,
          'Dairy': false,
        },

        pickupDay : {
          'Monday': false,
          'Tuesday': true,
          'Wednesday': false,
          'Thursday': true,
          'Friday': false,
          'Saturday': true,
          'Sunday': false,
        },

        pickupTime : {
          'Early Morning (6AM-9AM)': true,
          'Late Morning (9AM-12PM)': false,
          'Early Afternoon (12PM-3PM)': false,
          'Late Afternoon (3PM-6PM)': true,
          'Evening (6PM-9PM)': true,
        }

      },
    });
    johnnyrockets.save();
  });

  hashPassword('turtletower', function(hashPassword) {
    var turtletower = new User({
      username: 'turtletower',
      password: hashPassword,
      type: 'rst',
      contactInfo: {
        name: 'Turtle Tower SF',
        phoneNumber: '4159049888',
        email: '',
        streetName: '501 6th Street',
        cityStateZip: 'San Francisco, CA 94103'
      },
      websiteUrl: 'turtletowersf.com',
      imageUrl: 'https://pbs.twimg.com/profile_images/1226707242/Turtle_Logo_400x400.jpg',
      additional: {
        aboutUs: "From Turtle Tower in Hanoi ... to Turtle Tower Restaurant in San Francisco ..."
      },
      connections: [],
      foodData: {

        mealType : {
          'Breakfast': true,
          'Lunch': false,
          'Dinner': true,
          'Dessert': false,
        },

        foodType : {
          'Baked Goods': true,
          'Produce': false,
          'Canned Goods': true,
          'Meats': true,
          'Dairy': false,
        },

        pickupDay : {
          'Monday': false,
          'Tuesday': true,
          'Wednesday': false,
          'Thursday': true,
          'Friday': false,
          'Saturday': true,
          'Sunday': false,
        },

        pickupTime : {
          'Early Morning (6AM-9AM)': false,
          'Late Morning (9AM-12PM)': false,
          'Early Afternoon (12PM-3PM)': false,
          'Late Afternoon (3PM-6PM)': true,
          'Evening (6PM-9PM)': true,
        }

      },
    });
    turtletower.save();
  });

  hashPassword('chipotle', function(hashPassword) {
    var chipotle = new User({
      username: 'chipotle',
      password: hashPassword,
      type: 'rst',
      contactInfo: {
        name: 'Chipotle Mexican Grill',
        phoneNumber: '4152780461',
        email: 'chipotle@chipotle.com',
        streetName: '525 Market Street',
        cityStateZip: 'San Francisco, CA 94105'
      },
      websiteUrl: 'www.chipotle.com',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/1024px-Chipotle_Mexican_Grill_logo.svg.png',
      additional: {
        aboutUs: "When Chipotle opened its first restaurant in 1993, the idea was simple: show that food served fast didn't have to be a “fast-food” experience. Using high-quality raw ingredients, classic cooking techniques, and distinctive interior design, we brought features from the realm of fine dining to the world of quick-service restaurants."
      },
      connections: [],
      foodData: {

        mealType : {
          'Breakfast': false,
          'Lunch': false,
          'Dinner': true,
          'Dessert': false,
        },

        foodType : {
          'Baked Goods': true,
          'Produce': true,
          'Canned Goods': true,
          'Meats': true,
          'Dairy': false,
        },

        pickupDay : {
          'Monday': false,
          'Tuesday': true,
          'Wednesday': false,
          'Thursday': true,
          'Friday': false,
          'Saturday': true,
          'Sunday': false,
        },

        pickupTime : {
          'Early Morning (6AM-9AM)': false,
          'Late Morning (9AM-12PM)': true,
          'Early Afternoon (12PM-3PM)': false,
          'Late Afternoon (3PM-6PM)': true,
          'Evening (6PM-9PM)': false,
        }

      },
    });
    chipotle.save();
  });

  hashPassword('mehfil', function(hashPassword) {
    var mehfil = new User({
      username: 'mehfil',
      password: hashPassword,
      type: 'rst',
      contactInfo: {
        name: 'Mehfils Indian Cuisine',
        phoneNumber: '4158969000',
        email: 'info@mehfilindiancuisine.us',
        streetName: '28 2nd Street',
        cityStateZip: 'San Francisco, CA 94105'
      },
      websiteUrl: 'www.mehfilindiancuisine.us',
      imageUrl: 'http://mehfilindian.com/images/logo5b.jpg',
      additional: {
        aboutUs: "Mehfil Indian Restaurants offer the authentic flavors of Indian home cooking in two warmly adorned locations. Mehfil is an Indian Urdu word which means the gathering of family members, relatives, friends & colleagues sharing good moments, good food and having great fun. Mehfil is widely praised as one of one of San Francisco's top Indian dining destinations, just steps from San Franciscos' Financial District. 2011 brought another milestone for Mehfil with its' second Restaurant with Full Bar that opened in Pacific Heights."
      },
      connections: [],
      foodData: {

        mealType : {
          'Breakfast': false,
          'Lunch': false,
          'Dinner': true,
          'Dessert': true,
        },

        foodType : {
          'Baked Goods': false,
          'Produce': false,
          'Canned Goods': false,
          'Meats': true,
          'Dairy': true,
        },

        pickupDay : {
          'Monday': false,
          'Tuesday': false,
          'Wednesday': true,
          'Thursday': false,
          'Friday': false,
          'Saturday': true,
          'Sunday': false,
        },

        pickupTime : {
          'Early Morning (6AM-9AM)': false,
          'Late Morning (9AM-12PM)': false,
          'Early Afternoon (12PM-3PM)': false,
          'Late Afternoon (3PM-6PM)': false,
          'Evening (6PM-9PM)': true,
        }

      }
    });
    mehfil.save();
  });

  hashPassword('tacoshop', function(hashPassword) {
    var tacoshop = new User({
      username: 'tacoshop',
      password: hashPassword,
      type: 'rst',
      contactInfo: {
        name: 'The Taco Shop at Underdogs',
        phoneNumber: '4155668700',
        email: 'www.tacoshopsf.com',
        streetName: '1824 Irving Street',
        cityStateZip: 'San Francisco, CA 94122'
      },
      websiteUrl: 'www.tacoshopsf.com',
      imageUrl: 'https://pbs.twimg.com/profile_images/637390965792112640/c1hHnSTI_400x400.png',
      additional: {
        aboutUs: 'Our goal is to provide local, fresh and sustainable food to the best of our abilities. We care about you, our food and the future of our world.'
      },
      connections: [],
      foodData: {

        mealType : {
          'Breakfast': false,
          'Lunch': false,
          'Dinner': true,
          'Dessert': true,
        },

        foodType : {
          'Baked Goods': true,
          'Produce': false,
          'Canned Goods': false,
          'Meats': true,
          'Dairy': false,
        },

        pickupDay : {
          'Monday': false,
          'Tuesday': false,
          'Wednesday': true,
          'Thursday': false,
          'Friday': false,
          'Saturday': true,
          'Sunday': false,
        },

        pickupTime : {
          'Early Morning (6AM-9AM)': true,
          'Late Morning (9AM-12PM)': false,
          'Early Afternoon (12PM-3PM)': false,
          'Late Afternoon (3PM-6PM)': false,
          'Evening (6PM-9PM)': true,
        }

      },
    });
    tacoshop.save();
  });

  hashPassword('sffbk', function(hashPassword) {
    var sfFoodBank = new User({
      username: 'sffbk',
      password: hashPassword,
      type: 'fbk',
      contactInfo: {
        name: 'SF Marin Food Bank',
        phoneNumber: '4152821900',
        email: 'sfFoodBank@sfFoodBank.org',
        streetName: '900 Pennsylvania Avenue',
        cityStateZip: 'San Francisco, CA 94107',
        serviceArea: 'San Francisco and Marin County'
      },
      websiteUrl: 'www.sfFoodBank.org',
      imageUrl: 'https://pbs.twimg.com/profile_images/471786942959349760/ASvpF1Pv_400x400.jpeg',
      additional: {
        aboutUs: "The Food Bank is a lifeline. Every day we distribute enough food for 107,000 meals — that's more than 46 million pounds this year. It takes a comprehensive approach and a network of 450 partners to make it happen.",
        mission: "To end hunger in San Francisco and Marin."
      },
      connections: [],
      foodData: {},
    });
    sfFoodBank.save();
  });

  hashPassword('alamedafbk', function(hashPassword) {
    var alamedaCountyFoodBank = new User({
      username: 'alamedafbk',
      password: hashPassword,
      type: 'fbk',
      contactInfo: {
        name: 'Alameda County Community Food Bank',
        phoneNumber: '5106353663',
        email: 'info@accfb.org',
        streetName: '7900 Edgewater Drive',
        cityStateZip: 'Oakland, CA 94621'
      },
      websiteUrl: 'www.accfb.org',
      imageUrl: 'https://pbs.twimg.com/profile_images/378800000534210932/79383c558b9d24f7c8d6bd71623d3b7f_400x400.jpeg',
      additional: {
        aboutUs: "Alameda County Community Food Bank has been in business since 1985 ... with a vision toward a day when we can go out of business. We are the hub of a vast collection and distribution network that provides food for 240 nonprofit agencies in Alameda County. In 2014, the Food Bank distributed 25 million meals -- more than half of the food was fresh fruits and vegetables. Since moving into our permanent facility near the Oakland Airport in 2005 and leading the national food bank movement for a ban on the distribution of carbonated beverages, the Food Bank has ramped up distribution of fresh fruits and vegetables by more than 1,000%.",
        mission: "Alameda County Community Food Bank passionately pursues a hunger-free community"
      },
      connections: [],
      foodData: {},
    });
    alamedaCountyFoodBank.save();
  });

  hashPassword('napafbk', function(hashPassword) {
    var communityActionNapaValley = new User({
      username: 'napafbk',
      password: hashPassword,
      type: 'fbk',
      contactInfo: {
        name: 'Community Action Napa Valley',
        phoneNumber: '7072536100',
        email: 'canv@can-v.org',
        streetName: '2310 Laurel Street #1',
        cityStateZip: 'Napa, CA 94559'
      },
      websiteUrl: 'www.canv.org',
      imageUrl: 'https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpa1/v/t1.0-1/p160x160/529316_360664947373091_1073923377_n.jpg?oh=1e3e40a6d96b226665ad2e370df7a9bc&oe=566627C1&__gda__=1449732457_7b165c50cca1c8e92f0bcf7504e73e75',
      additional: {
        aboutUs: 'Community Action stays true to its mission by continuing provide basic needs – food and shelter – along with other programs to support people as they become self-sufficient members of our vibrant community. We believe in partnership and are founding members of the Coalition of Non-Profit Organizations. We are active with many local initiatives and work groups including the Continuum of Care; Live Healthy Napa Valley; Area Agency on Aging; the Workforce Investment Board, and more to improve the quality of life for people throughout the Napa Valley.',
        mission: "At Community Action of Napa Valley we believe that no one in our community should live in poverty. Every day we offer local people emergency assistance along with tools and skills to rebuild their lives and fully participate in this amazing community."
      },
      connections: [],
      foodData: {},
    });
    communityActionNapaValley.save();
  });
};


module.exports = createTestUsers;
