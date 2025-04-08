import { useMemo } from "react";
import { FloorObject } from "utils/types";

interface ObjectsProps {
    floor: number;
    handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
    className?: string;
}

function Objects({ floor, handleObjectClick, className }: ObjectsProps) {
    const objects: FloorObject[] = useMemo(() => {
        switch (floor) {
            case 1:
                return require("floors/floor1/Objects").floor1Objects;
            case 2:
                return require("floors/floor2/Objects").floor2Objects;
            default:
                return [];
        }
    }, [floor]);

    return (
      <g id="Objects">
          {objects.map((obj) => (
            <path
              key={obj.id}
              id={obj.id}
              d={obj.d}
              className={`${className} object`}
              onClick={handleObjectClick}
            />
          ))}
      </g>
    );
}

export default Objects;
