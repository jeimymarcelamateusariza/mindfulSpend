import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MindfulSpend } from './view/mindfulSpend.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MindfulSpend />
  </StrictMode>,
)
