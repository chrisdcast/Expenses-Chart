import './ExpenseSummary.css';

export default function ExpenseSummary({ total }: { total: number }) {
    return (
        <div className="ExpenseSummary">
            <div className='ExpenseTotalElementContainer'>
                <h1>Total this month</h1>
                <p>${total}</p>
            </div>
            <div className='ExpenseDifferenceElementContainer'>
                <p>2.4%</p>
                <h1>from last month</h1>
            </div>
        </div>
    );
}