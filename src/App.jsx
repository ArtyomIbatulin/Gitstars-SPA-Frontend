import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { changeState, changeName, changeId } from "./store/repoSlice";
import { RepoList } from "./components/RepoList";
import {
  start,
  fetchRepos,
  fetchRepoByName,
  fetchRepoById,
} from "./http/repos.Api";

function App() {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.repo.name);
  const idRepo = useSelector((state) => state.repo.idRepo);

  return (
    <div className="App">
      <h1>Github top repos</h1>

      <button
        onClick={(event) => {
          event.preventDefault();
          start();
          alert("Database has updated");
        }}
      >
        Запустить
      </button>

      <button
        onClick={() => fetchRepos().then((data) => dispatch(changeState(data)))}
      >
        Получить все репозитории
      </button>

      <form className="form-name-repo">
        <label>
          Введите название репозитория
          <input
            type="text"
            name="inputName"
            onChange={(event) => {
              dispatch(changeName(event.target.value));
            }}
          />
        </label>
        <button
          onClick={(event) => {
            event.preventDefault();
            fetchRepoByName(name).then((data) => dispatch(changeState(data)));
          }}
        >
          По названию
        </button>
      </form>
      <form className="form-id-repo">
        <label>
          Введите id репозитория из гитхаб
          <input
            type="text"
            name="inputIdRepo"
            onChange={(event) => {
              dispatch(changeId(event.target.value));
            }}
          />
        </label>
        <button
          onClick={(event) => {
            event.preventDefault();
            fetchRepoById(idRepo).then((data) => dispatch(changeState(data)));
          }}
        >
          По id репозитория
        </button>
      </form>

      <RepoList />
    </div>
  );
}

export default App;
