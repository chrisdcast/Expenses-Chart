import './BarGraphColumn.css';
import { getBarGraphHeight } from '../../util/GraphUtilFuncs';
import { DateContext } from './BarGraph';
import { useContext } from 'react';

export default function BarGraphColumn(
    {
        label,
        value,
        highestValue
    }: {
        label: string,
        value: number,
        highestValue: number
    }) {
    const bgColor = useContext(DateContext) === label ? 'var(--cyan)' : 'var(--softRed)';

    return (
        <div className="BarGraphColumn">
            <p>${value}</p>
            <div className='Bar' style={{ height: `${getBarGraphHeight(value, highestValue)}%`, backgroundColor: bgColor }}></div>
            <h2>{label}</h2>
        </div>
    );
}