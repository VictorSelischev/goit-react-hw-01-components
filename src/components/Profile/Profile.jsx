export const Profile = ({ username, tag, location, avatar, stats }) => {
  const { followers, views, likes } = stats;

  //   console.log(username, tag, location, avatar, followers, views, likes);

  return (
    <div class="profile">
      <div class="description">
        <img src={avatar} alt={username} class="avatar" />
        <p class="name">{username}</p>
        <p class="tag">{'@' + tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.defaultProps = {
  username: 'Petra Marica',
  tag: 'pmarica',
  location: 'Salvador, Brasil',
  avatar: 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png',
  stats: { followers: 1000, views: 2000, likes: 3000 },
};

// Profile.propTypes = {};
