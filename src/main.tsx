import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './styles/index.scss'

const appContainer = document.getElementById('root') as HTMLDivElement
if (!appContainer) {
  throw new Error("Не вдалося знайти кореневий елемент з id 'root'!");
}
createRoot(appContainer).render(
  <StrictMode>
    <App />
  </StrictMode>,
)