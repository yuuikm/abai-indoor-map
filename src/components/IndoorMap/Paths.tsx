import { useMemo } from "react";
import { GraphData } from "utils/types";

interface PathsProps {
  floor: number;
}

function Paths({ floor }: PathsProps) {
  const graphData: GraphData = useMemo(() => {
    switch (floor) {
      case 1:
        return require("@/floors/floor1/graphData").graphData;
      case 2:
        return require("@/floors/floor2/graphData").graphData;
      default:
        return { vertices: [], edges: [] };
    }
  }, [floor]);

  return (
    <g id="Edges">
      {graphData.edges.map((edge) => {
        const { id, from, to } = edge;
        const fromVertex = graphData.vertices.find((v) => v.id === from);
        const toVertex = graphData.vertices.find((v) => v.id === to);
        if (fromVertex && toVertex) {
          const pathClassName = "path";
          const pathD = `M${fromVertex.cx} ${fromVertex.cy}L${toVertex.cx} ${toVertex.cy}`;
          return <path key={id} id={id} className={pathClassName} d={pathD} />;
        }
        return null;
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
