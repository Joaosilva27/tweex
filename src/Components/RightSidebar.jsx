import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RightSidebar = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [trendingWorldwideData, setTrendingWorldwideData] = useState([]);

  useEffect(() => {
    const fetchWorlwideTrends = async () => {
      const options = {
        method: "GET",
        url: "https://news-api14.p.rapidapi.com/top-headlines",
        params: {
          country: "us",
          language: "en",
          pageSize: "10",
          category: "sports",
        },
        headers: {
          "X-RapidAPI-Key": "2755f3ef1bmshf5d9aff13eab94bp15ffa0jsn01f5d0127790",
          "X-RapidAPI-Host": "news-api14.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setTrendingWorldwideData(response.data.articles);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorlwideTrends();
  }, []);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const responses = await Promise.all([
          axios.get("https://randomuser.me/api/"),
          axios.get("https://randomuser.me/api/"),
          axios.get("https://randomuser.me/api/"),
        ]);
        const randomUsersData = responses.map(response => response.data.results[0]);
        setRandomUsers(randomUsersData);
      } catch (err) {
        console.log(err);
      }
    };

    fetchRandomUsers();
  }, []);

  const RecommendedPeopleToFollowCard = ({ profilePicture, name, email }) => {
    return (
      <div className='flex mb-6'>
        <img className='w-10 h-10 rounded-full' src={profilePicture} alt='Profile' />
        <div className='flex flex-col ml-2'>
          <span>{name}</span>
          <span className='text-gray-400'>{email}</span>
        </div>
      </div>
    );
  };

  const TrendingWorldWideCard = ({ title, url }) => {
    return (
      <div className='mb-6'>
        <Link to={url} target='_blank' rel='noopener noreferrer'>
          <span className='text-base font-bold'>{title}</span>
        </Link>
      </div>
    );
  };

  return (
    <div className='m-4'>
      <h6 className='mb-6 text-xl'>おすすめユーザー</h6>
      {randomUsers.map((user, index) => (
        <RecommendedPeopleToFollowCard
          key={index}
          profilePicture={user.picture.large}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
        />
      ))}
      <div className='mt-12'>
        <h6 className='text-xl mb-6'>世界のトレンド</h6>
      </div>
      {trendingWorldwideData.slice(0, 5).map((data, index) => (
        <TrendingWorldWideCard key={index} title={data.title} url={data.url} />
      ))}
    </div>
  );
};

export default RightSidebar;
