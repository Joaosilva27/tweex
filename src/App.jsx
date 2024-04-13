import LeftSidebar from "./Components/LeftSidebar";
import MainContainer from "./Components/MainContainer";

function App() {
  return (
    <div className='flex h-screen'>
      <div className='w-1/5 flex justify-center'>
        <LeftSidebar />
      </div>
      <div className='w-2/5'>
        <MainContainer />
      </div>

      <div className='w-2/5'>aoiejfoij</div>
    </div>
  );
}

export default App;
