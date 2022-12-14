import { Profile } from './Profile/Profile';
import { StatisticsList } from './Statistics/StatisticsList';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      {/* <StatisticsList stats={data} /> */}
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};
