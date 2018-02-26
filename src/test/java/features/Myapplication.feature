#Author: saviles@serenova.com
Feature: Facebook post to a friend feature

  Background:
    Given I have a valid set of data and access to registration page

  #single user post case
  #@case1
  #Scenario: Single login with valid credentials
    #When I enter valid username and valid password
      #| Username | sofy.aviles@gmail.com |
      #| Password | Toffys963.            |
    #Then User should be able to login sucessfully
    #And User should be able to perform search
    #Then User should be able to select profile
    #And User should be able to post on profile wall

  #multiple user post case

  @case2
  Scenario Outline: Single login with valid credentials
    When I enter valid <username> and valid <password>
    Then User should be able to login sucessfully
    And User should be able to perform search
    Then User should be able to select profile
    And User should be able to post on profile wall

    Examples:

      | username 					| password			|
      | sofy.aviles@gmail.com 		| Toffys963.        |
      |	sofy.aviles@hotmail.com 	| sofy963.			|
