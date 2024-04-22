import { useEffect, useState } from "react";
import axios from "axios";

const RightSidebar = () => {
  const [randomUsers, setRandomUsers] = useState([]);

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
      <div>
        <img src={profilePicture} alt='Profile' />
        <span>{name}</span>
        <span>{email}</span>
      </div>
    );
  };

  return (
    <div className='m-4'>
      <div>おすすめユーザー</div>
      {randomUsers.map((user, index) => (
        <RecommendedPeopleToFollowCard
          key={index}
          profilePicture={user.picture.thumbnail}
          name={`${user.name.first} ${user.name.last}`}
          email={user.email}
        />
      ))}
    </div>
  );
};

export default RightSidebar;
