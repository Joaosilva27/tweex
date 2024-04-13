import LeftSidebarCard from "./LeftSidebarCard";
import TweexIcon from "../Icons/tweex.png";
import HomeIcon from "../Icons/home.svg";
import ForYouIcon from "../Icons/fy.svg";
import BellIcon from "../Icons/bell.svg";
import BookmarkIcon from "../Icons/bookmark.svg";
import ProfileIcon from "../Icons/profile.svg";

export default function LeftSidebar() {
  return (
    <div className='flex items-center mb-20'>
      <div className='flex flex-col'>
        <div className='absolute top-0 mt-20'>
          <img src={TweexIcon} className='h-10 w-12' />
        </div>
        <LeftSidebarCard icon={HomeIcon} text='ホーム' />
        <LeftSidebarCard icon={ForYouIcon} text='おすすあ' />
        <LeftSidebarCard icon={BellIcon} text='通知' />
        <LeftSidebarCard icon={BookmarkIcon} text='ブックマーク' />
        <LeftSidebarCard icon={ProfileIcon} text='プロフィール' />
        <button className='mt-8 bg-slate-300 hover:bg-slate-200 text-gray-900 font-bold py-4 px-4 rounded-full'>トウィークス</button>
      </div>
    </div>
  );
}
