# React SDK Best practices

### Preloading Skyflow Elements
 Pre-load the iFrame in the background when the page is initially rendered. Instead of loading the iFrame upon the user's interaction, render it hidden and only display it as per the requirement. This ensures that the content is already loaded when the user needs to interact with it, significantly reducing perceived latency. This ensures that the iFrame is fully ready when the user interacts with it, leading to a smooth user experience.

### Steps to run the sample
install the dependencies
```
$ npm install
```
run the sample 
```
$ npm start
```

#### For more samples, visit [skyflow-react-js](https://github.com/skyflowapi/skyflow-react-js)