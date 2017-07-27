# Game-of-Thrones-Team

# NOTE:
## To show the web correctly you must use this extension `Extension Allow-Control-Allow-Origin`
## User Stories

We are developing a web app for a Game of Thrones series with the following requirements:

- We want to be able to search for a actors name in the series and receive a list of the image for the actor, actual name and photo.

- We want to see the actual name of actor from the another API.

- Finally after finding out the actor, show me the really actor name with biography from his life.

## The Process

1. We sketched out the design of the site and decided exactly what we wanted it to do.

2. Together we worked on the architecture of the code.

## Attempting to use the Game of Thrones API

We used the [Game of Thrones API](https://anapioficeandfire.com/api/characters) by first identifying the endpoint which is (<https://anapioficeandfire.com/api/characters/583>)

We encountered some problems that search by ID! not by actor name and this is not practical method. It's complex to explain it to user. so we search to another api, that search by actor name. It's `Game of Thrones API` .

## Using Game of Thrones API

We request an actor name. The API returns name,gender,culture, house,an array of books and title.

[Base URL](https://api.got.show/doc/)

## Using The Movie DB API
We request an actor name. And get the actual actor name.
[Base URL](https://www.themoviedb.org/documentation/api)

## Using MediaWiki (Wikipedia) api

Get the actual name from the Movie DB api, and show the biography for the actor.

[Base URL](https://www.mediawiki.org/wiki/API:Search)

<<<<<<< HEAD

### To visit our website click [here](https://facg2.github.io/Game-of-Thrones-Team/)

If you need to know the actor's name, you can visit this [website](http://www.hbo.com/game-of-thrones/cast-and-crew/index.html)

Guess The Team :)
=======
### [Open the website](https://facg2.github.io/Game-of-Thrones-Team/)

Guessing The Team
>>>>>>> f6aeaf118c96ea1283673f2ee593d90f2814cfef
