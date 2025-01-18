import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "India",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    comments: false,
    candidates: false,
    offers: false,
    notifications: "",
  });

  return (
    <div className="w-screen h-screen overflow-x-hidden">
      <Form formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
