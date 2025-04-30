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
    <div className="container py-12 ">
      <div className="mx-auto max-w-5xl  space-y-12">
        <div className="space-y-4 text-center px-4 md:py-8">
          <h1 className="text-primary">Contactez-moi</h1>
          <h3 className="text-primary">
            N&apos;hésitez pas à me contacter pour toute question ou pour
            prendre rendez-vous
          </h3>
          <div className="my-4 mx-auto max-w-[100px] border-b border-primary" />
        </div>

        <div className=" px-12 mx-auto text-center grid text-secondary max-w-5xl grid-cols-1 gap-6 md:gap-12 xl:gap-20 py-6 md:grid-cols-2 lg:grid-cols-3">
          <Card bgColor="bg-secondary">
            <CardHeader>
              <div className="flex justify-center items-center">
                <Phone className="h-10 w-10 mb-4" />
              </div>
              <CardTitle>Téléphone</CardTitle>
              <CardDescription>Appelez-moi directement</CardDescription>
            </CardHeader>
            <CardContent>
              <p>+33 6 03 91 57 34</p>
            </CardContent>
          </Card>
          <Card bgColor="bg-secondary">
            <CardHeader>
              <div className="flex justify-center items-center">
                <Mail className="h-10 w-10 mb-4" />
              </div>
              <CardTitle>Email</CardTitle>
              <CardDescription>Écrivez-moi</CardDescription>
            </CardHeader>
            <CardContent>
              <p>jo.villegas2a@gmail.com</p>
            </CardContent>
          </Card>
          <Card bgColor="bg-secondary">
            <CardHeader>
              <div className="flex justify-center items-center">
                <MapPin className="h-10 w-10 mb-4" />
              </div>
              <CardTitle>Localisation</CardTitle>
              <CardDescription>Région/Ville/département</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Déplacements possibles dans toute la France et le monde</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8  md:grid-cols-2">
          <Card bgColor="bg-secondary" className="space-y-6  p-4 ">
            <CardTitle className="text-primary">
              Envoyez-moi un message
            </CardTitle>
            <p className="text-primary">
              Utilisez ce formulaire pour me contacter. Je vous répondrai dans
              les plus brefs délais.
            </p>
            <p className="text-primary">
              N&apos;hésitez pas à préciser votre demande, ainsi que vos
              disponibilités si vous souhaitez prendre rendez-vous.
            </p>
          </Card>
          <div className="">
            <ContactForm />
          </div>{' '}
        </div>
      </div>
      {/* Website Link */}
      <div className="w-full flex justify-center p-6 z-60">
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
