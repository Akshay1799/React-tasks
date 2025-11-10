import React, { useState } from "react";


const treeData = [
  {
    id: 1,
    name: "Documents",
    children: [
      {
        id: 2,
        name: "Work",
        children: [
          { id: 3, name: "Report.pdf" },
          { id: 4, name: "Invoice.docx" },
        ],
      },
      {
        id: 5,
        name: "Personal",
        children: [
          { id: 6, name: "Resume.pdf" },
          { id: 7, name: "Notes.txt" },
        ],
      },
    ],
  },
  {
    id: 8,
    name: "Pictures",
    children: [
      { id: 9, name: "Vacation.png" },
      { id: 10, name: "Family.jpg" },
    ],
  },
];

const TreeNode = ({ node, expandedNodes, toggleNode }) => {
  const isExpanded = expandedNodes.includes(node.id);

  return (
    <div className="ml-4 my-1">
      <div
        className={`flex items-center gap-2 cursor-pointer select-none ${
          node.children ? "font-medium text-blue-700" : "text-gray-700"
        }`}
        onClick={() => node.children && toggleNode(node.id)}
      >
        {node.children ? (
          <span>{isExpanded ? "📂" : "📁"}</span>
        ) : (
          <span>📄</span>
        )}
        <span>{node.name}</span>
      </div>

      {isExpanded && node.children && (
        <div className="ml-6 border-l pl-3 border-gray-300">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              expandedNodes={expandedNodes}
              toggleNode={toggleNode}
            />
          ))}
        </div>
      )}
    </div>
  );
};

function TreeMenu() {
  const [expandedNodes, setExpandedNodes] = useState([]);

  const toggleNode = (id) => {
    if (expandedNodes.includes(id)) {
      setExpandedNodes(expandedNodes.filter((nodeId) => nodeId !== id));
    } else {
      setExpandedNodes([...expandedNodes, id]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-fit p-8">
      <div className="bg-white shadow-lg rounded-xl p-6 w-[400px] border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Tree Menu Toggle
        </h2>

        {treeData.map((node) => (
          <TreeNode
            key={node.id}
            node={node}
            expandedNodes={expandedNodes}
            toggleNode={toggleNode}
          />
        ))}
      </div>
    </div>
  );
}

export default TreeMenu;
