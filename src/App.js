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
  });

  return (
    <div>
      <Form formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
