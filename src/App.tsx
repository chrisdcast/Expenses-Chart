import ExpenseGraphCard from './components/ExpenseGraphCard';
import BalanceSummaryCard from './components/BalanceSummaryCard';
import ExpenseSummary from './components/ExpenseSummary';
import GraphData from './components/Graph/GraphData';
import data from './data/data.json';

function App() {
  let assembledData: GraphData[] = [];

  for (let obj in data) {
    let newData: GraphData = {
      label: data[obj].day,
      value: data[obj].amount,
    };
    assembledData.push(newData);
  }

  return (
    <>
      <BalanceSummaryCard balance={921.48}/>
      <ExpenseGraphCard data={assembledData} />
    </>
  )
}

export default App
