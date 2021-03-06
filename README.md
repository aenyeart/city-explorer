# City Explorer

**Author**: Andrew Enyeart
**Version**: 1.0.0 (increment the patch/fix version number if you make more commits past your first submission)

## Overview
[City Explorer](https://aenyeart-city-explorer.netlify.app/) is a React app drawing on the LocationIQ API and City Explorer API to provide the user with info about any given city they are considering visiting.

## Getting Started
To run this app on your local machine, you will need to obtain your own API keys for the APIs below, and add them to the .sample.env file in the root folder, then change the filename from ".sample.env" to ".env". (Be sure to add ".env" to your .gitignore file.)
- [Location IQ API](https://locationiq.com/register)
- [City Explorer API](https://ae-cityexplorerserver.herokuapp.com)


## Architecture
### Data Flow Diagrams
![Location API Data Flow](./public/img/cityexp-6-location.jpg?raw=true "Location API Data Flow")
![Express Server Data Flow](./public/img/cityexp-7-server.jpg?raw=true "Express Server Data Flow")
![Weather & Movies APIs Data Flow](./public/img/cityexp-8-api.jpg?raw=true "Weather & Movies APIs Data Flow")
![Server Modules Data Flow](./public/img/cityexp-9-modules.jpg?raw=true "Server Modules Data Flow")
![Cache Data Flow](./public/img/cityexp-10-cache.jpg?raw=true "Cache Data Flow")

## Change Log
<!-- Use this area to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an example:

01-01-2001 4:59pm - Application now has a fully-functional express server, with a GET route for the location resource. -->

12-08-2021 10:30pm - Application now displays mock weather data
12-09-2021 9:00pm - Successfully gets movie data from city-explorer-api
12-09-2021 10:20pm - Renders movie data from city-explorer-api
12-12-2021 7:00pm - city-explorer-api server deployed on Heroku, application on Netlify


## Credit and Collaborations

- Data flowchart created in collaboration with [Jacob Choi](https://github.com/Choij12)

Name of feature: Set up React repo & API keys
Estimate of time needed to complete: 1h
Start time: 3:00p
Finish time: 5:00p
Actual time needed to complete: 2h

Name of feature: Locations user story
Estimate of time needed to complete: 1h15m
Start time: 5:05p
Finish time: 11:30p
Actual time needed to complete: 6h30m

Name of feature: Map user story
Estimate of time needed to complete: 20m
Start time: 11:35p
Finish time: 12:25a
Actual time needed to complete: 50m

Name of feature: Errors user story
Estimate of time needed to complete: 30m
Start time: 12:30a
Finish time: 1:15a
Actual time needed to complete: 45m