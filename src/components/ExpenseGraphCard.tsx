import "./Card.css";
import "./ExpenseGraphCard.css";
import GraphData from "./Graph/GraphData";
import BarGraph from "./Graph/BarGraph";
import ExpenseSummary from "./ExpenseSummary";

export default function ExpenseGraphCard({data}: {data: GraphData[]}) {

  return (
    <div className="Card ExpenseGraphCard">
      <BarGraph data={data} title="Spending - Last 7 days"/>
      <ExpenseSummary total={478.33}/>
    </div>
  );
}
