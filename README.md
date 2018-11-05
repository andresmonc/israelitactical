# israelitactical
Business website for Israeli Tactical

#Deploying
When there are any changes to the master branch, Heroku will redeploy using the latest master branch. Using scripts in the package.json, Heroku will NPM install both the express server and the Angular UI. It will also run NG Build and build out the latest dist.
