'use client'

import React, { useEffect,useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import { Button } from '../components/ui/button'
import { Card } from '../components/ui/card'

const ContactForm: React.FC = () => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''
  const recaptchaRef = useRef<ReCAPTCHA>(null)
  const [isVerified, setIsVerified] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  console.log(siteKey)

  const handleCaptchaChange = (token: string | null) => {
    if (token) setIsVerified(true)
    else setIsVerified(false)
  }

  const handleCaptchaExpired = () => setIsVerified(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!isVerified) {
      alert('Recaptcha error')
      return
    }

    const formData = new FormData(event.currentTarget)
    const token = recaptchaRef.current?.getValue()

    try {
      const response = await fetch('/api', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token,
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok)
        throw new Error(`Form submission failed: ${response.status}`)

      const responseData = await response.json()
      console.log(responseData)
      alert('Success')
      recaptchaRef.current?.reset()
    } catch (error) {
      console.error(error)
      alert('Error')
    }
  }

  return (
    <Card className='p-2'>
    <form
      method="post"
      action="/api"
      encType="multipart/form-data"
      onSubmit={handleSubmit}
      className="font-cinzel w-full"
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
          className="rounded-lg border bg-card text-card-foreground shadow"
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
          className="rounded-lg border bg-card text-card-foreground shadow"
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
          className="rounded-lg border bg-card text-card-foreground shadow"
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
          className="rounded-lg border bg-card text-card-foreground shadow"
          rows={5}
        />
      </div>

    

      <div className="md:grid grid-cols-2">
        <div className="flex flex-col py-4">
          {/* <ReCAPTCHA
            sitekey={siteKey}
            ref={recaptchaRef}
            onChange={handleCaptchaChange}
            onExpired={handleCaptchaExpired}
          /> */}
        </div>
        <div className="flex md:items-start md:justify-end">
          <Button
            type="submit"
            disabled={!isVerified}
          >
            Envoyer
          </Button>
        </div>
      </div>
    </form>
    </Card>
  )
}

export default ContactForm

