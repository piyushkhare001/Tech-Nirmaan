import React from "react";
import ReactFlow from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  { id: "1", type: "input", data: { label: "🚀 React Roadmap" }, position: { x: 500, y: 50 }, style: { background: "#4A90E2", color: "white", fontWeight: "bold", padding: 10, borderRadius: 8 } },
  { id: "2", data: { label: "📌 JavaScript & ES6+" }, position: { x: 250, y: 150 }, style: { background: "#E94E77", color: "white", borderRadius: 6, padding: 8 } },
  { id: "3", data: { label: "⚛️ React Basics" }, position: { x: 500, y: 150 }, style: { background: "#F39C12", color: "white", borderRadius: 6, padding: 8 } },
  { id: "4", data: { label: "💡 React Advanced" }, position: { x: 750, y: 150 }, style: { background: "#8E44AD", color: "white", borderRadius: 6, padding: 8 } },
  { id: "5", data: { label: "🗄️ State Management (Redux, Context)" }, position: { x: 250, y: 250 }, style: { background: "#27AE60", color: "white", borderRadius: 6, padding: 8 } },
  { id: "6", data: { label: "🔀 React Router" }, position: { x: 500, y: 250 }, style: { background: "#3498DB", color: "white", borderRadius: 6, padding: 8 } },
  { id: "7", data: { label: "⚡ Performance Optimization" }, position: { x: 750, y: 250 }, style: { background: "#E67E22", color: "white", borderRadius: 6, padding: 8 } },
  { id: "8", data: { label: "🌎 Next.js & SSR" }, position: { x: 1000, y: 250 }, style: { background: "#34495E", color: "white", borderRadius: 6, padding: 8 } },
  { id: "9", data: { label: "🧪 Testing (Jest, React Testing Library)" }, position: { x: 250, y: 350 }, style: { background: "#D35400", color: "white", borderRadius: 6, padding: 8 } },
  { id: "10", data: { label: "🚀 Deployment & CI/CD" }, position: { x: 500, y: 350 }, style: { background: "#2C3E50", color: "white", borderRadius: 6, padding: 8 } },
  { id: "11", data: { label: "🎨 UI Libraries (Material-UI, Tailwind)" }, position: { x: 750, y: 350 }, style: { background: "#1ABC9C", color: "white", borderRadius: 6, padding: 8 } },
  { id: "12", data: { label: "🔗 API Integration (REST, GraphQL)" }, position: { x: 1000, y: 350 }, style: { background: "#C0392B", color: "white", borderRadius: 6, padding: 8 } },
  { id: "13", data: { label: "🛠️ Build Tools (Webpack, Vite)" }, position: { x: 500, y: 450 }, style: { background: "#7F8C8D", color: "white", borderRadius: 6, padding: 8 } }
];

const edges = [
  { id: "e1-2", source: "1", target: "2" },
  { id: "e1-3", source: "1", target: "3" },
  { id: "e1-4", source: "1", target: "4" },
  { id: "e3-5", source: "3", target: "5" },
  { id: "e3-6", source: "3", target: "6" },
  { id: "e4-7", source: "4", target: "7" },
  { id: "e4-8", source: "4", target: "8" },
  { id: "e5-9", source: "5", target: "9" },
  { id: "e7-10", source: "7", target: "10" },
  { id: "e4-11", source: "4", target: "11" },
  { id: "e4-12", source: "4", target: "12" },
  { id: "e4-13", source: "4", target: "13" }
];

const RoadmapFlowchart = () => {
  return (
    <div style={{ height: "90vh", width: "100%", backgroundColor: "#1E1E1E", borderRadius: "10px", padding: "10px" }}>
      <ReactFlow 
        nodes={nodes} 
        edges={edges} 
        fitView 
        nodesDraggable={false} 
        nodesConnectable={false} 
        elementsSelectable={false} 
      />
    </div>
  );
};

export default RoadmapFlowchart;