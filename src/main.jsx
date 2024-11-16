import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from "react-router-dom";
import Routes from './routes/Routes';
import Provider from './provider/Provider';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <RouterProvider router={Routes} />
    </Provider>
  </StrictMode>,
)
