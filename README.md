![Logo](https://res.cloudinary.com/dhnkuonev/image/upload/v1690817781/Frame_1_r2cwtq.png)

# Travel Tales

"[Travel Tales](https://traveltaless.vercel.app)" website, offering an engaging user experience in form of travel stories. At its core, the component renders visually appealing cards that showcase captivating travel posts. Each post includes a title, image, traveler's name, creation date, and tags. Backend part of the project can be found [here](https://github.com/Lucif3r-in/travel-tales-backend)

## Screenshots

![App Screenshot](https://res.cloudinary.com/dhnkuonev/image/upload/v1690807256/Screenshot_2023-07-31_180915_umsw5s.png)

## Tools Used

- **@emotion/react** (^11.11.1): CSS-in-JS library for styling React components with Emotion.

- **@material-ui/core** (^4.9.10): Material-UI is a popular React UI framework for building responsive and beautiful web applications.

- **axios** (^0.19.2): Axios is a popular HTTP client for making API requests from the browser or Node.js.

- **react** (^18.2.0): React is a JavaScript library for building user interfaces.

- **react-dom** (^18.2.0): ReactDOM is a package that provides DOM-specific methods for React.

- **react-redux** (^7.1.3): React-Redux is a library that allows you to connect your Redux store with your React components.

- **react-router-dom** (^5.2.0): React Router is a popular routing library for React applications.

- **redux** (^4.0.5): Redux is a predictable state container for managing the state of your React application.

- **redux-thunk** (^2.3.0): Redux Thunk is a middleware that allows you to write async logic in Redux actions.


## Run Locally

Clone the project

```bash
  git clone https://github.com/Lucif3r-in/travel-tales-frontend
```

Go to the project directory

```bash
  cd travel-tales-frontend
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```

## File Structure

<details>
  <summary>Click to view file structure</summary>
  <pre>
    <code>
📦src
 ┣ 📂actions
 ┃ ┗ 📜actionTypes.js
 ┣ 📂api
 ┃ ┗ 📜index.js
 ┣ 📂components
 ┃ ┣ 📂Authentication
 ┃ ┃ ┣ 📜Auth.jsx
 ┃ ┃ ┣ 📜icon.js
 ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂Form
 ┃ ┃ ┣ 📜Form.js
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂Hero
 ┃ ┃ ┣ 📜Hero.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂Navbar
 ┃ ┃ ┣ 📜Navbar.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂Paging
 ┃ ┃ ┣ 📜Paging.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┣ 📂PostDetails
 ┃ ┃ ┣ 📜CommentSection.jsx
 ┃ ┃ ┣ 📜PostDetails.jsx
 ┃ ┃ ┗ 📜styles.js
 ┃ ┗ 📂Posts
 ┃ ┃ ┣ 📂Post
 ┃ ┃ ┃ ┣ 📜Post.js
 ┃ ┃ ┃ ┗ 📜styles.js
 ┃ ┃ ┣ 📜Posts.js
 ┃ ┃ ┗ 📜styles.js
 ┣ 📂middleware
 ┃ ┣ 📜auth.js
 ┃ ┗ 📜posts.js
 ┣ 📂reducers
 ┃ ┣ 📜auth.js
 ┃ ┣ 📜index.js
 ┃ ┗ 📜posts.js
 ┣ 📜App.css
 ┣ 📜App.js
 ┣ 📜App.test.js
 ┣ 📜index.css
 ┣ 📜index.js
 ┣ 📜logo.svg
 ┣ 📜reportWebVitals.js
 ┣ 📜setupTests.js
 ┗ 📜styles.js
    </code>
  </pre>
</details>

## Authors

- [@Lucif3r-in](https://github.com/Lucif3r-in)

## Contributing

Contributions are always welcome!

NOTE 1: Please abide by the [Contributing Guidelines](https://github.com/Lucif3r-in/travel-tales-frontend/blob/main/CONTRIBUTING.md).

NOTE 2: Please abide by the [Code of Conduct](https://github.com/Lucif3r-in/travel-tales-frontend/blob/main/CODE_OF_CONDUCT.md).

NOTE 3: We follow the following [coventional commit types](https://github.com/pvdlg/conventional-commit-types)
