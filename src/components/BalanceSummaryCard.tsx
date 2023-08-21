import './BalanceSummaryCard.css';

export default function BalanceSummaryCard({ balance }: { balance: number }) {
    return (
        <div className="Card BalanceSummaryCard">
            <div className="BalanceElementContainer">
                <h1>My Balance</h1>
                <p>${balance}</p>
            </div>
            <div className="ExpenseAppIcon">
                <img src="" alt="Balance Graph Logo" />
            </div>
        </div>
    );
}