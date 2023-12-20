import * as d3 from "d3";

export default function LinePlot({
  data=[1,1.1,2,3,4,5,6,7,8,9,0,-1,2],
  width = 640,
  height = 400,
  marginTop = 20,
  marginRight = 20,
  marginBottom = 60,
  marginLeft = 60
}) {
  const x = d3.scaleLinear([0, data.length - 1], [marginLeft, width - marginRight]);
  const y = d3.scaleLinear(d3.extent(data), [height - marginBottom, marginTop]);
  const line = d3.line((d, i) => x(i), y);
  return (
    <svg width={width} height={height}>
      <path fill="none" stroke="currentColor" stroke-width="1.5" d={line(data)} />
      <g fill="white" stroke="currentColor" stroke-width="1.5">
        {data.map((d, i) => (<circle key={i} cx={x(i)} cy={y(d)} r="2.5" />))}
      </g>
    </svg>
  );
}