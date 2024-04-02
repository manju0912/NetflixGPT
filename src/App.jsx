import { Provider } from 'react-redux'
import './App.css'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import store from './store/store'

function App() {

  return (
    <Provider store={store}>
      <Header />
      <Body />
      <Footer />
    </Provider>
  )
}


export default App
