import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider/AuthProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>

  </React.StrictMode>
);
// path: '/',
//         element: <Main></Main>,
//         children: [

//         ]

// {
//   path: '/',
//   element: <Home></Home>
// },
// {
//   path: '/course',
//   element: <Course></Course>,
//   loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)
// },
// {
//   path: '/blog',
//   element: <Blog></Blog>
// },
// {
//   path: '/faq',
//   element: <FAQ></FAQ>
// },
// {
//   path: '/login',
//   element: <Login></Login>
// },
// {
//   path: '/profile',
//   element: <Profile></Profile>
// } 
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
