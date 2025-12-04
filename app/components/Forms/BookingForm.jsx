"use client";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function BookingForm({ room, onClose }) {
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    adults: "1",
    children: "0",
    roomTitle: room?.title || "",
    roomType: room?.type || "",
    category: room?.category || "",
    price: room?.price || "",
  });

  const [loading, setLoading] = useState(false);

  // VALIDATION FUNCTION
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Phone must be a 10-digit number";
    }

    if (!formData.checkIn) newErrors.checkIn = "Check-in date required";
    if (!formData.checkOut) newErrors.checkOut = "Check-out date required";

    if (formData.checkIn && formData.checkOut) {
      const inDate = new Date(formData.checkIn);
      const outDate = new Date(formData.checkOut);

      if (inDate >= outDate) {
        newErrors.checkOut = "Check-out must be after check-in";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // true = no errors
  };

  const handleChange = (e) => {
    setErrors({});
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // stop if validation fails

    setLoading(true);

    try {
      const res = await fetch("/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Booking submitted successfully!");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">

        {/* CLOSE BUTTON */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-700">
          <FaTimes size={20} />
        </button>

        <h3 className="text-xl font-semibold mb-1">{room.title}</h3>
        <p className="text-sm text-gray-600 mb-4">{room.desc}</p>

        {/* FORM */}
        <form className="space-y-3" onSubmit={handleSubmit}>

          {/* NAME */}
          <input
            name="name"
            className={`w-full border p-3 rounded ${errors.name && "border-red-500"}`}
            placeholder="Your Name"
            onChange={handleChange}
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            className={`w-full border p-3 rounded ${errors.email && "border-red-500"}`}
            placeholder="Email Address"
            onChange={handleChange}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          {/* PHONE */}
          <input
            name="phone"
            type="tel"
            className={`w-full border p-3 rounded ${errors.phone && "border-red-500"}`}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}


          {/* DATES */}
          <div className="flex gap-3">
            <div className="w-1/2">
              <input
                name="checkIn"
                type="date"
                className={`w-full border p-3 rounded ${errors.checkIn && "border-red-500"}`}
                onChange={handleChange}
              />
              {errors.checkIn && <p className="text-red-500 text-sm">{errors.checkIn}</p>}
            </div>

            <div className="w-1/2">
              <input
                name="checkOut"
                type="date"
                className={`w-full border p-3 rounded ${errors.checkOut && "border-red-500"}`}
                onChange={handleChange}
              />
              {errors.checkOut && <p className="text-red-500 text-sm">{errors.checkOut}</p>}
            </div>
          </div>

          {/* ADULTS & CHILDREN */}
          <div className="flex gap-3">
            <select
              name="adults"
              className="w-1/2 border p-3 rounded"
              onChange={handleChange}
            >
              <option>1</option><option>2</option><option>3</option>
            </select>

            <select
              name="children"
              className="w-1/2 border p-3 rounded"
              onChange={handleChange}
            >
              <option>0</option><option>1</option><option>2</option>
            </select>
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-black text-white py-3 rounded font-semibold hover:opacity-90 transition"
          >
            {loading ? "Submitting..." : `Confirm Booking — ${room.price}`}
          </button>

        </form>
      </div>
    </div>
  );
}
