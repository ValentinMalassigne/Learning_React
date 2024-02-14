import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

/* Appelé depuis index.html */
ReactDOM.createRoot(document.getElementById('root')).render(
  /* Le composant suivant est utile pour le debug
    Il fait rendre 2 fois le DOM, donc c'est normal d'avoir un double rendu quand il est là
  */
  <React.StrictMode>
    <App />
    {/* On pourrait importer le composante Title ici si on voulait
    Par exemple si le titre était exporté */}
  </React.StrictMode>,
)
