import './components.css'

export default function Contact() {
  return (
    <div className="container contact-wrap">
      <h2 className="section-title">Contact</h2>

      <div className="contact-grid">
        <div className="contact-card">
          <h4>Get in touch</h4>
          <p className="muted">Feel free to reach out for collaborations, freelance work, or just to say hi.</p>
          <p><strong>Email:</strong> <a href="mailto:saisandeepjagabathula@gmail.com">saisandeepjagabathula@gmail.com</a></p>
          <p><strong>Location:</strong> India</p>
        </div>

        <form className="contact-form" onSubmit={(e) => {
          e.preventDefault()
          const form = e.target
          const subject = encodeURIComponent(`Portfolio contact from ${form.name.value}`)
          const body = encodeURIComponent(`${form.message.value}\n\nEmail: ${form.email.value}`)
          window.location.href = `mailto:you@example.com?subject=${subject}&body=${body}`
        }}>
          <input name="name" placeholder="Your name" required />
          <input name="email" type="email" placeholder="Email" required />
          <textarea name="message" rows="6" placeholder="Message" required />
          <button className="btn" type="submit">Send message</button>
        </form>
      </div>
    </div>
  )
}
