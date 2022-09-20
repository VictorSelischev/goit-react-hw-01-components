import { Profile } from './Profile/Profile';
import user from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        paddingTop: 88,
        paddingBottom: 88,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e7ecf2',
      }}
    >
      <Profile className = "section"
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </div>
  );
};
