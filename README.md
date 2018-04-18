# nanoTwitter - Caching Service
Team Japan and Kevin

## About
Caching Service for NanoTwitter proejct. This service will communicate with our user and tweet service defined below:

**User Service**
* Github: https://github.com/mgkbsh/ntUserService
* Heroku: http://ntusers-tjak.herokuapp.com/
* Port: 1234

**Tweet Service**
* Github: https://github.com/mgkbsh/ntTweetService
* Heroku: http://nttweets-tjak.herokuapp.com/
* Port: 4567

The User and Tweet Service will communicate with the caching service via http with the following routes:

**Routes**
* POST '/:key/:data' : will cache a key, value pair with the key, data params passed to the url
* POST '/delete/:key': will remove the key, value pair cached in redis asocaited with the key
* GET '/:key': gets data cached with the key param if avaliable
