import { useMemo } from "react";
import { GraphData, NavigationContextType } from "utils/types";

interface PositionsProps {
  floor: number;
  positionRadius: number;
  handlePositionClick: (e: React.MouseEvent<SVGCircleElement>) => void;
  className: string;
  navigation?: NavigationContextType["navigation"];
}

function Positions({
                     floor,
                     positionRadius,
                     handlePositionClick,
                     className,
                     navigation,
                   }: PositionsProps) {
  const positionBackgroundColor = "#4285f4";
  const positionBackgroundRadius = positionRadius + 7;
  const positonBackgroundOpacity = 0.2;

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

  const startVertex = graphData.vertices.find(
    (v) => v.id === navigation?.start
  );

  function isActivePosition(vertexId: string) {
    return navigation?.start === vertexId;
  }

  return (
    <g id="Vertexes">
      {/* Background circle for Google Maps like look */}
      {startVertex && (
        <circle
          id="background-circle"
          cx={startVertex.cx}
          cy={startVertex.cy}
          fill={positionBackgroundColor}
          opacity={positonBackgroundOpacity}
          r={positionBackgroundRadius}
        />
      )}

      {graphData.vertices.map((vertex) => (
        <circle
          key={vertex.id}
          id={vertex.id}
          onClick={
            vertex.objectName ? undefined : handlePositionClick
          }
          className={`position ${vertex.objectName ? "opacity-0" : className} ${
            isActivePosition(vertex.id) ? "position-active opacity-100" : ""
          }`}
          cx={vertex.cx}
          cy={vertex.cy}
          r={positionRadius}
        />
      ))}

      {/* Circle animation */}
      {startVertex && (
        <circle
          id="circle-animation"
          cx={startVertex.cx}
          cy={startVertex.cy}
          fill="none"
          stroke="white"
          strokeWidth={2}
          r={positionRadius}
        >
          <animate
            attributeName="stroke-width"
            values="1;3;1"
            dur="3s"
            repeatCount="indefinite"
          />
        </circle>
      )}
    </g>
  );
}

export default Positions;
