import { BrowserRouter } from "react-router-dom";
import { useAppContext } from "./utils/context";
import { useAuthState } from "react-firebase-hooks/auth";
import Navigation from "./components/Navigation";
import AppRouter from "./components/AppRouter";
import Loader from "./components/Loader";
import "./App.css";

function App() {
  const {auth} = useAppContext();
  const [ user, loading, error ] = useAuthState(auth);
  if(loading) {return <Loader/>}
  return (
    <div>
      <BrowserRouter>
        <Navigation />
        <AppRouter />
      </BrowserRouter>
    </div>
  );
}

export default App;
