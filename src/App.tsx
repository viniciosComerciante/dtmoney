import { GlobalStyle } from "./assets/styles/globals";
import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

export function App() {
  return (
    
    <>
      <Header></Header>
      <Dashboard></Dashboard>
      <GlobalStyle/>
    </>
  );
}


