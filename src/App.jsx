import React from 'react'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import HomePage from './Pages/HomePage'
import PlotDetailsPage from './Pages/PlotDetailsPage';
import PlotDetailsRAKPage from './Pages/PlotDetailsRAKPage';
import SubmitPage from './Pages/SubmitPage';
import SuccessPage from './Pages/SuccessPage';
import ComingSoonPage from './Pages/ComingSoonPage';
import MainLayout from './Layouts/MainLayout';
import ChoosePlotPage from './Pages/ChoosePlotPage';
import AboutPage from './Pages/AboutPage';
import PrivacyPolicy from './Pages/PrivacyPolicy';

const router = createBrowserRouter (
  createRoutesFromElements(
  <Route path='/' element={<MainLayout/>}>
    <Route index element={<HomePage/>}/>
    <Route path='/plotInfo' element={<PlotDetailsPage/>}/>
    <Route path='/plotInfoRAK' element={<PlotDetailsRAKPage/>}/>
    <Route path='/choosePlot' element={<ChoosePlotPage/>}/>
    <Route path='/about' element={<AboutPage/>}/>
    <Route path='/submit' element={<SubmitPage/>}/>
    <Route path='/success' element={<SuccessPage/>}/>
    <Route path='/privacy' element={<PrivacyPolicy/>}/>
    <Route path='*' element={<ComingSoonPage/>}/>
  </Route>
  )
);

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
