import { FriendListItem } from './FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import { PropTypes } from 'prop-types';

export const FriendList = ({ friends }) => {
  // const { avatar, name, isOnline } = friends;
  return (
    <ul className={css.friend_list}>
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

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
