import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ToDoListComponent from './layout/general/todo-list/todo-list.component';
import userLoader from './router-loaders/user-loader';
import LoginComponent from './layout/login-page/login.component';
import MemeGeneratorComponent from './layout/meme-generator/meme-generator.component';
import PostFormComponent from './layout/posts-page/post-form/post-form.component';
import PostsPageContainer from './layout/posts-page/posts-page.container';
import VkPhotoContainer from './layout/vk-photo/vk-photo.container';

let routes: RouteObject[] = [
  {
    path: "/",
    element: <App/>,
    loader: userLoader,
    children: [
      {
        path: "todo",
        element: <ToDoListComponent />
      },
      {
        path: "meme",
        element: <MemeGeneratorComponent />
      },
      {
        path: "vk-photo",
        element: <VkPhotoContainer />
      },
      {
        path: "posts",
        children: [
          { index: true, element: <PostsPageContainer /> },
          { path: ":id", element: <PostFormComponent /> },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <LoginComponent />
  },
  ]; 

const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
      <Provider store={store} >
        <RouterProvider router={router} />
      </Provider>
  </React.StrictMode>
);
