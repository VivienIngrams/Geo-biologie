import { ArrowRight } from 'lucide-react'
import Image from 'next/legacy/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator'

export default function AboutPage() {
  const competences = [
    'Géobiologie certifiée par Bioterres',
    'Tarot initiatique de Wirth, avec Régine Brzesc-Colonges',
    'Thérapie avec la trame de Jérémie Guerry',
    'Le langage des oiseaux avec Jérémie Guerry',
    'La Kabbale avec Jean Haab',
    "L'alchimie avec Jean Haab",
    'Les plantes, huiles essentielles, gemmothérapie... Christian Escriva (méthode Goethe)',
    "L'alchimie, thérapie au diapason... Tony Ceron",
    'Homéopathie avec Alain Launay',
  ]

  const charterArticles = [
    {
      number: 1,
      content:
        "La géobiologie adopte une approche holistique du vivant et de son environnement. Son objectif est de restaurer l'équilibre énergétique pour favoriser bien-être et harmonie.",
    },
    {
      number: 2,
      content:
        'Le géobiologue exerce avec humanité, intégrité et compétence, en respectant ses limites et en évitant toute prestation non maîtrisée.',
    },
    {
      number: 3,
      content:
        'Il ne revendique que ses compétences réelles, évite toute publicité mensongère, et pratique des honoraires justes en fonction du travail et des ressources du client.',
    },
    {
      number: 4,
      content:
        'Il respecte la personne, l’animal et le lieu, ainsi que la confidentialité des informations pour protéger la vie privée du client.',
    },
    {
      number: 5,
      content:
        "Sans être médecin, il s'abstient de tout diagnostic médical et ne conseille jamais l'arrêt d'un traitement, laissant à chacun sa liberté thérapeutique.",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center xl:mx-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/oliv.jpg"
            alt="Joëlle Villegas"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 text-secondary">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="relative flex flex-col justify-center p-4 space-y-6">
              {/* Blurred background layer */}
              <div className="absolute inset-0 z-0 blur-mask rounded-lg" />

              {/* Foreground text content */}
              <div className="relative z-10">
                <h1 className="text-secondary">Joëlle Villegas</h1>
                <h3 className="text-white">
                Géobiologue certifiée par Bioterres
                </h3>
              </div>
            </div>
            <div />
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative w-full aspect-square overflow-hidden ">
            <Image
              src="/photo3.jpg"
              alt="Joëlle Villegas"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <Card bgColor='bg-secondary' className="space-y-2">
            <CardHeader >
              <CardTitle className="text-primary">Mon Parcours</CardTitle>
            </CardHeader>
           <CardContent>
           
              Passionnée par les relations entre l&apos;être humain et son
              environnement, j&apos;ai suivi une formation rigoureuse auprès de
              Bioterres pour devenir géobiologue certifiée.
              </CardContent>
              <CardContent>
              Ma démarche s&apos;inscrit dans une approche holistique,
              considérant l&apos;être humain dans sa globalité et dans son
              interaction avec le monde qui l&apos;entoure.
             </CardContent> <CardContent>
              
              Je mets aujourd&apos;hui mes compétences à votre service pour vous
              aider à retrouver l&apos;harmonie dans votre environnement et
              améliorer votre bien-être au quotidien.</CardContent>
              
          </Card>
        </div>
      </section>

      {/* Competence Section */}
      <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-2 text-secondary">
            <h2 className="text-secondary">
              Mes domaines de compétences et formations
            </h2>
            <p>Une approche holistique nourrie par diverses disciplines</p>
          </div>
          <Card bgColor="bg-primary" className="shadow-none border-none">
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {competences.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 hover:bg-muted/10 p-2 rounded-md transition"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-secondary flex-shrink-0" />
                  <p className="text-secondary">{item}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Charter Section */}
      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-primary">
              Mon engagement
            </h2>
            <h4 className='text-primary'>
              En tant que géobiologue professionnelle, je m&apos;engage à
              respecter la charte du géobiologue qui comprend notamment :
            </h4>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {charterArticles.map((article) => (
              <Card key={article.number} bgColor="bg-secondary">
                <CardHeader>
                  <CardTitle>Article {article.number}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{article.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-secondary">
              <h2 className="text-secondary">Envie d&apos;en savoir plus ?</h2>
              <p>
                Je suis à votre écoute pour répondre à vos questions ou convenir
                d&apos;un rendez-vous.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button variant="accent" className="w-full tracking-wide text-[16px]">
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
