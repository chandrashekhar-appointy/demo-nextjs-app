'use client'

import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="container">
      <div className="content">
        <h2>Contact Us</h2>
        <p>
          Have questions about the Backstage Platform template or this demo application? 
          Fill out the form below and we&apos;ll get back to you.
        </p>

        {submitted && (
          <div style={{
            background: '#d4edda',
            color: '#155724',
            padding: '1rem',
            borderRadius: '4px',
            marginTop: '1rem',
            marginBottom: '1rem'
          }}>
            Thank you! Your message has been received.
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ marginTop: '2rem' }}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit">Send Message</button>
        </form>

        <div style={{ marginTop: '3rem', padding: '2rem', background: '#f8f9fa', borderRadius: '8px' }}>
          <h3 style={{ marginBottom: '1rem' }}>Platform Team</h3>
          <p><strong>Email:</strong> chandrashekhar@appointy.com</p>
          <p><strong>Team:</strong> Platform Engineering</p>
          <p><strong>Support:</strong> Available during business hours</p>
        </div>
      </div>
    </div>
  )
}
