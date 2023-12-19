import './App.scss';
import ToDoListComponent from './layout/general/todo-list/todo-list.component';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LayoutComponent from './layout/layout.component';
import LoginComponent from './layout/login-page/login.component';
import MemeGeneratorComponent from './layout/meme-generator/meme-generator.component';
import { useState } from 'react';
import { UserInfo } from './core-module/models/user-models';
import VkPhotoContainer from './layout/vk-photo/vk-photo.container';
import PostsPageContainer from './layout/posts-page/posts-page.container';

function App() {
  const info = localStorage.getItem("user");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!info);
  const [userInfo, setUserInfo] = useState<UserInfo | null>( info ? JSON.parse(info) : null);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LayoutComponent user={{ isLoggedIn, setIsLoggedIn, userInfo: userInfo }} />} >
          <Route path='todo' element={<ToDoListComponent />} />
          <Route path='meme' element={<MemeGeneratorComponent />} />
          <Route path='vk-photo' element={<VkPhotoContainer />} />
          <Route path='posts' element={<PostsPageContainer />} />
        </Route>
        <Route path='login' element={<LoginComponent setIsLoggedIn={setIsLoggedIn} setUserInfo={setUserInfo}/>} />
      </Routes>
      {!isLoggedIn && (
        <Navigate to="login" />
      )}
    </BrowserRouter>
  );
}

export default App;
