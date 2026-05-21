return (

<div className="main-container">

<div className="header">

<h1>
Customer Churn Predictor 🌱
</h1>

<p>

Enter customer details to predict whether the customer is likely to stay or churn.

</p>

</div>

<div className="card">

<h2 className="section-title">

Customer Information

</h2>


<form onSubmit={handleSubmit}>

<div className="form-grid">


<div className="field">

<label>

Tenure

<span className="required">*</span>

</label>

<input
type="number"
name="tenure"
value={formData.tenure}
onChange={handleChange}
required
/>

</div>



<div className="field">

<label>

Monthly Charges

<span className="required">*</span>

</label>

<input
type="number"
name="MonthlyCharges"
value={formData.MonthlyCharges}
onChange={handleChange}
required
/>

</div>


<div className="field">

<label>

Total Charges

<span className="required">*</span>

</label>

<input
type="number"
name="TotalCharges"
value={formData.TotalCharges}
onChange={handleChange}
required
/>

</div>



<div className="field">

<label>

Contract Type

<span className="required">*</span>

</label>

<select
name="Contract"
value={formData.Contract}
onChange={handleChange}
required
>

<option>
Month-to-month
</option>

<option>
One year
</option>

<option>
Two year
</option>

</select>

</div>


<div className="field">

<label>

Internet Service

<span className="required">*</span>

</label>

<select
name="InternetService"
value={formData.InternetService}
onChange={handleChange}
required
>

<option>
Fiber optic
</option>

<option>
DSL
</option>

<option>
No
</option>

</select>

</div>

</div>


<div className="optional-section">

<h3>

Additional Information

<span className="optional">

(Optional)

</span>

</h3>


<div className="form-grid">

<div className="field">

<label>
Dependents
</label>

<select
name="Dependents"
value={formData.Dependents}
onChange={handleChange}
>

<option>No</option>

<option>Yes</option>

</select>

</div>


<div className="field">

<label>
Streaming TV
</label>

<select
name="StreamingTV"
value={formData.StreamingTV}
onChange={handleChange}
>

<option>No</option>

<option>Yes</option>

</select>

</div>


<div className="field">

<label>
Tech Support
</label>

<select
name="TechSupport"
value={formData.TechSupport}
onChange={handleChange}
>

<option>No</option>

<option>Yes</option>

</select>

</div>


<div className="field">

<label>
Payment Method
</label>

<select
name="PaymentMethod"
value={formData.PaymentMethod}
onChange={handleChange}
>

<option>Electronic check</option>

<option>Credit card</option>

<option>Mailed check</option>

</select>

</div>

</div>

</div>


<button
className="predict-btn"
disabled={isLoading}
>

{isLoading
? "⏳ Analyzing Customer Data..."
: "🔮 Predict Churn"}

</button>


<p className="note">

First prediction may take a few seconds while server wakes up ☁️

</p>


{predictionResult && (

<div className={`result ${
predictionResult==="Stay"
? "stay"
: "churn"
}`}>

{
predictionResult==="Stay"

? "🎉 Customer likely to STAY"

: "⚠️ Customer likely to CHURN"

}

</div>

)}

</form>

</div>

</div>

)