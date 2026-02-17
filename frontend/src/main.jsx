// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// <<<<<<< HEAD
// import { BrowserRouter } from 'react-router-dom'
// import { ThemeProvider } from 'next-themes'
// =======
// >>>>>>> e2c306382e3a9130ee83e6f7d8173456045fd3d0
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <<<<<<< HEAD
//     <BrowserRouter>
//       <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
//         <App />
//       </ThemeProvider>
//     </BrowserRouter>
// =======
//     <App />
// >>>>>>> e2c306382e3a9130ee83e6f7d8173456045fd3d0
//   </StrictMode>,
// )



import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'next-themes'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
