import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import OurRecipe from './Components/OurRecipe/OurRecipe'

function App() {

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <Banner />
        <OurRecipe />
      </main>
    </>
  )
}

export default App
