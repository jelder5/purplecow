# purplecow
Purple Cow Project Counter

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

# changing ports
In the root directory package-json file, you can chnge the port by adding this line:
  "proxy":"http://localhost:3001/"

# Future features
I could not find a "currentCount" function in countapi so I would like to initial the app by hitting the counter and then passing in the subtract function if available. Otherwise, I would store the value in redis or a file so users can see the current value when first loading the page.

