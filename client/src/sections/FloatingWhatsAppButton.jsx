import React from 'react'
import { FloatingWhatsApp } from 'react-floating-whatsapp'

const Whatsapp = () => {
  return (
    <div>
      <FloatingWhatsApp
        phoneNumber="918015359971"
        accountName="Edu Consultants"
        avatar="/assets/edu.png"
        statusMessage="Online"
        // Updated to be a greeting from the Consultant
        chatMessage="Hello 👋! Are you interested in Study Abroad in France or MBBS in Georgia? We're here to guide you."
        placeholder="Type a message..."
        darkMode={true}
        allowEsc
        allowClickAway
      />
    </div>
  )
}

export default Whatsapp