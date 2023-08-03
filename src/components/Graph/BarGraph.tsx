import GraphData from "./GraphData";

export default function BarGraph({ data, title }: { data: GraphData[], title: string }) {
    return (
        <div className="BarGraph">
            <h1>{title}</h1>
            <div className="GraphContainer">
                {data.map((data) => (
                    <li>sample</li>
                ))}
                {/* <BarGraphColumn /> */}
            </div>
        </div>
    );
}