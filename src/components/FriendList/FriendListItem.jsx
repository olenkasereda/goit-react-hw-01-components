import PropTypes from 'prop-types';

export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li class="item" key={friend.id}>
          <span class="status">{friend.isOnline}</span>
          <img
            class="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <p class="name">{friend.name}</p>
        </li>
      ))}
    </>
  );
};

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number,
      isOnline: PropTypes.bool,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
  ),
};
