# Simple Static Express API

Simple static API, based on JSON files stored on the server.

## Installation

Use the package manager [npm](https://npmjs.com/) to install the application by running the following command :

```bash
npm install
```

You must manually create a **.env** file at the root of the project folder.  Add the following config(s) to the file :

```bash
PORT=3000
```

Run the following command to start the server in development.  

```bash
npm run dev
```

The application will run [nodemon](https://www.npmjs.com/package/nodemon) in development.

Then open a browser window or [postman](https://www.postman.com/) and navigate to [http://localhost:3000](http://localhost:3000/)

## Usage

Each JSON file dropped in the `./src/json` folder will be automatically served by the server under `/api/`.

So `./src/json/avengers.json` will be served at `/api/avengers`.

If the file doesn't exist, an error message will be returned to the client.


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)