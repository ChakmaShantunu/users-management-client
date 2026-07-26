# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Users Management Client

A simple React application that demonstrates CRUD-related frontend operations by connecting to an Express.js backend API. This project focuses on fetching data, displaying it, and creating new resources using React and the Fetch API.

## 🚀 Features

- Fetch users from the backend API
- Display users in the UI
- Add new users using a form
- Instantly update the UI after creating a user (without page reload)
- Reset the form after successful submission
- Fetch restaurants from the backend API
- Add new restaurants
- Fetch animals from the backend API
- Add new animals
- Use React's `use()` hook to consume promise-based data

## 🛠️ Technologies Used

- React
- Vite
- JavaScript (ES6+)
- Fetch API
- React `use()` Hook
- Express.js (Backend API)
- Node.js

## 📂 Project Structure

```text
src/
├── components/
│   ├── Users.jsx
│   ├── RestaurantCard.jsx
│   └── Animals.jsx
├── App.jsx
└── main.jsx
```

## ⚙️ Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Navigate to the project directory

```bash
cd users-management-client
```

3. Install dependencies

```bash
npm install
```

4. Start the development server

```bash
npm run dev
```

## 🔗 Backend

Make sure the backend server is running before starting the client.

Example:

```text
http://localhost:3000
```

Available API endpoints:

- `GET /users`
- `POST /users`
- `GET /restaurants`
- `POST /restaurants`
- `GET /animals`
- `POST /animals`

## 📌 Current Functionalities

### Users

- Load users from the server
- Create new users
- Update UI immediately after adding a user
- Automatically clear the form after submission

### Restaurants

- Load restaurants from the server
- Create new restaurants

### Animals

- Load animals from the server
- Create new animals
- Update UI immediately after adding an animal
- Automatically clear the form after submission

## 📸 Future Improvements

- Update existing data (PUT/PATCH)
- Delete records
- Loading spinner
- Error handling
- Form validation
- Search and filter
- Responsive UI
- Toast notifications

## 👨‍💻 Author

**Shantunu Chakma**
