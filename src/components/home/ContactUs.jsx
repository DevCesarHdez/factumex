import { useState } from "react"

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [error, setError] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateForm()) return
    console.log(formData)
  }

  const validateForm = () => {
    const { name, email, message } = formData
    const errors = {}
    if (!name) errors.name = 'El nombre es requerido'
    if (!email) errors.email = 'El email es requerido'
    if (!message) errors.message = 'El mensaje es requerido'
    setError(errors)
    return Object.keys(errors).length === 0
  }

  return (
    <section className="contact-us py-5 container">
      <h2 className="mb-4">Contactame</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Nombre</label>
          <input type="text" name="name" placeholder="Nombre" value={formData.name} className="form-control" id="name" required onChange={handleChange} />
          {error.name && <p className="text-danger">{error.name}</p>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} className="form-control" id="email" required onChange={handleChange} />
          {error.email && <p className="text-danger">{error.email}</p>}
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Mensaje</label>
          <textarea name="message" placeholder="Mensaje" value={formData.message} className="form-control" id="message" required onChange={handleChange}></textarea>
          {error.message && <p className="text-danger">{error.message}</p>}
        </div>
        <button type="submit" className="btn btn-primary">Enviar</button>
      </form>
    </section>
  )
}

export default ContactUs