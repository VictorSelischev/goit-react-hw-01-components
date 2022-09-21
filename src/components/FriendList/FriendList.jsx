import { FriendListItem } from './FriendListItem/FriendListItem';
// import css from './FriendList.module.css';

export const FriendList = ({friends}) => {
  // const { avatar, name, isOnline } = friends;
  return (
    <ul className="friend_list">
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          avatar={el.avatar}
          name={el.name}
          isOnline={el.isOnline}
        />
      ))}
    </ul>
  );
};
