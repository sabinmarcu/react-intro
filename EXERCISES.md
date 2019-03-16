# Exercises Sheet

There will be detailed hints for each step, but no hand-holding for all of the below exercises.

## 0. Setup

Clone this project, and attempt to run it.
Helpful extensions for VSCode: 
* eslint (dbaeumer.vscode-eslint)
* Babel JavaScript (mgmcdermott.vscode-language-babel)

Helpful extensions for Chrome:
* [React DevTools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)

```
$ git clone https://github.com/sabinmarcu/react-intro
$ cd react-intro
$ yarn start
```

## 1. Create a Movie Component ([diff](https://github.com/sabinmarcu/react-intro/commit/900697e6755a9b2b52b768354f11825fecefb946)) (++)

Create a new component in the `components` folder, that will render a card. 
Reference for `react-toolbox` can be found in the top bar in the app.

For content, use the following information: 
```
{
  "title": "Star Wars: The Last Jedi",
  "year": 2017,
  "genre": "Action, Adventure, Fantasy",
  "plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
  "poster": "https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg",
},
```

The subtitle of the card should be of the following format: `genre (year)`.

For styling, use the following (`style.module.css`): 
```
.card {
  max-width: 300px;
  margin: 20px;
} 
```

## 2. Extract data outside the component ([diff](https://github.com/sabinmarcu/react-intro/commit/fa54bee734516f0af603046f4b1d9c5583bc1bd3)) (+)

Here, you will have to use the same data provided above, but extract it outside the component,
keeping its initial shape (JSON). Recommended path is to save the data somewhere on the Home page,
and pass it to the Movie component via props.

### 3. Render a list of Movies ([diff](https://github.com/sabinmarcu/react-intro/commit/470638bd31fda5d792c0dc4642b2b79bfd82bd4a)) (+)

Here, you will have to render a full list of movies, instead of just one. 
For data, use the following: 

```
{
  "movies": [
    {
      "id": 1,
      "title": "Star Wars: The Last Jedi",
      "year": 2017,
      "genre": "Action, Adventure, Fantasy",
      "plot": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/51ih4cPagFL.jpg",
      "comment": ""
    },
    {
      "id": 2,
      "title": "Black Swan",
      "year": 2010,
      "genre": "Drama, Thriller",
      "plot": "A committed dancer wins the lead role in a production of Tchaikovskys \"Swan Lake\" only to find herself struggling to maintain her sanity.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/615yWgAir2L._SY500_.jpg",
      "comment": ""
    },
    {
      "id": 3,
      "title": "Fight Club",
      "year": 1999,
      "genre": "Drama",
      "plot": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/51iOANjtCQL.jpg",
      "comment": ""
    },
    {
      "id": 4,
      "title": "The Godfather: Part II",
      "year": 1974,
      "genre": "Crime, Drama",
      "plot": "The early life and career of Vito Corleone in 1920s New York City is portrayed, while his son, Michael, expands and tightens his grip on the family crime syndicate.",
      "poster": "https://images-na.ssl-images-amazon.com/images/I/41V2AB34KCL.jpg",
      "comment": ""
    }
  ]
}
```

For styling things properly, use the following for `src/routes/Home/style.module.css`: 

```
.wrapper {
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
}
.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  justify-content: space-evenly;
}
```

## 4. Introduce comments to each Movie Component ([diff](https://github.com/sabinmarcu/react-intro/commit/bca2513d417c52bc76ccc5884c0dc2f2b2cd2e64)) (+++)

### Prerequisites

Before doing anything else, please add the following in `package.json` under `reactToolbox.include`: 
```
  "include": [
    "LINK",
    "MENU",
    "NAVIGATION",
    "LAYOUT",
    "CARD",
    "INPUT" // Add this
  ],
```
And afterwards, run `yarn toolbox` to update the `react-toolbox` theme. 

### Actual Exercise
In this exercise, you will have to transform the `Movie` component  
from a **dumb component** into a **stateful component**.

At the same time, you will also have to implement editing functionality, 
as well as a separate interface for viewing, and editing the comment.

