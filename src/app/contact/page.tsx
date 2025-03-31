import { Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'

import ContactForm from '../components/ContactForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1>Contactez-moi</h1>
          <p>
            N&apos;hésitez pas à me contacter pour toute question ou pour
            prendre rendez-vous
          </p>
          <div className="my-4 mx-auto max-w-[100px]" />
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                Téléphone
              </CardTitle>
              <CardDescription>Appelez-moi directement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>+33 6 03 91 57 34</p>
              
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Email
              </CardTitle>
              <CardDescription>Écrivez-moi</CardDescription>
            </CardHeader>
            <CardContent>
              <p>contact@lecheminduvivant.fr</p>
             
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Localisation
              </CardTitle>
              <CardDescription>Région/Ville/département</CardDescription>
            </CardHeader>
            <CardContent>
              <p>  Déplacements possibles dans toute la France et le monde</p>
              <p className="text-sm text-muted-foreground mt-2">
              
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8  md:grid-cols-2">
          <div className="space-y-6 md:min-h-screen  ">
            <h2>Envoyez-moi un message</h2>
            <p>
              Utilisez ce formulaire pour me contacter. Je vous répondrai dans
              les plus brefs délais.
            </p>
            <p>
              N&apos;hésitez pas à préciser votre demande, ainsi que vos
              disponibilités si vous souhaitez prendre rendez-vous.
            </p>
          </div>
          <div className="grid gap-8 ">
            <div className="space-y-6">
              <ContactForm />
            </div>
          </div>{' '}
        </div>
      </div>
      {/* Website Link */}
      <div className=" py-6 z-60">
        <Link
          href="https://vivieningrams.com"
          target="_blank"
          rel="noopener noreferrer"
          className={` text-gray-500 hover:text-black tracking-normal leading-loose text-[12px] `}
        >
          Site web par Vivien Ingrams
        </Link>
      </div>
    </div>
  )
}
