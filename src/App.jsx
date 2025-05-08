import "./App.css";
import FavUserList from "./components/FavUserList";
import UserList from "./components/UserList";

function App() {
  return (
    <>
      <div className="flex w-4/5 m-auto p-4 gap-4">
        <UserList />
        <FavUserList />
      </div>
    </>
  );
}

export default App;
