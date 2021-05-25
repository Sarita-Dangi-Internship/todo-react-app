import logo from "./logo.svg";
import "./App.scss";
import "./styles/main.scss";
import Header from './components/Header';
import AddNewInput from './components/AddNewInput';
import Filter from './components/FilterSortItems';
import CheckListItems from './components/CheckListItems';

function App() {
  return (
    <div className="App">
      <div className="main-container">
        <Header />
        <AddNewInput />
        <Filter />
        <CheckListItems />
      </div>
    </div>
  );
}

export default App;
