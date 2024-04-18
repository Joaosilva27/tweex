import Searchbar from "./Searchbar";
import WriteTweexContainer from "./WriteTweexContainer";

export default function MainContainer() {
  return (
    <div>
      <div>
        <Searchbar />
        <div className='m-4'>
          <WriteTweexContainer />
        </div>
      </div>
    </div>
  );
}
