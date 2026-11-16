import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''
  })

  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }

    return newErrors
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate()

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmitted(false)
      return
    }

    console.log('Form submitted:', formData)
    setSubmitted(true)
    setErrors({})
    setFormData({ fullName: '', email: '', subject: '', message: '' })
  }

  return (
    <div className="page contact">
      <h1>Contact Us</h1>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Visit or Call Us</h2>
          <p><strong>Address:</strong> 45 Harbour Road, Lagos</p>
          <p><strong>Phone:</strong> +234 801 234 5678</p>
          <p><strong>Email:</strong> hello@bellavista.example.com</p>
          <p><strong>Hours:</strong> Mon–Sun • 11:00 AM – 10:00 PM</p>
          <p className="note">(Sample contact details for this project)</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your full name"
            />
            {errors.fullName && <span className="error">{errors.fullName}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="subject">Subject *</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Reservation / Feedback / Enquiry"
            />
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your reservation or enquiry..."
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <button type="submit" className="btn primary">
            Send Message
          </button>

          {submitted && (
            <div className="success-message">
              Thank you! Your message has been received. We will contact you shortly.
            </div>
          )}
        </form>
      </div>
    </div>
  )
}

export default Contact