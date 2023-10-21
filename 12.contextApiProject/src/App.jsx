import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div className="w-full h-[100vh] bg-gray-800 text-white flex flex-col gap-y-8 justify-center items-center">
          <Login />
          <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
