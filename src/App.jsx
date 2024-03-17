import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import OurRecipe from './Components/OurRecipe/OurRecipe'
import Toast from './Components/Toast/Toast'

function App() {
  const [toastState, setToastState] = useState(false);
  
  const handleToast = () => {
    setToastState(true);
    setTimeout(() => {
      setToastState(false);
    }, 1500);
  }

  return (
    <>
      {
        toastState ? <Toast /> : false
      }
      <Header />
      <main className="container mx-auto p-4">
        <Banner />
        <OurRecipe handleToast={handleToast} />
      </main>
    </>
  )
}

export default App
