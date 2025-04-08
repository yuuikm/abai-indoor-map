import { useEffect, useState } from "react";
import { GraphData } from "utils/types";

function Paths({ floor }: { floor: number }) {
  const [graphData, setGraphData] = useState<GraphData>({
    vertices: [],
    edges: [],
  });

  useEffect(() => {
    async function loadGraph() {
      try {
        let imported;
        switch (floor) {
          case 1:
            imported = await import("floors/floor1/graphData");
            break;
          case 2:
            imported = await import("floors/floor2/graphData");
            break;
          case 3:
            imported = await import("floors/floor3/graphData");
            break;
          case 4:
            imported = await import("floors/floor4/graphData");
            break;
          case 5:
            imported = await import("floors/floor5/graphData");
            break;
          case 6:
            imported = await import("floors/floor6/graphData");
            break;
          case 7:
            imported = await import("floors/floor7/graphData");
            break;
          default:
            imported = { default: { vertices: [], edges: [] } };
        }
      } catch (err) {
        console.error("Failed to load graph data:", err);
        setGraphData({ vertices: [], edges: [] });
      }
    }

    loadGraph();
  }, [floor]);

  return (
    <g id="Edges">
      {graphData.edges.map((edge) => {
        const from = graphData.vertices.find((v) => v.id === edge.from);
        const to = graphData.vertices.find((v) => v.id === edge.to);
        if (!from || !to) return null;

        return (
          <path
            key={edge.id}
            id={edge.id}
            className="path"
            d={`M${from.cx} ${from.cy}L${to.cx} ${to.cy}`}
          />
        );
      })}
      <path id="navigation-route" className="path" d="" fill="none" />
    </g>
  );
}

export default Paths;
