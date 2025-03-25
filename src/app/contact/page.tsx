import ContactForm from '../components/ContactForm'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Mail, MapPin, Phone } from 'lucide-react'
export default function ContactPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Contactez-moi
          </h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-[700px]">
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
              <p>+33 6 XX XX XX XX</p>
              <p className="text-sm text-muted-foreground mt-2">
                Du lundi au vendredi, de 9h à 18h
              </p>
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
              <p className="text-sm text-muted-foreground mt-2">
                Je vous répondrai dans les 24 à 48 heures
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Localisation
              </CardTitle>
              <CardDescription>Zone d&aps;intervention</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Région PACA et ses environs</p>
              <p className="text-sm text-muted-foreground mt-2">
                Déplacements possibles dans toute la France
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid gap-8 min-h-screen md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Envoyez-moi un message</h2>
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
    </div>
  )
}
