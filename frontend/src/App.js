import Form from './components/form/Form';
import SignUpForm from './components/signup/SignUpForm';
import Success from './components/success/Success';
import './index.css'
import { BrowserRouter ,Routes,Route} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>} />
      <Route path="/success" element={<Success/>}/>
      <Route path="/login" element={<Form/>}/>
      <Route path="/signup" element={<SignUpForm/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
