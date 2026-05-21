# Customer Churn Prediction MLOps Project 

An end-to-end MLOps project that predicts customer churn using Machine Learning, FastAPI, React, MLflow, CI/CD and cloud deployment.

Live prediction system deployed with a React frontend and FastAPI backend.

---

## Live Demo

Frontend:

https://customer-churn-mlops-7yb5.onrender.com

Backend API:

https://customer-churn-api-mngl.onrender.com/docs

---

## Project Overview

Customer churn prediction helps businesses identify customers who are likely to leave.

This project builds a complete production-style ML pipeline:

- Data preprocessing
- Feature engineering
- Model training
- Model comparison
- Experiment tracking
- API serving
- Frontend application
- Deployment
- CI automation

---

## Tech Stack

### Machine Learning

- Python
- Pandas
- NumPy
- Scikit-learn
- Logistic Regression
- SMOTE
- MLflow

### Backend

- FastAPI
- Uvicorn
- Pydantic

### Frontend

- React
- Vite
- CSS

### Deployment

- Render

### CI/CD

- GitHub Actions

---

## Workflow Architecture

```text
Dataset
   ↓
Data Cleaning
   ↓
Feature Engineering
   ↓
SMOTE balancing
   ↓
Model Training
   ↓
Model Evaluation
   ↓
MLflow Tracking
   ↓
Save Model (.pkl)
   ↓
FastAPI Backend
   ↓
React Frontend
   ↓
Render Deployment
```

## Features Implemented

✔ Feature Engineering

✔ Class imbalance handling using SMOTE

✔ Model comparison

✔ MLflow experiment tracking

✔ Saved trained model

✔ FastAPI prediction API

✔ Dynamic user inputs

✔ Optional customer fields

✔ Responsive React UI

✔ Backend deployment

✔ Frontend deployment

✔ GitHub Actions CI pipeline

---

## Model Performance

Best Model:

Logistic Regression

F1 Score:

0.6086

Reason for selection:

- Better generalization
- Outperformed XGBoost
- Stable performance

---

## API Input Example

```json
{
"tenure":10,
"MonthlyCharges":150,
"TotalCharges":1000,
"Contract":"One year",
"InternetService":"Fiber optic",
"Dependents":"Yes",
"StreamingTV":"No",
"TechSupport":"No",
"PaymentMethod":"Electronic check"
}
```

---

## Running Locally

Clone repository:

```bash
git clone https://github.com/Anisha3056/customer-churn-mlops.git
```

Install backend:

```bash
pip install -r requirements.txt
```

Run backend:

```bash
uvicorn app.main:app --reload
```

Run frontend:

```bash
cd frontend
npm install
npm run dev
```

---

## Future Improvements

- AWS deployment
- Model monitoring with Evidently AI
- Drift detection
- Docker containerization
- Production logging

---

## Author

Tenali Anisha
