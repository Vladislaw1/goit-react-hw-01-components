import SocialProfile from './components/SocialProfile';
import Statistics from './components/Statistics';
import Friends from './components/Friends'
import Transactions from './components/Transactions'

import users from './JSON/user.json';
import statistics from './JSON/statistics.json';
import friends from "./JSON/friends.json";
import transactions from './JSON/transaction.json'

function App() {
  return (
    <div className="App">
      <SocialProfile {...users} />
      <Statistics title="Upload stats" stats={statistics} />
      <Friends list={friends} />
      <Transactions list={transactions}/>
    </div>
  );
}

export default App;
