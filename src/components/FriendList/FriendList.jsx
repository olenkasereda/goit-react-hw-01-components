import PropTypes from 'prop-types';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul class="friend-list">
        <FriendListItem friends={friends} />
      </ul>
    </>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object),
};
