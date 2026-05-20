import React, { useState } from "react";

const ChurnPredictor = () => {
  // Initialize state with default values for optional fields and empty strings for mandatory ones
  const [formData, setFormData] = useState({
    tenure: "",
    MonthlyCharges: "",
    TotalCharges: "",
    Contract: "",
    InternetService: "",
    Dependents: "No",
    StreamingTV: "No",
    TechSupport: "No",
    PaymentMethod: "Electronic check",
  });

  const [predictionResult, setPredictionResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {

  e.preventDefault();

  setIsLoading(true);

  try {

    const response = await fetch(
      "https://customer-churn-api-mngl.onrender.com/predict",
      {

        method:"POST",

        headers:{
          "Content-Type":"application/json"
        },

        body: JSON.stringify(formData)

      }
    );

    const data=await response.json();

    setPredictionResult(
      data.churn_prediction===1
      ? "Churn"
      : "Stay"
    );

  }

  catch(error){

 console.log("FULL ERROR:",error);

 alert(
   "Prediction failed. Open browser console."
 );

}

  setIsLoading(false);

};

  // Helper component for labels with optional red stars
  const Label = ({ text, required }) => (
    <label className="block text-left text-sm font-bold text-gray-700 mb-2">
      {text}
      {required && <span className="text-red-500 ml-1">*</span>}
    </label>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-2xl w-full">
        
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 mb-2 drop-shadow-sm">
            Customer Churn Predictor
          </h1>
          <p className="text-gray-500 text-lg font-medium">
            Enter customer details to predict whether the customer is likely to stay or churn.
          </p>
        </div>

        {/* Form Section */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Mandatory Fields */}
            <div className="flex flex-col text-left">
              <Label text="Tenure (Months)" required />
              <input
                type="number"
                step="any"
                name="tenure"
                value={formData.tenure}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
                placeholder="e.g. 12"
              />
            </div>

            <div className="flex flex-col text-left">
              <Label text="Monthly Charges ($)" required />
              <input
                type="number"
                step="any"
                name="MonthlyCharges"
                value={formData.MonthlyCharges}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
                placeholder="e.g. 59.99"
              />
            </div>

            <div className="flex flex-col text-left">
              <Label text="Total Charges ($)" required />
              <input
                type="number"
                step="any"
                name="TotalCharges"
                value={formData.TotalCharges}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none"
                placeholder="e.g. 719.88"
              />
            </div>

            <div className="flex flex-col text-left">
              <Label text="Contract Type" required />
              <select
                name="Contract"
                value={formData.Contract}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none bg-white"
              >
                <option value="" disabled>Select Contract</option>
                <option value="Month-to-month">Month-to-month</option>
                <option value="One year">One year</option>
                <option value="Two year">Two year</option>
              </select>
            </div>

            <div className="flex flex-col text-left md:col-span-2">
              <Label text="Internet Service" required />
              <select
                name="InternetService"
                value={formData.InternetService}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-purple-300 focus:border-purple-500 transition-all outline-none bg-white"
              >
                <option value="" disabled>Select Internet Service</option>
                <option value="DSL">DSL</option>
                <option value="Fiber optic">Fiber optic</option>
                <option value="No">No</option>
              </select>
            </div>

            {/* Optional Fields Divider */}
            <div className="md:col-span-2 mt-4 mb-2">
              <h3 className="text-xl font-bold text-gray-700 border-b-2 border-purple-100 pb-2">
                Additional Information (Optional)
              </h3>
            </div>

            {/* Optional Fields */}
            <div className="flex flex-col text-left">
              <Label text="Dependents" required={false} />
              <select
                name="Dependents"
                value={formData.Dependents}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none bg-white"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="flex flex-col text-left">
              <Label text="Streaming TV" required={false} />
              <select
                name="StreamingTV"
                value={formData.StreamingTV}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none bg-white"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="flex flex-col text-left">
              <Label text="Tech Support" required={false} />
              <select
                name="TechSupport"
                value={formData.TechSupport}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none bg-white"
              >
                <option value="No">No</option>
                <option value="Yes">Yes</option>
              </select>
            </div>

            <div className="flex flex-col text-left">
              <Label text="Payment Method" required={false} />
              <select
                name="PaymentMethod"
                value={formData.PaymentMethod}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:ring-4 focus:ring-pink-300 focus:border-pink-500 transition-all outline-none bg-white"
              >
                <option value="Electronic check">Electronic check</option>
                <option value="Credit card">Credit card</option>
                <option value="Mailed check">Mailed check</option>
              </select>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-6 mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 rounded-xl shadow-lg transform transition hover:-translate-y-1 hover:shadow-2xl disabled:opacity-70 disabled:cursor-not-allowed text-xl"
            >
              {isLoading ? "Analyzing Customer Data..." : " Predict Churn"}
            </button>
             <p className="text-sm text-gray-500 mt-3 text-center">
              First prediction may take a few seconds while server wakes up ☁️
              </p>
          </div>
        </form>

        {/* Prediction Result Display */}
        {predictionResult && (
          <div className={`mt-8 p-6 rounded-2xl text-center shadow-inner ${
            predictionResult === "Stay" 
              ? "bg-green-100 border-2 border-green-400" 
              : "bg-red-100 border-2 border-red-400"
          }`}>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Prediction Result:</h2>
            <p className={`text-3xl font-extrabold ${
              predictionResult === "Stay" ? "text-green-600" : "text-red-600"
            }`}>
              {predictionResult === "Stay" 
                ? "🎉 The customer is likely to STAY!" 
                : "⚠️ The customer is likely to CHURN!"}
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

export default ChurnPredictor;