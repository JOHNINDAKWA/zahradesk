import React, { useState } from 'react';
import './WorkflowAdmin.css';
import WorkflowListSidebar from './WorkflowListSidebar/WorkflowListSidebar';
import WorkflowCanvas from './WorkflowCanvas/WorkflowCanvas';
import WorkflowConfigPanel from './WorkflowConfigPanel/WorkflowConfigPanel';

const WorkflowAdmin = () => {
  const [workflows, setWorkflows] = useState({
    'IT Support': {
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

  const [selectedWorkflowName, setSelectedWorkflowName] = useState('IT Support');
  const [selectedNodeId, setSelectedNodeId] = useState(null);

  const selectedWorkflow = workflows[selectedWorkflowName] || { nodes: [], edges: [] };
  const selectedNode = selectedWorkflow.nodes.find((n) => n.id === selectedNodeId);

  const handleAddWorkflow = () => {
    const newName = `Workflow ${Object.keys(workflows).length + 1}`;
    setWorkflows({
      ...workflows,
      [newName]: {
        nodes: [
          {
            id: '1',
            type: 'default',
            data: { label: 'Start' },
            position: { x: 100, y: 100 },
          },
        ],
        edges: [],
      },
    });
    setSelectedWorkflowName(newName);
    setSelectedNodeId(null);
  };

  const handleSelectWorkflow = (name) => {
    setSelectedWorkflowName(name);
    setSelectedNodeId(null);
  };

  const handleNodeSelect = (node) => {
    setSelectedNodeId(node.id);
  };

  const updateNodes = (newNodes) => {
    setWorkflows((prev) => ({
      ...prev,
      [selectedWorkflowName]: {
        ...prev[selectedWorkflowName],
        nodes: newNodes,
      },
    }));
  };

  const updateEdges = (newEdges) => {
    setWorkflows((prev) => ({
      ...prev,
      [selectedWorkflowName]: {
        ...prev[selectedWorkflowName],
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

  return (
    <div className="workflow-admin-page">
      <WorkflowListSidebar
        workflows={Object.keys(workflows)}
        selected={selectedWorkflowName}
        onSelect={handleSelectWorkflow}
        onAddWorkflow={handleAddWorkflow}
      />
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
