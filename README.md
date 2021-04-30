# Cards Application

## Problem statement

A bank has launched 2 new credit card products, C1 and C2. They have built a web app to check the eligibility of the person applying. The app works by the user entering and submitting their name, email and address. The server then responds with the credit cards that person is eligible for.

Before they deploy this web app to production they need to ensure the quality of it and data integrity.

## Exercise Overview

Write E2E tests for the user journey of applying for a credit card in your choice of framework preferably TestCafe

1. Entering name, email and address
2. Submitting the form with a range of different values
3. The expected response based on the names Boris, Angela and Theresa

Write API tests for TradeLedger API under server/cards/PostDeploymentTests in your choice of framework preferably Cucumber with Java RestAssured or Karate

1. Entering name, email and address
2. Submitting the form with a range of different values
3. The expected response based on the names Boris, Angela and Theresa

## How to submit the exercise

1. Clone the repo locally.
2. Complete the exercise.
3. Upload your completed project to your GitHub, and then paste a link to the repository below in the form along with any comments you have about your solution.

## How to Run

Open the project with VS Code, IntelliJ, Eclipse or any other IDE of your choice

FE

1. In terminal `cd client/cards`
2. `npm install` -- to install the app
3. `npm start` -- to run the app

BE

1. In terminal `cd server/cards`
2. `./gradle build` -- to build the app
3. `./gradle bootrun` -- to run the app

## Task

1. Using a E2E testing tool/library of your choice, write tests for all possible scenarios of the web app to ensure confidence of it's quality
2. Create a folder/file to hold all your tests
3. Add instructions to this README file for running the tests

## Considerations (only for Solution Design section)

1. The bank would like end-to-end tests to be executed each time before a deployment
2. The bank would like to test the security of their application to ensure sensitive data cannot be compromised
3. The bank would like to devise a test strategy for introducing new features to the web app



=====================================================

Steps to execute the test
