import ExpenseGraphCard from './components/ExpenseGraphCard';
import BalanceSummaryCard from './components/BalanceSummaryCard';
import Footer from './components/partials/Footer';
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
      <div className="activeArea">
        <BalanceSummaryCard balance={921.48}/>
        <ExpenseGraphCard data={assembledData} />
      </div>
      <Footer />
    </>
  )
}

export default App
