import { GlobalStyle } from './theme/GlobalStyle';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';



export function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Dashboard />
    </>
  );
}
