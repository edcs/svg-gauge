# SVG Gauge

[![Codeship Status for edcs/svg-gauge](https://codeship.com/projects/811bdfd0-5565-0134-8fbc-4e423e130982/status?branch=master)](https://codeship.com/projects/172056)

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
# nom run build
```

This will create the files needed to run the project in the directory named `build`.
