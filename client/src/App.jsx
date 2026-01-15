import { useAuth } from "./context/AuthContext";
import Layout from "./pages/Layout";
import RouterNav from "./router/Routes";

function App() {
  const { user } = useAuth();
  console.log("app executed");
  return user ? <Layout /> : <RouterNav />;
}

export default App;
