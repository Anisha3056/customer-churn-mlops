from fastapi import FastAPI
import joblib
import numpy as np
from app.schema import CustomerData
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://customer-churn-mlops-7yb5.onrender.com"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load model
model = joblib.load("models/model.pkl")
scaler = joblib.load("models/scaler.pkl")
columns = joblib.load("models/columns.pkl")
num_cols = joblib.load("models/num_cols.pkl")



@app.get("/")
def home():
    return {"message": "Churn Prediction API is running"}

@app.post("/predict")
def predict(data: CustomerData):
    try:
        avg_monthly_spend = data.TotalCharges / (data.tenure + 1)
        input_dict = {
            "tenure": data.tenure,
            "MonthlyCharges": data.MonthlyCharges,
            "TotalCharges": data.TotalCharges,
            "Contract": data.Contract,
            "InternetService": data.InternetService,
            "Dependents": data.Dependents,
            "StreamingTV": data.StreamingTV,
            "TechSupport": data.TechSupport,
            "PaymentMethod": data.PaymentMethod,
            "avg_monthly_spend": avg_monthly_spend
            }

        df = pd.DataFrame([input_dict])
        num_cols = joblib.load("models/num_cols.pkl")
        df = pd.get_dummies(df)
        df = df.reindex(columns=columns, fill_value=0)
        df[num_cols] = scaler.transform(df[num_cols])
        prediction = model.predict(df.values)[0]
        return {"churn_prediction": int(prediction)}

    except Exception as e:
        return {"error": str(e)}