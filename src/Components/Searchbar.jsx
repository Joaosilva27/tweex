import SearchbarIcon from "../Icons/search.svg";

export default function Searchbar() {
  return (
    <div>
      <div className='flex border-slate-300 border-2 text-gray-900 font-bold p-4 py-2 rounded-full'>
        <img className='h-8 w-8' src={SearchbarIcon} />
        <input
          className='text-white w-full ml-3 appearance-none bg-transparent border-none focus:outline-none placeholder-white'
          placeholder='検索 ...'
        />
      </div>
    </div>
  );
}
