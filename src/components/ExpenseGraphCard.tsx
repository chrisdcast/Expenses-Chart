import "./Card.css";
import GraphData from "./Graph/GraphData";
import BarGraph from "./Graph/BarGraph";

export default function ExpenseGraphCard({data}: {data: GraphData[]}) {
  console.log(data);

  return (
    <div className="Card ExpenseGraphCard">
      <BarGraph data={data} title={"test"}/>
      {/* <ExpenseSummary /> */}
    </div>
  );
}
