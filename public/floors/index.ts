import { graphData as graphData1 } from "floors/floor1/graphData";
import { graphData as graphData2 } from "floors/floor2/graphData";

import { GraphData } from "utils/types";

export const graphs: Record<number, GraphData> = {
  1: graphData1,
  2: graphData2,
};
