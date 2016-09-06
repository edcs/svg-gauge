# SVG Gauge

[![Codeship Status for edcs/svg-gauge](https://codeship.com/projects/811bdfd0-5565-0134-8fbc-4e423e130982/status?branch=master)](https://codeship.com/projects/172056) [![Coverage Status](https://coveralls.io/repos/github/edcs/svg-gauge/badge.svg?branch=master)](https://coveralls.io/github/edcs/svg-gauge?branch=master)

A simple gauge built using React and SVG. A demo of this project is available here:
 
https://edcs.github.io/svg-gauge

## Installation

Node and NPM are required to run this project locally. Clone the latest version of this repo (or download the .zip):

```
# git clone https://github.com/edcs/svg-gauge.git
```

Move to the directory you've installed this repo in and install dependancies:

```
# npm install
```

Once all dependancies have installed, you can start the development server and view the project in your browser:

```
# npm run dev
```

This will start a WebPack development server and display the URL needed to access the project in your browser. 

## Testing

The test suite is built using Jest and Enzyme. To run the tests, use the following command:

```
# npm run dev
```

## Building

If you'd like to build the static JS and HTML for this project you may run the following command:

```
# npm run build
```

This will create the files needed to run the project in the directory named `build`.

## Todo

The following things in this project are incomplete:

 * *Automatic data re-refresh* Currently you need to reload the whole page to get a fresh set of data from the server,
   this could be updated so that data is automatically refreshed every few seconds/minutes.
 * *Data via Websockets* Currently the data is loaded via HTTP, a websocket server could be used to provide live 
   data updating.
 * *Edge Cases With Data* When certain values are sent, the needle can go off the dial, more extensive testing is
   required to prevent this from happening.
 * *More extensive testing* This project uses Redux Sagas which aren't fully tested yet, tests should be written to
   make sure that this part of the project works as expected.
