import { ArrowRight, Check } from 'lucide-react'
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
      title: 'Une approche holistique',
      content:
        "La géobiologie adopte une approche holistique du vivant et de son environnement. Son objectif est de restaurer l'équilibre énergétique pour favoriser bien-être et harmonie.",
    },
    {
      title: 'Un respect de la vie privée',
      content:
        'Le géobiologue exerce avec humanité, intégrité et compétence, en respectant ses limites et en évitant toute prestation non maîtrisée.',
    },
    {
      title: 'Un engagement éthique',
      content:
        'Il ne revendique que ses compétences réelles, évite toute publicité mensongère, et pratique des honoraires justes en fonction du travail et des ressources du client.',
    },
   
    {
      title: 'Un respect de la législation',
      content:
        "Sans être médecin, il s'abstient de tout diagnostic médical et ne conseille jamais l'arrêt d'un traitement, laissant à chacun sa liberté thérapeutique.",
    },
  ]

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] bg-primary flex items-center justify-center xl:mx-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/source.jpg"
            alt="Joëlle Villegas"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>


        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 text-secondary">
          <div className="grid gap-6 lg:grid-cols-2 items-center">
            <div className="relative flex flex-col justify-center p-4 space-y-6">
              <div className='relative w-fit'>
              {/* Blurred background layer */}
              <div className="absolute inset-0 z-0 blur-mask" />

              {/* Foreground text content */}
              <div className="relative  z-10">
                <h1 className="text-secondary">Joëlle Villegas</h1>
                <h3 className="text-white">
                  Géobiologue certifiée par Bioterres
                </h3>
              </div></div>
            </div>
            <div />
          </div>
        </div>
      </section>

   {/* Biography Section */}
<div className="w-full">
  <Card
    bgColor="bg-secondary"
    className="flex flex-col md:flex-row md:min-h-[85vh]"
  >
        {/* Text Column */}
    <div className="w-full md:w-1/2 flex items-center justify-center p-6">
      <div className="w-full md:max-w-xl space-y-4 text-center md:text-left">
        <CardHeader className="space-y-2 p-0">
          <CardTitle className="text-xl md:text-2xl text-primary">
            Mon Parcours
          </CardTitle>
        </CardHeader>

        <CardContent className="p-0 space-y-4">
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <span>
                Passionnée par les liens entre l’être humain et son
                environnement, j’ai suivi une formation rigoureuse auprès de{' '}
                <strong>Bioterres</strong> pour devenir géobiologue certifiée.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>
                Ma démarche repose sur une approche <strong>holistique</strong>,
                tenant compte de l’individu dans sa globalité et dans son
                interaction avec le monde qui l’entoure.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span>
                Aujourd’hui, je mets mes compétences à votre service pour{' '}
                <strong>favoriser l’harmonie</strong> dans votre environnement
                et améliorer votre bien-être au quotidien.
              </span>
            </li>
          </ul>
        </CardContent>
      </div>
    </div>
 {/* Image Column */}
 <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
      <Image
        src="/JoelleDebout.jpg"
        alt="Joëlle Villegas"
        layout="fill"
        className="object-cover"
      />
    </div>
  </Card>
</div>


      {/* Competence Section */}
      <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6 space-y-8">
          <div className="text-center space-y-2 text-secondary">
            <h2 className="text-secondary">Mes Formations</h2>
            <h3>Une approche holistique nourrie par diverses disciplines</h3>
          </div>
          <Card
            bgColor="bg-primary"
            className="shadow-none border-none md:max-w-xl mx-auto"
          >
            <CardContent className="grid  gap-3">
              {competences.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 hover:bg-muted/10 p-2  transition"
                >
                <div className="flex-shrink-0 pt-1">
                    <Check className="h-6 w-6 text-secondary" />
                  </div>
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
            <h2 className="text-primary">Mon engagement</h2>
            <h4 className="text-primary">
              En tant que géobiologue professionnelle, je m&apos;engage à
              respecter la charte du géobiologue qui comprend notamment :
            </h4>
          </div>
          <div className="grid gap-3 md:grid-cols-2 ">
            {charterArticles.map((article, index) => (
              <Card key={index} bgColor="bg-secondary">
               
                  <CardTitle className='py-4 '> {article.title}</CardTitle>
              
                <CardContent>
                  {article.content}
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
                <Button
                  variant="accent"
                  className="w-full tracking-wide text-[16px]"
                >
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
