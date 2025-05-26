'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

const ContactForm: React.FC = () => {
  const [success, setSuccess] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSuccess(false)

    const formData = new FormData(formRef.current!)

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) throw new Error(`Form submission failed: ${response.status}`)

      setSuccess(true)
      formRef.current?.reset()
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('Une erreur est survenue lors de l\'envoi du formulaire. Veuillez réessayer plus tard.')    
    }
  }

  return (
    <Card bgColor='bg-secondary' className='p-4'>
      {success && (
        <div className="mb-4 p-3 rounded text-center font-semibold">
          Votre message a bien été envoyé. Merci pour votre prise de contact !
        </div>
      )}
     
      <form
        ref={formRef}
        method="post"
        action="/api"
        encType="multipart/form-data"
        onSubmit={handleSubmit}
        className="w-full"
      >
        <div className="flex flex-col">
          <label htmlFor="name" className=" text-sm py-1">
            Votre nom
          </label>
          <input
            id="name"
            autoFocus={false}
            name="name"
            autoComplete="off"
            required
            minLength={3}
            maxLength={150}
            className="p-2  border bg-card text-card-foreground shadow"
            type="text"
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="email" className=" text-sm py-1">
            Votre email
          </label>
          <input
            id="email"
            name="email"
            autoComplete="off"
            required
            minLength={8}
            maxLength={150}
            className="p-2  border bg-card text-card-foreground shadow"
            type="email"
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="subject" className=" text-sm py-1">
            Objet
          </label>
          <input
            id="subject"
            name="subject"
            autoComplete="off"
            className="p-2  border bg-card text-card-foreground shadow"
            type="text"
          />
        </div>
        <div className="flex flex-col py-1">
          <label htmlFor="message" className=" text-sm py-1">
            Votre message
          </label>
          <textarea
            id="message"
            name="message"
            autoComplete="off"
            required
            minLength={20}
            maxLength={600}
            className="p-2  border bg-card text-card-foreground shadow"
            rows={6}
          />
        </div>
        <div className="">
          <div className="py-4 flex md:items-start md:justify-end">
            <Button type="submit">
              Envoyer
            </Button>
          </div>
        </div>
      </form>
    </Card>
  )
}

export default ContactForm

