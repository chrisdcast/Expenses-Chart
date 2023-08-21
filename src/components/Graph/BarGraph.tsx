import './BarGraph.css';
import GraphData from "./GraphData";
import BarGraphColumn from "./BarGraphColumn";
import { getHighestValue } from '../../util/GraphUtilFuncs';
import { createContext } from 'react';

export const DateContext = createContext('');

export default function BarGraph({ data, title }: { data: GraphData[], title: string }) {

    return (
        <DateContext.Provider value={new Date().toString().toLowerCase().slice(0, 3)} >
            <div className="BarGraph">
                <h1>{title}</h1>
                <div className="GraphContainer">
                    {data.map((el) => (
                        <BarGraphColumn label={el.label} value={el.value} highestValue={getHighestValue(data)} />
                    ))}
                </div>
            </div>
        </DateContext.Provider>
    );
}