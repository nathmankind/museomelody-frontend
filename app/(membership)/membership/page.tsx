"use client";

import { useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  membershipType: string;
}
function MembershipPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    membershipType: "individual",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Logic to send form data to your backend
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Left Column: Image with Text */}
      <div className="relative md:w-1/2 flex items-center">
        <img
          src="/images/museo-melody-hero.webp" // Replace with your image path
          alt="Museum"
          className="object-cover w-full h-screen md:h-full"
        />
        <div className="absolute inset-0 bg-black opacity-40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-3xl md:text-4xl font-bold text-center">
            Join Our Museum Family
          </h1>
          <p className="mt-4 text-md md:text-lg text-center">
            Explore art and history like never before. Become a member today and
            enjoy exclusive benefits!
          </p>
        </div>
      </div>

      {/* Right Column: Membership Form */}
      <div className="md:w-1/2 flex items-center justify-center py-6 px-3 md:p-10">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-lg"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-900">
            Membership Form
          </h2>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 p-3"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 p-3"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 p-3"
            />
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium mb-2 text-gray-700">
              Membership Type
            </label>
            <select
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-purple-500 p-3"
            >
              <option value="individual">Individual</option>
              <option value="family">Family</option>
              <option value="student">Student</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-200 ease-in-out"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MembershipPage;
