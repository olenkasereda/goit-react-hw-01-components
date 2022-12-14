import PropTypes from 'prop-types';
import css from './FriendList.module.css';
export const FriendListItem = ({ friends }) => {
  return (
    <>
      {friends.map(friend => (
        <li className={css.item} key={friend.id}>
          <span
            className={css.status}
            style={{
              backgroundColor: getActivityolor(friend.isOnline),
              borderRadius: '20px',
            }}
          >
            {friend.isOnline}
          </span>
          <img src={friend.avatar} alt="User avatar" width="48" />
          <p>{friend.name}</p>
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

function getActivityolor(status) {
  if (status) {
    return 'green';
  }
  return 'red';
}
