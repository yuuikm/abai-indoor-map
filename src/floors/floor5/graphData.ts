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
    { id: "v1", objectName: null, cx: 614.82, cy: 593.09 },
    { id: "v2", objectName: null, cx: 614.82, cy: 612.07 },
    { id: "v3", objectName: null, cx: 614.82, cy: 576.19 },
    { id: "v4", objectName: null, cx: 769.2, cy: 612.07 },
    { id: "v5", objectName: null, cx: 769.33, cy: 593.09 },
    { id: "v6", objectName: null, cx: 845.79, cy: 593.09 },
    { id: "v7", objectName: null, cx: 845.79, cy: 612.07 },
    { id: "v8", objectName: null, cx: 1000.47, cy: 593.09 },
    { id: "v9", objectName: null, cx: 1000.47, cy: 612.07 },
    { id: "v10", objectName: null, cx: 1000.47, cy: 576.19 },
    { id: "v11", objectName: null, cx: 1079.34, cy: 593.09 },
    { id: "v12", objectName: null, cx: 1079.34, cy: 576.19 },
    { id: "v13", objectName: "Bolashaq ИП", cx: 1169.67, cy: 576.19 },
    { id: "v14", objectName: null, cx: 1169.67, cy: 593.09 },
    { id: "v15", objectName: null, cx: 1169.67, cy: 612.07 },
    { id: "v16", objectName: null, cx: 1326, cy: 593.09 },
    { id: "v17", objectName: null, cx: 1326, cy: 612.07 },
    { id: "v18", objectName: null, cx: 1404.79, cy: 593.09 },
    { id: "v19", objectName: null, cx: 1404.79, cy: 576.61 },
    { id: "v20", objectName: null, cx: 443.01, cy: 612.07 },
    { id: "v21", objectName: null, cx: 443.14, cy: 593.09 },
    { id: "v22", objectName: "Арман Арыстан ИП", cx: 443.14, cy: 576.19 },
    { id: "v23", objectName: null, cx: 273.5, cy: 612.07 },
    { id: "v24", objectName: null, cx: 273.63, cy: 593.09 },
    { id: "v25", objectName: null, cx: 273.63, cy: 576.19 },
    { id: "v26", objectName: null, cx: 134.46, cy: 612.1 },
    { id: "v27", objectName: null, cx: 134.6, cy: 593.12 },
    { id: "v28", objectName: "IS Holding ТОО №525", cx: 134.6, cy: 576.22 },
    { id: "v29", objectName: null, cx: 212.13, cy: 593.09 },
    { id: "v30", objectName: "IS Holding ТОО №523", cx: 212.13, cy: 576.19 },
    { id: "v31", objectName: null, cx: 55.04, cy: 612.07 },
    { id: "v32", objectName: null, cx: 55.17, cy: 593.09 },
    { id: "v33", objectName: null, cx: 55.17, cy: 576.19 },
  ],

  edges: [
    { id: "v6_to_v8", from: "v6", to: "v8" },
    { id: "v8_to_v11", from: "v8", to: "v11" },
    { id: "v11_to_v14", from: "v11", to: "v14" },
    { id: "v14_to_v16", from: "v14", to: "v16" },
    { id: "v16_to_v18", from: "v16", to: "v18" },
    { id: "v6_to_v5", from: "v6", to: "v5" },
    { id: "v5_to_v1", from: "v5", to: "v1" },
    { id: "v1_to_v21", from: "v1", to: "v21" },
    { id: "v6_to_v8", from: "v6", to: "v8" },
    { id: "v21_to_v24", from: "v21", to: "v24" },
    { id: "v24_to_v29", from: "v24", to: "v29" },
    { id: "v29_to_v27", from: "v29", to: "v27" },
    { id: "v27_to_v32", from: "v27", to: "v32" },
    { id: "v14_to_v13", from: "v14", to: "v13" },
    { id: "v21_to_v22", from: "v21", to: "v22" },
    { id: "v29_to_v30", from: "v29", to: "v30" },
    { id: "v27_to_v28", from: "v27", to: "v28" },
  ],
};
