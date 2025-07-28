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
    {id: "v1", objectName: null, cx: 617.33, cy: 591.06},
    {id: "v2", objectName: null, cx: 617.33, cy: 610.03},
    {id: "v3", objectName: null, cx: 617.33, cy: 574.15},
    {id: "v4", objectName: null, cx: 771.71, cy: 610.03},
    {id: "v5", objectName: null, cx: 771.84, cy: 591.06},
    {id: "v6", objectName: null, cx: 771.84, cy: 574.15},
    {id: "v7", objectName: null, cx: 691.8, cy: 591.06},
    {id: "v8", objectName: null, cx: 691.8, cy: 574.15},
    {id: "v9", objectName: null, cx: 848.29, cy: 591.06},
    {id: "v10", objectName: null, cx: 848.29, cy: 610.03},
    {id: "v11", objectName: null, cx: 1002.97, cy: 591.06},
    {id: "v12", objectName: null, cx: 1002.97, cy: 610.03},
    {id: "v13", objectName: null, cx: 1002.97, cy: 574.15},
    {id: "v14", objectName: null, cx: 925.91, cy: 591.06},
    {id: "v15", objectName: null, cx: 925.91, cy: 610.03},
    {id: "v16", objectName: null, cx: 1081.85, cy: 591.06},
    {id: "v17", objectName: null, cx: 1081.85, cy: 610.03},
    {id: "v18", objectName: null, cx: 1081.85, cy: 574.15},
    {id: "v19", objectName: null, cx: 1172.17, cy: 591.06},
    {id: "v20", objectName: "BATYR ИП №308", cx: 1172.17, cy: 610.03},
    {id: "v21", objectName: null, cx: 1250.56, cy: 610.03},
    {id: "v22", objectName: null, cx: 1250.56, cy: 591.06},
    {id: "v23", objectName: "Fruiteamood ИП №305", cx: 1250.56, cy: 574.15},
    {id: "v24", objectName: null, cx: 1328.5, cy: 591.06},
    {id: "v25", objectName: null, cx: 1328.5, cy: 610.03},
    {id: "v26", objectName: "Fruiteamood ИП №309", cx: 1328.5, cy: 574.15},
    {id: "v27", objectName: null, cx: 1406.01, cy: 591.06},
    {id: "v28", objectName: null, cx: 1406.01, cy: 574.57},
    {id: "v29", objectName: "Кабдулины ИП", cx: 1406.01, cy: 610.03},
    {id: "v30", objectName: null, cx: 524.17, cy: 591.06},
    {id: "v31", objectName: null, cx: 524.17, cy: 610.03},
    {id: "v32", objectName: null, cx: 445.51, cy: 610.03},
    {id: "v33", objectName: null, cx: 445.64, cy: 591.06},
    {id: "v34", objectName: null, cx: 445.64, cy: 574.15},
    {id: "v35", objectName: null, cx: 276, cy: 610.03},
    {id: "v36", objectName: null, cx: 276.13, cy: 591.06},
    {id: "v37", objectName: null, cx: 276.13, cy: 574.15},
    {id: "v38", objectName: null, cx: 136.96, cy: 610.03},
    {id: "v39", objectName: null, cx: 137.09, cy: 591.06},
    {id: "v40", objectName: null, cx: 137.09, cy: 574.15},
    {id: "v41", objectName: null, cx: 57.54, cy: 610.03},
    {id: "v42", objectName: null, cx: 57.68, cy: 591.06},
    {id: "v43", objectName: null, cx: 57.68, cy: 574.15},
  ],

  edges: [
    {id: "v9_to_v14", from: "v9", to: "v14"},
    {id: "v14_to_v11", from: "v14", to: "v11"},
    {id: "v11_to_v16", from: "v11", to: "v16"},
    {id: "v16_to_v19", from: "v16", to: "v19"},
    {id: "v19_to_v22", from: "v19", to: "v22"},
    {id: "v22_to_v24", from: "v22", to: "v24"},
    {id: "v24_to_v27", from: "v24", to: "v27"},
    {id: "v9_to_v5", from: "v9", to: "v5"},
    {id: "v5_to_v7", from: "v5", to: "v7"},
    {id: "v7_to_v1", from: "v7", to: "v1"},
    {id: "v1_to_v30", from: "v1", to: "v30"},
    {id: "v30_to_v33", from: "v30", to: "v33"},
    {id: "v33_to_v36", from: "v33", to: "v36"},
    {id: "v36_to_v39", from: "v36", to: "v39"},
    {id: "v39_to_v42", from: "v39", to: "v42"},
    {id: "v22_to_v23", from: "v22", to: "v23"},
    {id: "v24_to_v26", from: "v24", to: "v26"},
    {id: "v19_to_v20", from: "v19", to: "v20"},
    {id: "v27_to_v29", from: "v27", to: "v29"},
  ],
};
