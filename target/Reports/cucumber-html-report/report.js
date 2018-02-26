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
  "name": "User should be able to perform search",
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
  "line": 28,
  "name": "",
  "description": "",
  "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 30,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;1"
    },
    {
      "cells": [
        "sofy.aviles@gmail.com",
        "Toffys963."
      ],
      "line": 31,
      "id": "facebook-post-to-a-friend-feature;single-login-with-valid-credentials;;2"
    },
    {
      "cells": [
        "sofy.aviles@hotmail.com",
        "sofy963."
      ],
      "line": 32,
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
  "duration": 5567096473,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
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
  "name": "User should be able to perform search",
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
  "duration": 491344483,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToLoginSucessfully()"
});
formatter.result({
  "duration": 6212567055,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToPerformSearch()"
});
formatter.result({
  "duration": 4076564703,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToSelectProfile()"
});
formatter.result({
  "duration": 3540439063,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToPostOnProfileWall()"
});
formatter.result({
  "duration": 6168301992,
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
  "duration": 4614871120,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
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
  "name": "User should be able to perform search",
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
  "duration": 479924169,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToLoginSucessfully()"
});
formatter.result({
  "duration": 4990469305,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToPerformSearch()"
});
formatter.result({
  "duration": 3937483531,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToSelectProfile()"
});
formatter.result({
  "duration": 3534361291,
  "status": "passed"
});
formatter.match({
  "location": "SmoteTest.userShouldBeAbleToPostOnProfileWall()"
});
formatter.result({
  "duration": 30061796257,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[contains(@class,\u0027_1mf _1mj\u0027)]\"}\n  (Session info: chrome\u003d64.0.3282.186)\n  (Driver info: chromedriver\u003d2.33.506120 (e3e53437346286c0bc2d2dc9aa4915ba81d9023f),platform\u003dWindows NT 10.0.16299 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.9.1\u0027, revision: \u002763f7b50\u0027, time: \u00272018-02-07T22:25:02.294Z\u0027\nSystem info: host: \u0027SALSERC35\u0027, ip: \u0027192.168.56.1\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptSslCerts: true, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.33.506120 (e3e53437346286..., userDataDir: C:\\Users\\SOFIA~1.AVI\\AppDat...}, cssSelectorsEnabled: true, databaseEnabled: false, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 64.0.3282.186, webStorageEnabled: true}\nSession ID: 05fd6883aa21cdb283b2a8d6db2051d2\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(@class,\u0027_1mf _1mj\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:160)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:601)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:371)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:473)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:361)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:363)\r\n\tat Steps.SmoteTest.userShouldBeAbleToPostOnProfileWall(SmoteTest.java:103)\r\n\tat ✽.And User should be able to post on profile wall(Myapplication.feature:26)\r\n",
  "status": "failed"
});
});