"use client";
import React, { useState, useEffect } from "react";
import { InputField } from "../components/ui/checkout/Inputfield";
import { SelectField } from "../components/ui/checkout/SelectField";

interface CheckoutFormData {
  name: string;
  address: string;
  phone: string;
  pincode: string;
  state: string;
  city: string;
  paymentMode: string;
}

const initialFormData: CheckoutFormData = {
  name: "",
  address: "",
  phone: "",
  pincode: "",
  state: "",
  city: "",
  paymentMode: "",
};

const Checkout: React.FC = () => {
  const [formData, setFormData] = useState<CheckoutFormData>(initialFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  useEffect(() => {
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== ""
    );
    setIsFormValid(isValid);
  }, [formData]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setShowSuccessMessage(true);
    }
  };

  if (showSuccessMessage) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-green-600 mb-4">
            Order successfully placed!
          </h2>
          <p className="text-gray-600">Thank you for your purchase.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium mb-6">Checkout</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto flex flex-col gap-1 sm:gap-4"
      >
        <InputField
          label="Name"
          type="text"
          id="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        <InputField
          label="Address"
          type="text"
          id="address"
          value={formData.address}
          onChange={handleInputChange}
        />
        <InputField
          label="Phone"
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <InputField
          label="Pin Code"
          type="text"
          id="pincode"
          value={formData.pincode}
          onChange={handleInputChange}
        />
        <SelectField
          label="State"
          id="state"
          value={formData.state}
          onChange={handleInputChange}
          options={[
            { value: "Auranachal Pradesh", label: "Auranachal Pradesh" },
            { value: "Assam", label: "Assam" },
            { value: "Andhra Pradesh", label: "Andhra Pradesh" },
            { value: "Delhi", label: "Delhi" },
            { value: "Madhya Pradesh", label: "Madhya Pradesh" },
            { value: "Karnataka", label: "Karnataka" },
          ]}
        />
        <InputField
          label="City"
          type="text"
          id="city"
          value={formData.city}
          onChange={handleInputChange}
        />
        <SelectField
          label="Payment Mode"
          id="paymentMode"
          value={formData.paymentMode}
          onChange={handleInputChange}
          options={[
            { value: "credit", label: "Credit Card" },
            { value: "debit", label: "Debit Card" },
            { value: "upi", label: "UPI" },
            { value: "cod", label: "Cash on Delivery" },
          ]}
        />
        <button
          type="submit"
          disabled={!isFormValid}
          className={`w-full py-4 px-4 border border-transparent rounded-xl shadow-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none ${
            !isFormValid ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;
