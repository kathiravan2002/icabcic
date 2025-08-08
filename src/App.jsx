
import { ToastContainer, Zoom } from 'react-toastify'
import './App.css'
import Approuter from './router/Approuter'

function App() {

  return (
    <>
      <Approuter />
      <ToastContainer
        position="top-center"
        autoClose={2000}
        transition={Zoom} />
    </>
  )
}

export default App
