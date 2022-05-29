import { useEffect, useState } from "react";
import { Common } from "../common/common";
import Navbar from "../Nav/Nav";
import { Main } from "./style";
import Post from "../post/post";
import Story from "../story/story";
import Profile from "../profile/Profile";
import axios from "axios";
import { useParams, Outlet } from "react-router-dom";

function Home() {
  useEffect(() => {
    fetchData();
  }, []);

  const [Data, setData] = useState([]);
  const fetchData = async () => {
    const res = await axios.get(
      "https://my-json-server.typicode.com/vipulkr059/InstaDB/data"
    );
    setData(res.data);
  };
  let { home } = useParams();
  return (
    <div>
      <Common>
        <Navbar />
        {home === undefined ? (
          <Outlet />
        ) : (
          <Main>
            <section style={{ width: "40vw", marginLeft: "15vw" }}>
              <Story data={Data} />
              {Data.map((users, key) => {
                return <Post key={key} users={users} />;
              })}
            </section>
            <aside style={{ height: "100vh", width: "100vw" }}>
              <Profile />
            </aside>
          </Main>
        )}
      </Common>
    </div>
  );
}

export default Home;
