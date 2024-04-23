import { useEffect, useState } from "react";
import axios from "axios";

const RightSidebar = () => {
  const [randomUsers, setRandomUsers] = useState([]);
  const [trendingWorlwideData, setTrendingWorldwideData] = useState([]);

  useEffect(() => {
    const fetchWorlwideTrends = async () => {
      const options = {
        method: "GET",
        url: "https://news67.p.rapidapi.com/v2/trending",
        params: { languages: "en" },
        headers: {
          "X-RapidAPI-Key": "2755f3ef1bmshf5d9aff13eab94bp15ffa0jsn01f5d0127790",
          "X-RapidAPI-Host": "news67.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        const trendingWorldwideData = response;
        setTrendingWorldwideData(trendingWorldwideData);

        // console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWorlwideTrends();
  }, []);

  useEffect(() => {
    const fetchRandomUsers = async () => {
      try {
        const response1 = await axios.get("https://randomuser.me/api/");
        const response2 = await axios.get("https://randomuser.me/api/");
        const response3 = await axios.get("https://randomuser.me/api/");

        const randomUsersData = [response1.data.results[0], response2.data.results[0], response3.data.results[0]];

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
          <span>{email}</span>
        </div>
      </div>
    );
  };

  const TrendingWorldWideCard = ({ category, title }) => {
    return (
      <div>
        <span className='text-lg font-bold'>{title}</span> - <span>{category}</span>
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
        {trendingWorlwideData.map((data, index) => (
          <TrendingWorldWideCard key={index} category='category' title='title' />
        ))}
      </div>
      <TrendingWorldWideCard category='category' title='title' />
    </div>
  );
};

export default RightSidebar;
