"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  membershipType: string;
}

const MembershipFormView: React.FC = () => {
  const router = useRouter();

  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    membershipType: "individual",
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          membershipType: formData.membershipType,
          name: formData.name,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to submit membership");
      }

      // Redirect to success page
      router.push("/membership-success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-8 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-purple-900">
        Membership Form
      </h2>

      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">{error}</div>
      )}

      {/* ... your existing form fields ... */}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 bg-purple-600 text-white font-semibold rounded-md 
          hover:bg-purple-700 transition duration-200 ease-in-out
          ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {loading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default MembershipFormView;
