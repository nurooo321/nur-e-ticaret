import React, { useEffect } from 'react'

export const WebinarForm: React.FC = () => {
  useEffect(() => {
    // Visme embed script
    const scriptId = 'visme-embed'
    if (!document.getElementById(scriptId)) {
      const s = document.createElement('script')
      s.id = scriptId
      s.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js'
      s.async = true
      document.body.appendChild(s)
    }
  }, [])
  return (
    <section id="webinar" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Webinar Kayıt Formu</h2>
        <div
          className="visme_d"
          data-title="Webinar Registration Form"
          data-url="g7ddqxx0-untitled-project?fullPage=true"
          data-domain="forms"
          data-full-page="true"
          data-min-height="100vh"
          data-form-id="133190"
        />
      </div>
    </section>
  )
}

export default WebinarForm


