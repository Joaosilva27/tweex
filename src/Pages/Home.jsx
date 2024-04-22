import LeftSidebar from "../Components/LeftSidebar";
import MainContainer from "../Components/MainContainer";
import RightSidebar from "../Components/RightSidebar";

const Home = () => {
  return (
    <div className='flex w-screen ml-20 mt-20 mr-20'>
      <div className='w-1/5 flex justify-center'>
        <LeftSidebar />
      </div>
      <div className='w-2/5'>
        <MainContainer />
      </div>

      <div className='w-2/5'>
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
