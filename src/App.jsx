import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className='flex h-screen'>
      <Outlet />
    </div>
  );
}

export default App;
