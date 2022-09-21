import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = ({friends}) => {
  // const { avatar, name, isOnline } = friends;
  return (
    <ul class="friend-list">
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
