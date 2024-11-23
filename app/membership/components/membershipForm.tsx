// app/membership/components/membershipForm.tsx
"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormikProvider, useFormik } from "formik";

const MembershipFormView = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const form = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      subscriptionType: "",
    },
    onSubmit: (values) => {
      // Do something
    },
  });

  return (
    <FormikProvider value={form}>
      <form onSubmit={form.handleSubmit} className="membership-form">
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={form.values.firstname}
            onChange={form.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={form.values.lastname}
            onChange={form.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="subscriptionType">Membership Type:</label>
          <select
            id="subscriptionType"
            name="subscriptionType"
            value={form.values.subscriptionType}
            onChange={form.handleChange}
          >
            <option value="basic">Basic</option>
            <option value="premium">Premium</option>
            <option value="vip">VIP</option>
          </select>
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Join Now"}
        </button>
        {successMessage && <p className="success-message">{successMessage}</p>}
      </form>
    </FormikProvider>
  );
};

export default MembershipFormView;
