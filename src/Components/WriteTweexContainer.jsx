import { useEffect, useState } from "react";
import { collection, addDoc, getDocs, query, orderBy, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase";
import firebase from "firebase/compat/app";

const WriteTweexContainer = () => {
  const [tweex, setTweex] = useState("");
  const [tweexes, setTweexes] = useState([]);

  // Fetching tweexes db for docs (tweex, user, email, profilePicture)
  const fetchData = async () => {
    try {
      const tweexesCollection = collection(db, "tweexes");
      const tweexesSnapshot = await getDocs(query(tweexesCollection, orderBy("createdAt")));

      const fetchedTweexes = [];
      tweexesSnapshot.forEach(doc => {
        fetchedTweexes.push({ id: doc.id, ...doc.data() });
      });
      setTweexes(fetchedTweexes);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  // Fetch data only once when component mounts AOFIJAOFI

  // Adding info to the db when user makes a post
  const onHandleClick = async () => {
    try {
      const tweexPost = await addDoc(collection(db, "tweexes"), {
        tweex: tweex,
        user: auth.currentUser.displayName,
        email: auth.currentUser.email,
        profilePicture: auth.currentUser.photoURL,
        createdAt: serverTimestamp(),
      });

      fetchData();
      console.log(tweexPost);
    } catch (err) {
      console.log(err);
    }
  };

  console.log("Tweexes:", tweexes); // Log the tweexes state to check if it's being updated

  return (
    <div>
      <div className='flex justify-center items-center'>
        <img className='w-8 h-8 rounded-full' src={auth.currentUser.photoURL} alt='User' />
        <input
          className=' w-full ml-3 appearance-none bg-transparent border-none focus:outline-none placeholder-white'
          placeholder='いまどうしてる ?'
          onChange={e => setTweex(e.target.value)}
          value={tweex}
        />
        <button
          className=' bg-slate-300 hover:bg-slate-200 text-gray-900  font-bold py-3 px-3 rounded-full whitespace-nowrap'
          value={tweex}
          onClick={onHandleClick}
        >
          トウィークス
        </button>
      </div>
      <div className='flex flex-col mt-10'>
        <div>
          {tweexes.map(tweex => (
            <div className='flex mb-6' key={tweex.id}>
              <div>
                <img className='w-8 rounded-full' src={tweex.profilePicture} alt='Profile' />
              </div>
              <div className='ml-2'>
                <span>{tweex.user}</span>
                <span className='ml-2 text-sm'>@{tweex.email}</span>
                <p>{tweex.tweex}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WriteTweexContainer;
