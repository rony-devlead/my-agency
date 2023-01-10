import './App.css';
import About from './Component/About/About';
import Home from './Component/Home/Home';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Services from './Component/Services/Services';
import Portfolio from './Component/Portfolio/Portfolio';
import Contact from './Component/Contact/Contact';
import Career from './Component/Career/Career';
import Main from './layout/Main';
import OurStory from './Component/OurStory/OurStory';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "home",
          element: <Home></Home>,
        },
        {
          path:"about",
          element: <About></About>,
        },
        {
          path:"services",
          element: <Services></Services>,
        },
        {
          path:"career",
          element: <Career></Career>,
        },
        {
          path:"portfolio",
          element: <Portfolio></Portfolio>,
        },
        {
          path:"contact",
          element: <Contact></Contact>,
        },
        {
          path:"our-story",
          element: <OurStory></OurStory>,
        }


      ]
    }
    
    

  ]);
  return (
  <div>
    <RouterProvider router={router}></RouterProvider>
  </div>
  );
}

export default App;
