export const FriendListItem = ({ id, avatar, name, isOnline }) => {
  return (
    <li key={ id } class="item">
      <span class="status"></span>
      <img class="avatar" src={ avatar } alt={ name } width="48" />
          <p class="name">{ name }</p>
    </li>
  );
};
