import { FriendListItem } from './FriendListItem/FriendListItem';

export const FriendList = props => {
    // const { avatar, name, isOnline } = props;
  return (
    <ul class="friend-list">
      {props.map(el => (
        <FriendListItem
          avatar={props.avatar}
          name={props.name}
          isOnline={props.isOnline}
        />
      ))}
    </ul>
  );
};
