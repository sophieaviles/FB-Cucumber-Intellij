$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Myapplication.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: saviles@serenova.com"
    }
  ],
  "line": 2,
  "name": "Facebook post to a friend feature",
  "description": "",
  "id": "facebook-post-to-a-friend-feature",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 7,
      "value": "#single user post case"
    },
    {
      "line": 8,
      "value": "#@case1"
    },
    {
      "line": 9,
      "value": "#Scenario: Single login with valid credentials"
    },
    {
      "line": 10,
      "value": "#When I enter valid username and valid password"
    },
    {
      "line": 11,
      "value": "#| Username | sofy.aviles@gmail.com |"
    },
    {
      "line": 12,
      "value": "#| Password | Toffys963.            |"
    },
    {
      "line": 13,
      "value": "#Then User should be able to login sucessfully"
    },
    {
      "line": 14,
      "value": "#And User should be able to perform search"
    },
    {
      "line": 15,
      "value": "#Then User should be able to select profile"
    },
    {
      "line": 16,
      "value": "#And User should be able to post on profile wall"
    },
    {
      "line": 18,
      "value": "#multiple user post case"
    }
  ],
  "line": 21,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid \u003cusername\u003e and valid \u003cpassword\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User type a \u003cname\u003e to perform a search",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "name"
      ],
      "line": 31,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sofy.aviles@gmail.com",
        "Toffys963.",
        "Randhal Ramirez"
      ],
      "line": 32,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sofy.aviles@hotmail.com",
        "sofy963.",
        "Sophie Aviles"
      ],
      "line": 33,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have a valid set of data and access to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmoteTest.i_have_a_valid_set_of_data_and_access_to_registration_page()"
});
formatter.result({
  "duration": 5437506848,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid sofy.aviles@gmail.com and valid Toffys963.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User type a Randhal Ramirez to perform a search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sofy.aviles@gmail.com",
      "offset": 14
    },
    {
      "val": "Toffys963.",
      "offset": 46
    }
  ],
  "location": "SmoteTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 481956958,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToLoginSucessfully()"
});
formatter.result({
  "duration": 5400660958,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Randhal Ramirez",
      "offset": 12
    }
  ],
  "location": "SmoteTest.userTypeANameToPerformASearch(String)"
});
formatter.result({
  "duration": 4000067925,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToSelectProfile()"
});
formatter.result({
  "duration": 4466176444,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToPostOnProfileWall()"
});
formatter.result({
  "duration": 6188747679,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I have a valid set of data and access to registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "SmoteTest.i_have_a_valid_set_of_data_and_access_to_registration_page()"
});
formatter.result({
  "duration": 4710570644,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Single login with valid credentials",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 20,
      "name": "@case2"
    }
  ]
});
formatter.step({
  "line": 22,
  "name": "I enter valid sofy.aviles@hotmail.com and valid sofy963.",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "User should be able to login sucessfully",
  "keyword": "Then "
});
formatter.step({
  "line": 24,
  "name": "User type a Sophie Aviles to perform a search",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User should be able to select profile",
  "keyword": "Then "
});
formatter.step({
  "line": 26,
  "name": "User should be able to post on profile wall",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "sofy.aviles@hotmail.com",
      "offset": 14
    },
    {
      "val": "sofy963.",
      "offset": 48
    }
  ],
  "location": "SmoteTest.I_enter_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "duration": 533205060,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToLoginSucessfully()"
});
formatter.result({
  "duration": 5266425207,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sophie Aviles",
      "offset": 12
    }
  ],
  "location": "SmoteTest.userTypeANameToPerformASearch(String)"
});
formatter.result({
  "duration": 3898476255,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToSelectProfile()"
});
