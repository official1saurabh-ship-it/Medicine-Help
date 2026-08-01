import React, { useState } from 'react'
import AddMedicineForm from './components/AddMedicineForm'
import User from './components/User'

const App = () => {
  const [user, setUser] = useState([])
  const [formData, setFormData] = useState({
    image: "",
    title: "",
    description: "",
    subDescription: ""
  })
  return (
    <div>
      <User user={user} />
      <AddMedicineForm formData={formData} setFormData={setFormData} user={user} setUser={setUser} />
    </div>
  )
}

export default App