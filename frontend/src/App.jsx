import React, { useState } from "react";
import "./App.css";

const ChurnPredictor = () => {

const [formData,setFormData]=useState({

tenure:"",
MonthlyCharges:"",
TotalCharges:"",
Contract:"",
InternetService:"",

Dependents:"No",
StreamingTV:"No",
TechSupport:"No",
PaymentMethod:"Electronic check"

});


const [predictionResult,setPredictionResult]=
useState(null);

const [isLoading,setIsLoading]=
useState(false);



const handleChange=(e)=>{

const {name,value}=e.target;

setFormData((prev)=>({

...prev,

[name]:value

}));

};



const handleSubmit=async(e)=>{

e.preventDefault();

setIsLoading(true);

setPredictionResult(null);

try{

const response=
await fetch(

"https://customer-churn-api-mngl.onrender.com/predict",

{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

}

);

const data=
await response.json();


setPredictionResult(

data.churn_prediction===1
? "Churn"
: "Stay"

);

}

catch(error){

console.log(
"FULL ERROR:",
error
);

alert(
"Prediction failed"
);

}

setIsLoading(false);

};



const Label=({
text,
required=false
})=>(

<label>

{text}

{required&&(

<span className="required">

*

</span>

)}

</label>

);



return(

<div className="main-container">

<div className="header">

<h1>

Customer Churn Predictor 

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

<Label
text="Tenure (Months)"
required
/>

<input

type="number"

name="tenure"

value={formData.tenure}

onChange={handleChange}

placeholder="e.g. 12"

required

/>

</div>





<div className="field">

<Label
text="Monthly Charges"
required
/>

<input

type="number"

name="MonthlyCharges"

value={formData.MonthlyCharges}

onChange={handleChange}

placeholder="e.g. 60"

required

/>

</div>




<div className="field">

<Label
text="Total Charges"
required
/>

<input

type="number"

name="TotalCharges"

value={formData.TotalCharges}

onChange={handleChange}

placeholder="e.g. 720"

required

/>

</div>





<div className="field">

<Label
text="Contract Type"
required
/>

<select

name="Contract"

value={formData.Contract}

onChange={handleChange}

required

>

<option value="">
Select Contract
</option>

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

<Label
text="Internet Service"
required
/>

<select

name="InternetService"

value={formData.InternetService}

onChange={handleChange}

required

>

<option value="">
Select Service
</option>

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

<Label text="Dependents"/>

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

<Label text="Streaming TV"/>

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

<Label text="Tech Support"/>

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

<Label text="Payment Method"/>

<select

name="PaymentMethod"

value={formData.PaymentMethod}

onChange={handleChange}

>

<option>

Electronic check

</option>

<option>

Credit card (automatic)

</option>

<option>

Mailed check

</option>

</select>

</div>


</div>

</div>



<button

className="predict-btn"

disabled={isLoading}

>

{

isLoading

?

"⏳ Analyzing Customer Data..."

:

"🔮 Predict Churn"

}

</button>


<p className="note">

First prediction may take a few seconds while server wakes up ☁️

</p>



{

predictionResult && (

<div

className={`result ${
predictionResult==="Stay"
? "stay"
: "churn"
}`}

>

{

predictionResult==="Stay"

?

"🎉 Customer likely to STAY"

:

"⚠️ Customer likely to CHURN"

}

</div>

)

}


</form>

</div>

</div>

)

};

export default ChurnPredictor;
