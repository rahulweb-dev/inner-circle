"use client";

import { useState } from "react";

export default function OrderForm({ selectedProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    room: "",
    product: selectedProduct,
    qty: 1,
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ⭐ VALIDATION FUNCTION
  const validateOrder = (data) => {
    const newErrors = {};

    if (!data.name.trim()) newErrors.name = "Name is required";

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(data.phone)) {
      newErrors.phone = "Phone number must be 10 digits";
    }

    if (!data.room.trim()) newErrors.room = "Room number is required";

    if (data.qty < 1) newErrors.qty = "Quantity must be at least 1";

    return newErrors;
  };

  const updateField = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const changeQty = (type) => {
    setFormData((prev) => ({
      ...prev,
      qty: type === "inc" ? prev.qty + 1 : prev.qty > 1 ? prev.qty - 1 : 1,
    }));
  };

  const submitOrder = async () => {
    const validation = validateOrder(formData);

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    setErrors({});
    setLoading(true);

    const res = await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      alert("Order submitted successfully!");
      onClose();
    } else {
      alert("Failed to submit order!");
    }
  };

  return (
    <div className="bg-[#222] w-full max-w-md rounded-3xl p-6 shadow-2xl border border-[#e8c27d]/40">

      <h2 className="text-3xl text-center font-extrabold text-[#e8c27d] mb-6">
        Order – {selectedProduct}
      </h2>

      <div className="space-y-4">

        {/* Name */}
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-xl bg-[#333] text-white outline-none"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
        />
        {errors.name && <p className="text-red-400 text-sm">{errors.name}</p>}

        {/* Phone */}
        <input
          type="text"
          placeholder="Phone Number"
          className="w-full px-4 py-3 rounded-xl bg-[#333] text-white outline-none"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
          maxLength={10}
        />
        {errors.phone && <p className="text-red-400 text-sm">{errors.phone}</p>}

        {/* Room No */}
        <input
          type="text"
          placeholder="Room Number"
          className="w-full px-4 py-3 rounded-xl bg-[#333] text-white outline-none"
          value={formData.room}
          onChange={(e) => updateField("room", e.target.value)}
        />
        {errors.room && <p className="text-red-400 text-sm">{errors.room}</p>}

        {/* Quantity */}
        <div className="flex items-center justify-between bg-[#333] px-4 py-3 rounded-xl">
          <p className="font-semibold">Quantity</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => changeQty("dec")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500"
            >
              –
            </button>

            <span className="text-lg font-bold">{formData.qty}</span>

            <button
              onClick={() => changeQty("inc")}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-green-500"
            >
              +
            </button>
          </div>
        </div>

        {/* Selected Item */}
        <input
          type="text"
          readOnly
          value={`${selectedProduct} (x${formData.qty})`}
          className="w-full px-4 py-3 rounded-xl bg-[#444] text-white"
        />
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-8">
        <button
          onClick={onClose}
          className="w-1/2 py-3 bg-gray-500 rounded-xl"
        >
          Cancel
        </button>

        <button
          onClick={submitOrder}
          className="w-1/2 py-3 bg-[#e8c27d] text-black font-bold rounded-xl"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </div>
    </div>
  );
}
