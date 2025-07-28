export interface VertexData {
  id: string;
  objectName: string | null;
  cx: number;
  cy: number;
}

export interface EdgeData {
  id: string;
  from: string;
  to: string;
}
export interface GraphData {
  vertices: VertexData[];
  edges: EdgeData[];
}
export const graphData: GraphData = {
  vertices: [
    { id: "v1", objectName: null, cx: 616.94, cy: 591.05 },
    { id: "v2", objectName: null, cx: 616.94, cy: 610.03 },
    { id: "v3", objectName: null, cx: 616.94, cy: 574.15 },
    { id: "v4", objectName: "Cropi Max ТОО №412", cx: 771.32, cy: 610.03 },
    { id: "v5", objectName: null, cx: 771.45, cy: 591.05 },
    { id: "v6", objectName: "Cropi Max ТОО №413", cx: 771.45, cy: 574.15 },
    { id: "v7", objectName: null, cx: 847.91, cy: 591.05 },
    { id: "v8", objectName: "Cropi Max ТОО №401", cx: 847.91, cy: 610.03 },
    { id: "v9", objectName: null, cx: 1002.59, cy: 591.05 },
    { id: "v10", objectName: "AL-Shifa ИП", cx: 1002.59, cy: 610.03 },
    { id: "v11", objectName: null, cx: 1002.59, cy: 574.15 },
    { id: "v12", objectName: null, cx: 1081.46, cy: 591.05 },
    { id: "v13", objectName: null, cx: 1081.46, cy: 574.15 },
    { id: "v14", objectName: null, cx: 1171.79, cy: 574.15 },
    { id: "v15", objectName: null, cx: 1171.79, cy: 591.05 },
    { id: "v16", objectName: null, cx: 1171.79, cy: 610.03 },
    { id: "v17", objectName: null, cx: 1250.17, cy: 610.03 },
    { id: "v18", objectName: null, cx: 1250.17, cy: 591.05 },
    { id: "v19", objectName: null, cx: 1250.17, cy: 574.15 },
    { id: "v20", objectName: null, cx: 1328.12, cy: 591.05 },
    { id: "v21", objectName: null, cx: 1328.12, cy: 610.03 },
    { id: "v22", objectName: null, cx: 1328.12, cy: 574.15 },
    { id: "v23", objectName: null, cx: 1405.63, cy: 591.05 },
    { id: "v24", objectName: null, cx: 1405.63, cy: 574.57 },
    { id: "v25", objectName: null, cx: 445.12, cy: 610.03 },
    { id: "v26", objectName: null, cx: 445.25, cy: 591.05 },
    { id: "v27", objectName: null, cx: 445.25, cy: 574.15 },
    { id: "v28", objectName: null, cx: 275.61, cy: 610.03 },
    { id: "v29", objectName: null, cx: 275.74, cy: 591.05 },
    { id: "v30", objectName: null, cx: 275.74, cy: 574.15 },
    { id: "v31", objectName: null, cx: 136.57, cy: 610.03 },
    { id: "v32", objectName: null, cx: 136.7, cy: 591.05 },
    { id: "v33", objectName: null, cx: 136.7, cy: 574.15 },
    { id: "v34", objectName: null, cx: 57.16, cy: 610.03 },
    { id: "v35", objectName: null, cx: 57.29, cy: 591.05 },
    { id: "v36", objectName: null, cx: 57.29, cy: 574.15 },
  ],

  edges: [
    { id: "v7_to_v9", from: "v7", to: "v9" },
    { id: "v9_to_v12", from: "v9", to: "v12" },
    { id: "v12_to_v15", from: "v12", to: "v15" },
    { id: "v15_to_v18", from: "v15", to: "v18" },
    { id: "v18_to_v20", from: "v18", to: "v20" },
    { id: "v20_to_v23", from: "v20", to: "v23" },
    { id: "v7_to_v5", from: "v7", to: "v5" },
    { id: "v5_to_v1", from: "v5", to: "v1" },
    { id: "v1_to_v26", from: "v1", to: "v26" },
    { id: "v26_to_v29", from: "v26", to: "v29" },
    { id: "v29_to_v32", from: "v29", to: "v32" },
    { id: "v32_to_v35", from: "v32", to: "v35" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v5_to_v4", from: "v5", to: "v4" },
    { id: "v9_to_v10", from: "v9", to: "v10" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
  ],
};
