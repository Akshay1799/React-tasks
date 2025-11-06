import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);


  const handleIncrement = () => {
    setHistory([count, ...history].slice(0, 5));
    setCount(count + 1);
  };


  const handleDecrement = () => {
    setHistory([count, ...history].slice(0, 5));
    setCount(count - 1);
  };


  const handleUndo = () => {
    if (history.length === 0) return;
    const [previous, ...rest] = history;
    setCount(previous);
    setHistory(rest);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px] flex flex-col items-center gap-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          🔄 Undoable Counter
        </h2>


        <p className="text-4xl font-bold text-blue-600">{count}</p>


        <div className="flex gap-4">
          <button
            onClick={handleDecrement}
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-600"
          >
            -
          </button>
          <button
            onClick={handleIncrement}
            className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600"
          >
            +
          </button>
          <button
            onClick={handleUndo}
            disabled={history.length === 0}
            className="bg-gray-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-gray-600 disabled:opacity-50"
          >
            Undo
          </button>
        </div>


        <div className="w-full text-left mt-4">
          <h3 className="text-gray-700 font-semibold mb-1">History (last 5):</h3>
          {history.length === 0 ? (
            <p className="text-gray-400 text-sm">No history yet.</p>
          ) : (
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              {history.map((h, index) => (
                <li key={index}>Previous count: {h}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Counter;
