import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

import { Separator } from '../components/ui/separator'

export default function AboutPage() {
  const competences = [
    'Géobiologie certifiée par Bioterres',
    'Tarot initiatique de Wirth, avec Régine Brzesc-Colonges',
    'Thérapie avec la trame de Jérémie Guerry',
    'Le langage des oiseaux avec Jérémie Guerry',
    'La Kabbale avec Jean Haab',
    "L'alchimie avec Jean Haab",
    "Les plantes, les huiles essentielles, gemmothérapie, alcoolature... Christian Escriva d'après l'approche des plantes selon Goethe",
    "L'alchimie, les maladies... Thérapie au diapason... de Tony Ceron",
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
        "Le géobiologue exerce avec humanité, intégrité et compétence, en respectant ses limites et en évitant toute prestation non maîtrisée.",
    },
    {
      number: 3,
      content:
        "Il ne revendique que ses compétences réelles, évite toute publicité mensongère, et pratique des honoraires justes en fonction du travail et des ressources du client.",
    },
    {
      number: 4,
      content:
        "Il respecte la personne, l’animal et le lieu, ainsi que la confidentialité des informations pour protéger la vie privée du client.",
    },
    {
      number: 5,
      content:
        "Sans être médecin, il s'abstient de tout diagnostic médical et ne conseille jamais l'arrêt d'un traitement, laissant à chacun sa liberté thérapeutique.",
    },
  ];
  

  return (
    <div className="container py-12 md:py-16 lg:py-20 ">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ">
            Joëlle Villegas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Géobiologue certifiée par Bioterres
          </p>
          <Separator className="my-6" />
        </div>

        {/* Bio Section */}
        <div className="overflow-hidden">
          <div className="grid md:grid-cols-2 items-center">
            <div className="relative h-80 md:h-full overflow-hidden rounded-md">
              <Image
                src="/oliv.jpg"
                fill
                sizes="(max-width: 768px) 100vw, 30vw"
                style={{ objectFit: 'cover' }}
                alt="Joëlle Villegas"
                priority
              />
            </div>
            <CardContent className="p-6 md:p-8 space-y-4">
              <CardTitle className="text-2xl font-bold">Mon Parcours</CardTitle>
              <Separator className="my-2" />
              <p className="text-muted-foreground">
                Passionnée par les relations entre l&apos;être humain et son
                environnement, j&apos;ai suivi une formation rigoureuse auprès
                de Bioterres pour devenir géobiologue certifiée.
              </p>
              <p className="text-muted-foreground">
                Ma démarche s&apos;inscrit dans une approche holistique,
                considérant l&apos;être humain dans sa globalité et dans son
                interaction avec le monde qui l&apos;entoure.
              </p>
              <p className="text-muted-foreground">
                Je mets aujourd&apos;hui mes compétences à votre service pour
                vous aider à retrouver l&apos;harmonie dans votre environnement
                et améliorer votre bien-être au quotidien.
              </p>
            </CardContent>
          </div>
        </div>

        {/* Competences Section */}
        <Card className="shadow-none bg-muted/50 border-none">
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Mes domaines de compétences et formations
            </CardTitle>
            <CardDescription>
              Une approche holistique nourrie par diverses disciplines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:mx-24 gap-2">
              {competences.map((competence, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-2 p-2 rounded-md hover:bg-muted transition-colors"
                >
                  <div className="h-2 w-2 mt-2 rounded-full bg-primary flex-shrink-0" />
                  <p>{competence}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Charter Section */}
        <div>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Mon engagement : la charte du géobiologue
            </CardTitle>
            <CardDescription className='text-lg'>
            En tant que géobiologue professionnelle, je m&apos;engage à
            respecter la charte du géobiologue qui comprend notamment :
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
           
            <div className="py-4 space-y-4 md:w-2/3 mx-auto">
              {charterArticles.map((article) => (
                <Card key={article.number} className="border bg-muted/20  rounded-md">
                  <CardContent>
                    <p className="text-muted-foreground pt-6">
                      <span className=" font-bold px-2">
                        {article.number}.
                      </span>
                      {article.content}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </div>

        {/* Philosophy Section */}
        <Card className="shadow-none border-none md:p-16 bg-muted/50">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-primary">
              Ma philosophie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg">
              Je crois profondément que notre bien-être est intimement lié à
              notre environnement. Nos lieux de vie et de travail ont une
              influence considérable sur notre santé physique et mentale.
            </p>
            <p className="text-lg">
              Mon approche vise à rétablir l&apos;harmonie entre l&apos;être
              humain et son environnement, en identifiant et en neutralisant les
              influences négatives, tout en favorisant les énergies positives.
            </p>
            <p className="text-lg">
              Chaque lieu, chaque personne est unique, c&apos;est pourquoi
              j&apos;adapte mes interventions à vos besoins spécifiques, en
              tenant compte de votre sensibilité et de votre contexte
              particulier.
            </p>
          </CardContent>
          <CardFooter className="flex justify-center pt-4 pb-8">
            <Link href="/contact">
              <button className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                Me contacter
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </Link>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