To do so, you will need to use the `React.Component` class as parent.
```
import React, { Component } from 'react`
```

From there, you will need to save the `comment` into state, as well as the current `editing` state.
It is recommended to use two functions to render each editing state, individually, and to have another
property in state that will be used for UI interaction (let's call it `editComment`), that will then be saved
properly in state vor the viewing state.

For styling, use the following in `src/components/MovieComponent/style.module.css`: 
```
.comment { 
  position: relative;
  padding: 20px 10px 10px 20px;
  background: #eee;
}
.comment::before {
  position: absolute;
  left: 0;
  top: 0;
  content: "\"";
  opacity: 0.2;
  font-size: 30px;
  font-style: oblique;
}
```

## 5. Refactor the comment functionality into another component ([diff](https://github.com/sabinmarcu/react-intro/commit/84c60d6549815d3a0c145e1d80efd857d4ed9ed3)) (+)

In this exercise, you will have to extract the functionality you've implemented for
editing and displaying the comment, and put it in another component, which will receive
the `comment`, as well as a handler for changes (`onChange`) from its parent.

Hint: Rendering this component from its parent should look similar to this: 
```
  <CommentBox onChange={value => this.setState({ comment: value })} comment={this.state.value} />
```

## 6. Implement basic server communication ([diff](https://github.com/sabinmarcu/react-intro/commit/41b890ee2cfd10125b3d7acebc2435e59a3e9843)) (++)

In this exercise, we will be consuming a simple REST server, which we'll also be setting up.

### Prerequisites

Setting up the server will be simple. 
First step is to move the data JSON supplied earlier to the root of the project.

Second step is installing `json-server` in the current project: 
```
$ yarn add json-server
$ npm install --save json-server
```
Third step is to run the `json-server`: 
```
$ json-server -p 8000 ./data.json
```
The previous command will launch a fully-supported REST server accepting all commands on port 8000.

You can test this out by using Postman, or similar tools.

### React Implementation

Try using the [`fetch`](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) API to grab the 
data currently residing on the server. If you're running the server on port **8000**, then the URL for grabbing movies should be: 
`http://localhost:8000/movies`.

Updating the comment on this step will require making a `PUT` request to `http://localhost:8000/movies/N` for 
movie of id `N`. The body of this request should be the JSON stringified version of an object containing your comment.

NOTE:
> You will have to keep the server open in one CMD / Terminal window / tab while having the CRA in another. 

NOTE: 
> The `fetch` API integration with `json-server` has one quirk. 
> If you find yourself creating a successful request with no effect, 
> consider setting the **headers** property to `fetch` when making the call.
> Specifically, take a look at the `Accept` and `Content-Type` headers.

## 7. Implementing Routing and a new screen for creating / editing movies ([diff](https://github.com/sabinmarcu/react-intro/commit/5959750601dbbe7ad39b4822420277eda00f098e)) (++++)

You will be on your own for creating the new screen, this time. 
Full functionality for creating a new movie is expected.

Creating a new post is done by submitting a `POST` request with the JSON stringified body to
`http://localhost:8000/movies` (provided your server is running at port 8000).

Before attempting that, however, we need to implement routing, and making sure that we can 
navigate to the new screen.

First step is to install `react-router` and `react-router-dom`. 
```
$ yarn add react-router react-router-dom
$ npm install --save react-router react-router-dom
```

Afterwards, it is recommended to refactor most of the interface from `src/routes/Home`  to `src/App` (such as the Navigation and AppBar).
This will make sure that all screens will inherit that section of the layout. 

The second step would be to implement routing. 
React Router works by rendering a Router as the parent of sorts to the application. 
This ensures that any child routes will have full access to the Router, and, by extension, be functional.

A simple routing example would look like this: 
```
import { BrowserRouter as Router, Route } from 'react-router';

...

<Router>
  <Route exact path="/" component={HomeComponent} />
  <Route exact path="/list" component={ListComponent} />
</Router>
```

NOTE:
> This is just an example. You will need to adapt it to your requirements

### Additional Information

NOTE: 
> At some point, you may want to navigate to another page (such as after a successful post to the API).
> In this case, any children of routes receive a `history` property with a `push` method that you can use to 
> move to another valid route within the application.

TIP: 
> The `react-toolbox` inputs support a `error` property to display errors, if they exist.

NOTE: 
> The `fetch` API integration with `json-server` has one quirk. 
> If you find yourself creating a successful request with no effect, 
> consider setting the **headers** property to `fetch` when making the call.
> Specifically, take a look at the `Accept` and `Content-Type` headers.

At the end of this exercise, you are expected to have implemented a fully functional *new movie* screen,
that is able to collect data and make a `POST` request to the server to create a new movie.

## 8. Implementing edit functionality for Movies ([diff](https://github.com/sabinmarcu/react-intro/tree/ex_8)) (+++)

In this step, you will be entirely on your own, besides a few tips.
You are expected to modify the form made at step #7 to accept creating, as well as editing
movies this time.

TIP: 
> Creating a new post requires a `POST` to `/movies`. 
> Updating movie N would require a `PUT` request to `/movies/N`

