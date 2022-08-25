import { Provider } from "react-redux";
import Container from "./Components/Container";
import Footer from "./Components/Footer";
import Nav from "./Components/Nav";
import Search from "./Components/Search";
import store from "./Redux/store";

function App() {
  return (
   <Provider store={store}>
     <div className="App">
      <Nav/>
      <Search/>
      <Container/>
      <Footer/>
    </div>
   </Provider>
  );
}

export default App;
