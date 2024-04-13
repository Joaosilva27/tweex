import LeftSidebar from "../Components/LeftSidebar";
import MainContainer from "../Components/MainContainer";

const Home = () => {
  return (
    <div className='flex w-screen ml-20 mt-20 mr-20'>
      <div className='w-1/5 flex justify-center'>
        <LeftSidebar />
      </div>
      <div className='w-2/5'>
        <MainContainer />
      </div>

      <div className='w-2/5'>aoiejfoij</div>
    </div>
  );
};

export default Home;
