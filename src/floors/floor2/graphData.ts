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
    { id: "v1", objectName: null, cx: 620.05, cy: 593.05 },
    { id: "v2", objectName: "AG INCOME ТОО", cx: 620.05, cy: 610.54 },
    { id: "v3", objectName: "ЭКСПРЕСС ЛАЙН ТОО №217", cx: 620.05, cy: 576.15 },
    { id: "v4", objectName: "BATYR ИП №216", cx: 774.43, cy: 610.54 },
    { id: "v5", objectName: null, cx: 774.56, cy: 593.05 },
    { id: "v6", objectName: "ЭКСПРЕСС ЛАЙН ТОО №215", cx: 774.56, cy: 576.15 },
    { id: "v7", objectName: null, cx: 851.02, cy: 593.05 },
    { id: "v8", objectName: "ALISHA ИП  №201", cx: 851.02, cy: 610.54 },
    { id: "v9", objectName: null, cx: 928.64, cy: 593.05 },
    { id: "v10", objectName: null, cx: 928.64, cy: 576.15 },
    { id: "v11", objectName: null, cx: 1005.7, cy: 593.05 },
    { id: "v12", objectName: null, cx: 1005.7, cy: 576.15 },
    { id: "v13", objectName: null, cx: 1084.57, cy: 593.05 },
    { id: "v14", objectName: null, cx: 1084.57, cy: 610.54 },
    { id: "v15", objectName: null, cx: 1084.57, cy: 576.15 },
    { id: "v16", objectName: null, cx: 1174.9, cy: 593.05 },
    { id: "v17", objectName: null, cx: 1174.9, cy: 610.54 },
    { id: "v18", objectName: "Figura IT (Фигура Айти) ТОО №210", cx: 1253.28, cy: 610.54 },
    { id: "v19", objectName: null, cx: 1174.9, cy: 576.15 },
    { id: "v20", objectName: null, cx: 1253.28, cy: 593.05 },
    { id: "v21", objectName: null, cx: 1253.28, cy: 576.15 },
    { id: "v22", objectName: null, cx: 1331.23, cy: 593.05 },
    { id: "v23", objectName: "Figura IT (Фигура Айти) ТОО №212", cx: 1331.23, cy: 610.54 },
    { id: "v24", objectName: null, cx: 1331.23, cy: 576.15 },
    { id: "v25", objectName: null, cx: 1408.74, cy: 593.05 },
    { id: "v26", objectName: "Хайперван ТОО", cx: 1408.74, cy: 610.54 },
    { id: "v27", objectName: null, cx: 526.9, cy: 593.05 },
    { id: "v28", objectName: null, cx: 526.9, cy: 610.54 },
    { id: "v29", objectName: "BATYR ИП №221", cx: 526.9, cy: 576.15 },
    { id: "v30", objectName: null, cx: 295.43, cy: 593.05 },
    { id: "v31", objectName: null, cx: 139.75, cy: 593.05 },
    { id: "v32", objectName: "UMMED ТОО", cx: 139.75, cy: 576.15 },
    { id: "v33", objectName: null, cx: 59.71, cy: 593.05 },
    { id: "v34", objectName: null, cx: 59.71, cy: 576.15 },
    { id: "v35", objectName: "БУКЕНОВА ИП", cx: 928.64, cy: 610.54 },
    { id: "v36", objectName: "КРЕДО ИП", cx: 1005.7, cy: 610.54 },
  ],

  edges: [
    { id: "v7_to_v5", from: "v7", to: "v5" },
    { id: "v5_to_v1", from: "v5", to: "v1" },
    { id: "v1_to_v27", from: "v1", to: "v27" },
    { id: "v27_to_v30", from: "v27", to: "v30" },
    { id: "v30_to_v31", from: "v30", to: "v31" },
    { id: "v31_to_v33", from: "v31", to: "v33" },
    { id: "v7_to_v9", from: "v7", to: "v9" },
    { id: "v9_to_v11", from: "v9", to: "v11" },
    { id: "v11_to_v13", from: "v11", to: "v13" },
    { id: "v13_to_v16", from: "v13", to: "v16" },
    { id: "v16_to_v20", from: "v16", to: "v20" },
    { id: "v20_to_v22", from: "v20", to: "v22" },
    { id: "v22_to_v25", from: "v22", to: "v25" },
    { id: "v7_to_v8", from: "v7", to: "v8" },
    { id: "v9_to_v35", from: "v9", to: "v35" },
    { id: "v11_to_v36", from: "v11", to: "v36" },
    { id: "v20_to_v18", from: "v20", to: "v18" },
    { id: "v22_to_v23", from: "v22", to: "v23" },
    { id: "v25_to_v26", from: "v25", to: "v26" },
    { id: "v5_to_v6", from: "v5", to: "v6" },
    { id: "v5_to_v4", from: "v5", to: "v4" },
    { id: "v1_to_v3", from: "v1", to: "v3" },
    { id: "v1_to_v2", from: "v1", to: "v2" },
    { id: "v27_to_v29", from: "v27", to: "v29" },
    { id: "v31_to_v32", from: "v31", to: "v32" },
  ],
};
