import React, { useState } from "react";

function Form() {
  const [fields, setFields] = useState([]);

  const addField = () => {
    setFields([...fields, { id: Date.now(), value: "" }]);
  };

  const handleChange = (id, newValue) => {
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, value: newValue } : field
      )
    );
  };

  const removeField = (id) => {
    setFields(fields.filter((field) => field.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px] flex flex-col gap-6">
        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Dynamic Form Builder
        </h2>

        <button
          onClick={addField}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium"
        >
          + Add Field
        </button>

        <div className="flex flex-col gap-3">
          {fields.map((field, index) => (
            <div
              key={field.id}
              className="flex justify-between items-center gap-3 border px-3 py-2 rounded-lg"
            >
              <input
                type="text"
                placeholder={`Field ${index + 1}`}
                value={field.value}
                onChange={(e) => handleChange(field.id, e.target.value)}
                className="bg-gray-100 rounded-lg px-3 py-1 w-full outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                onClick={() => removeField(field.id)}
                className="text-red-500 hover:cursor-pointer font-semibold"
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        {/* Display Values */}
        {fields.length > 0 && (
          <div className="bg-gray-100 rounded-lg p-4">
            <h3 className="font-semibold text-gray-700 mb-2">Current Values:</h3>
            <pre className="bg-white p-2 rounded text-sm text-gray-800 border">
              {JSON.stringify(fields.map((f) => f.value), null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}

export default Form;
