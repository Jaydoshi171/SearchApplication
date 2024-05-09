import app from './app/app.js';  //imported app from app.js

const port = 8080;  //initialized a port to be used

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);   //main app.js file listens to the server.
});