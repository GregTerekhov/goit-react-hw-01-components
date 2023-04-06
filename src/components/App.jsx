 import Profile from "./Profile/Profile";
 import user from '../user.json';
const App = () => {
  return (
    <div>
      <Profile 
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
      />
    </div>
  );
};

export default App;
