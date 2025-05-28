import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  MiniMap,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
} from "reactflow";
import "./WorkflowCanvas.css";
import "reactflow/dist/style.css";

const WorkflowCanvas = ({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onNodeSelect,
  onAddStage,
}) => {
  const handleNodesChange = useCallback(
    (changes) => onNodesChange(applyNodeChanges(changes, nodes)),
    [nodes, onNodesChange]
  );

  const handleEdgesChange = useCallback(
    (changes) => onEdgesChange(applyEdgeChanges(changes, edges)),
    [edges, onEdgesChange]
  );

  const handleConnect = useCallback(
    (params) => onEdgesChange(addEdge({ ...params, animated: true }, edges)),
    [edges, onEdgesChange]
  );

  const handleNodeClick = useCallback(
    (e, node) => {
      onNodeSelect({ ...node, selectedAt: Date.now() }); // force rerender on select
    },
    [onNodeSelect]
  );

  return (
    <div className="workflow-canvas-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={handleConnect}
        onNodeClick={handleNodeClick}
        fitView
        fitViewOptions={{ padding: 0.7 }}
      >
        <Background gap={20} color="#e0e0e0" />
        <MiniMap nodeColor="#4680fe" />
        <Controls />
      </ReactFlow>
      <button className="workflow-canvas-add-btn" onClick={onAddStage}>
        + Add Stage
      </button>
    </div>
  );
};

export default WorkflowCanvas;
