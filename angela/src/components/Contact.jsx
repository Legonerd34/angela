import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await fetch('https://dh0wkzi4.run.nodescript.dev/angela/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify(form),
      })
      setStatus(response.ok ? 'success' : 'error')
    } catch (err) {
      setStatus('error')
    }
  }

  return (
    <div className="contact-form">
      <h1>Contact Details</h1>
      <form onSubmit={handleSubmit} id="contact-form">
        <input
          name="user_name"
          type="text"
          className="form-control"
          placeholder="Your Name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <br />
        <input
          name="user_email"
          type="email"
          className="form-control"
          placeholder="Your email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <br />
        <textarea
          name="message"
          className="form-control"
          placeholder="Message"
          rows={6}
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <br />
        <input type="submit" className="form-control submit" value="Send" disabled={status === 'submitting'} />
      </form>
      {status === 'success' && <h2 id="submit-message">Message submitted!</h2>}
      {status === 'error' && <p>There was an issue submitting the form. Please try again.</p>}
      <p>Website created by Max Bushell <a href="mailto:abbiegreenwood3@gmail.com">(abbiegreenwood3@gmail.com)</a></p>
      <p>Contact form powered by NodeScript</p>
    </div>
  )
}


