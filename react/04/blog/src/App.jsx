import './App.css'
import Index from './pages/Index'
import { GlobalContext } from './context'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
function App() {
  const user ={
    username:'Michael'
  }
  // return (
  //   <>
  //     <GlobalContext.Provider value={user}>
  //       <Index />
  //     </GlobalContext.Provider>
  //   </>
  // )
  return(
    <>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router}/>
      </GlobalContext.Provider>
    </>
  )
}

export default App
