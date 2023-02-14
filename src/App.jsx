// import CrudApi from './components/CrudApi';
import MyPage from './components/MyPage';
import MyPageContext from './components/MyPageContext';
// import MyPageContext from './components/MyPageContext';
// import { CrudProvider } from './context/CrudContext';

function App() {
  return (
    <div>
      <h1>React Context API</h1>
      <a
        href="https://es.reactjs.org/docs/context.html"
        target="_blank"
        rel="noreferrer"
      >
        Documentación
      </a>
      <hr />
      <MyPage />
      {/* <CrudProvider>
        <CrudApi />
      </CrudProvider>
      <hr />*/}
      <MyPageContext />
      <hr />
    </div>
  );
}

export default App;
