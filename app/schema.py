from typing import Optional
from pydantic import BaseModel

class CustomerData(BaseModel):
    tenure: float
    MonthlyCharges: float
    TotalCharges: float

    Contract: str
    InternetService: str

    # optional
    Dependents: Optional[str] = "No"
    StreamingTV: Optional[str] = "No"
    TechSupport: Optional[str] = "No"
    PaymentMethod: Optional[str] = "Electronic check"