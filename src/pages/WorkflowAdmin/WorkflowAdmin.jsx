import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './WorkflowAdmin.css';
import WorkflowCanvas from './WorkflowCanvas/WorkflowCanvas';
import WorkflowConfigPanel from './WorkflowConfigPanel/WorkflowConfigPanel';
import WorkflowDetailsSidebar from './WorkflowListSidebar/WorkflowListSidebar';

const WorkflowAdmin = () => {
  const location = useLocation();
  const mapping = location.state?.mapping;

  const [workflows, setWorkflows] = useState({
    [mapping.workflow]: {
      nodes: [
        { id: '1', type: 'default', data: { label: 'New' }, position: { x: 100, y: 100 } },
        { id: '2', type: 'default', data: { label: 'Assigned' }, position: { x: 300, y: 100 } },
        { id: '3', type: 'default', data: { label: 'Resolved' }, position: { x: 500, y: 100 } },
      ],
      edges: [
        { id: 'e1-2', source: '1', target: '2', animated: true },
        { id: 'e2-3', source: '2', target: '3', animated: true },
      ],
    },
  });

  const [selectedNodeId, setSelectedNodeId] = useState(null);
  const selectedWorkflow = workflows[mapping.workflow];
  const selectedNode = selectedWorkflow.nodes.find((n) => n.id === selectedNodeId);

  const updateNodes = (newNodes) => {
    setWorkflows((prev) => ({
      ...prev,
      [mapping.workflow]: {
        ...prev[mapping.workflow],
        nodes: newNodes,
      },
    }));
  };

  const updateEdges = (newEdges) => {
    setWorkflows((prev) => ({
      ...prev,
      [mapping.workflow]: {
        ...prev[mapping.workflow],
        edges: newEdges,
      },
    }));
  };

  const handleAddStage = () => {
    const currentNodes = selectedWorkflow.nodes;
    const newId = `${currentNodes.length + 1}`;
    const newNode = {
      id: newId,
      type: 'default',
      data: { label: `Stage ${newId}` },
      position: {
        x: 100 + currentNodes.length * 180,
        y: 200 + (currentNodes.length % 2) * 80,
      },
    };
    updateNodes([...currentNodes, newNode]);
  };

  const handleNodeSelect = (node) => {
    setSelectedNodeId(node.id);
  };

  return (
    <div className="workflow-admin-page">
      {/* Header Section Showing Mapping Info */}
     <WorkflowDetailsSidebar mapping={mapping} />


      {/* Workflow canvas and config panel */}
      <WorkflowCanvas
        nodes={selectedWorkflow.nodes}
        edges={selectedWorkflow.edges}
        onNodesChange={updateNodes}
        onEdgesChange={updateEdges}
        onNodeSelect={handleNodeSelect}
        onAddStage={handleAddStage}
      />
      <WorkflowConfigPanel selectedNode={selectedNode} />
    </div>
  );
};

export default WorkflowAdmin;
