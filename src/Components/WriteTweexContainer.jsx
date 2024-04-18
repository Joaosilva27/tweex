import { useEffect, useState } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { auth, db } from "../firebase";

const WriteTweexContainer = () => {
  const [tweex, setTweex] = useState("");
  const [tweexes, setTweexes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const tweexesCollection = collection(db, "tweexes");
        const tweexesSnapshot = await getDocs(tweexesCollection);

        const fetchedTweexes = [];
        tweexesSnapshot.forEach(doc => {
          fetchedTweexes.push({ id: doc.id, ...doc.data() });
        });

        setTweexes(fetchedTweexes);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [tweexes]);

  const onHandleClick = async () => {
    try {
      const tweexPost = await addDoc(collection(db, "tweexes"), {
        tweex: tweex,
        user: auth.currentUser.displayName,
        email: auth.currentUser.email,
        profilePicture: auth.currentUser.photoURL,
      });

      tweexPost();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <img />
        <span>username</span>
        <span>email</span>
        <span>20 h</span>
        <input className='text-black' onChange={e => setTweex(e.target.value)} value={tweex} />
        <button value={tweex} onClick={onHandleClick}>
          submit
        </button>
      </div>
      <div className='flex flex-col mt-10'>
        <div>
          {tweexes.map(tweex => (
            <div className='flex mb-6' key={tweex.id}>
              <div>
                <img className='w-8 rounded-full' src={tweex.profilePicture} />
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
