import React, { useState } from "react";

function NestedForm() {
  const [formData, setFormData] = useState({
    user: {
      name: "",
      address: {
        street: "",
        city: "",
      },
    },
  });

  const [hasTyped, setHasTyped] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    const keys = name.split(".");
    const newData = { ...formData };
    let current = newData;

    setHasTyped(true);

    for (let i = 0; i < keys.length - 1; i++) {
      current[keys[i]] = { ...current[keys[i]] };
      current = current[keys[i]];
    }

    current[keys[keys.length - 1]] = value;
    setFormData(newData);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-white shadow-lg rounded-xl p-8 w-[400px] flex flex-col gap-4 border">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Nested Object Form 
        </h2>

        <label className="flex flex-col text-gray-700 font-medium">
          Name:
          <input
            name="user.name"
            type="text"
            value={formData.user.name}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-medium">
          Street:
          <input
            name="user.address.street"
            type="text"
            value={formData.user.address.street}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>

        <label className="flex flex-col text-gray-700 font-medium">
          City:
          <input
            name="user.address.city"
            type="text"
            value={formData.user.address.city}
            onChange={handleChange}
            className="border rounded-lg px-3 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-400"
          />
        </label>
      </div>

     
      {hasTyped && (
        <div className="bg-gray-50 shadow-md rounded-xl p-6 w-[400px] mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Current Object
          </h3>
          <pre className="bg-white p-3 rounded-lg text-gray-800 text-sm border">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}

export default NestedForm;
