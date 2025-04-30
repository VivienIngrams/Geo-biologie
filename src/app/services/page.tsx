import { ArrowRight, Phone, Search, CheckCircle2, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Separator } from '../components/ui/separator'
// Define the service data type
interface ServiceItem {
  title: string
  image: string
  subtitle: string
  features: string[]
  cta: string
}

// Define the application domain type
interface ApplicationDomain {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServicesPage() {
  // Services data
  const services: ServiceItem[] = [
    {
      title: 'Détection de pollutions',
      subtitle: 'Identifier les sources de perturbation',
      features: [
        'Mesure des champs électromagnétiques',
        'Détection des courants souterrains et failles géologiques',
        'Analyse des perturbations énergétiques',
      ],
      image: '/fils.jpg',
      cta: 'Prenez contact',
    },
    {
      title: "Harmonisation de l'habitat",
      subtitle: 'Pour un espace de vie équilibré',
      features: [
        'Analyse des influences positives et négatives de votre environnement',
        'Harmonisation de l’espace avec des solutions adaptées',
        'Utilisation de géométrie et tracés régulateurs',
      ],
      image: '/interieure2.jpg',
      cta: 'En savoir plus',
    },
    {
      title: 'Radiesthésie',
      subtitle: "Recherche d'eau et d'informations",
      features: [
        "Recherche de sources d'eau et estimation de leur potentiel",
        'Détection de réseaux et influences énergétiques subtiles',
      ],
      image: '/source1.jpg',
      cta: 'Ecrivez-moi',
    },
    {
      title: 'Nettoyage aurique',
      subtitle: 'Purification énergétique',
      features: [
        'Élimination des entités parasites et mémoires négatives',
        'Rééquilibrage des champs énergétiques des lieux',
      ],
      image: '/chapelle.jpg',
      cta: 'Prenez contact',
    },
    {
      title: 'Bien-être animal',
      subtitle: 'Harmonisation pour les animaux',
      features: [
        'Analyse et optimisation des espaces pour animaux',
        'Harmonisation des lieux de vie et élevages pour améliorer leur bien-être',
      ],
      image: '/brebis.jpg',
      cta: 'En savoir plus',
    },
    {
      title: 'Espaces verts et exploitations agricoles',
      subtitle: 'Harmonisation des cultures et des environnements végétaux',
      features: [
        'Optimisation énergétique des zones agricoles',
        'Amélioration de la vitalité et de la qualité des cultures',
        'Création de conditions propices à la croissance et à l’équilibre écologique',
      ],
      image: '/mais.jpg',
      cta: 'Contactez-moi',
    },
    {
      title: 'Conseils personnalisés',
      subtitle: 'Accompagnement sur mesure',
      features: [
        'Recommandations pour aménager vos espaces',
        'Solutions adaptées à vos besoins spécifiques',
        'Suivi personnalisé pour un bien-être durable',
      ],
      image: '/mains.jpg',
      cta: 'Demandez une consultation',
    },
  ]

  return (
    <div className="flex flex-col items-center ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[85vh] flex items-center justify-center  ">
        {/* Background image */}
        <div className="absolute  inset-0 z-0">
          <Image
            src="/interieure1.jpg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="absolute inset-0 z-5 bg-black/25" />
        <div className="relative z-10 container mx-auto px-4 grid gap-6 lg:grid-cols-3 items-center">
          <div className="relative flex flex-col justify-center p-4 space-y-6 col-span-2">
            {/* Blurred background layer */}
            <div className="absolute inset-0 z-0 blur-mask rounded-lg" />
            <div className="relative z-10 md:pt-12">
              <div className="  space-y-4">
                <h1 className="text-white">Mes Services</h1>
                <h3 className="text-white">
                  Des consultations personnalisées en géobiologie pour
                  harmoniser vos espaces de vie et améliorer votre bien-être
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*Section Services List */}
      <div className="w-full ">
        <div className="bg-primary py-12 md:py-16 lg:py-20 flex flex-col text-primary items-center justify-center  space-y-4 text-center  ">
          <h2 className="text-secondary px-2">
            Découvrez mes domaines d’intervention
          </h2>
          <h3 className="text-secondary">
            Pour vous aider à créer un environnement sain et harmonieux
          </h3>
        </div>
        <div className="">
          {services.map((service, index) => (
            <Card
              bgColor="bg-secondary"
              className={`flex flex-col md:flex-row ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              } min-h-[70vh]`}
              key={index}
            >
              {/* Image */}
              <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                  className="object-cover"
                />
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 flex items-center justify-center p-6">
                <div className="w-full max-w-[450px] space-y-4 text-center md:text-left">
                  <CardHeader className="space-y-2 p-0">
                    <CardTitle className="text-xl md:text-2xl">
                      {service.title}
                    </CardTitle>
                    <CardDescription>{service.subtitle}</CardDescription>
                  </CardHeader>
                  <CardContent className="p-0">
                    <ul className="space-y-2 text-left mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li
                          key={featureIndex}
                          className="flex items-start gap-2"
                        >
                          <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact">
                      <Button
                        variant="accent"
                        className="w-full md:w-fit px-6 py-3 text-base font-medium"
                      >
                        {service.cta}
                      </Button>
                    </Link>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Intervention Process Section */}
      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col text-secondary items-center justify-center text-center">
            <div className="py-12 ">
              <h2 className="text-secondary tracking-tighter">
                Comment se déroule une intervention ?
              </h2>
            </div>
            <div className="mx-auto grid text-secondary max-w-5xl grid-cols-1 gap-6 md:gap-12 xl:gap-20 py-6 md:grid-cols-2 lg:grid-cols-3">
              <Card bgColor="bg-primary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <Phone className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Premier contact</CardTitle>
                  <CardDescription>
                    Échange téléphonique ou par email
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Un premier échange pour comprendre vos besoins et définir les
                  modalités de l’intervention.
                </CardContent>
              </Card>
              <Card bgColor="bg-primary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <Search className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Visite et analyse</CardTitle>
                  <CardDescription>
                    Analyse personnalisée sur site
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Une étude approfondie des lieux pour identifier les
                  déséquilibres et perturbations spécifiques.
                </CardContent>
              </Card>
              <Card bgColor="bg-primary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <CheckCircle2 className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Solutions et suivi</CardTitle>
                  <CardDescription>
                    Mise en œuvre et accompagnement
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Application de solutions adaptées à votre situation, suivies
                  de recommandations et d’un accompagnement durable.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className=" ">
        <Card
          bgColor="bg-secondary"
          className="  md:max-w-xl md:p-6  h-full  mx-auto"
        >
          <CardHeader className="">
            <CardTitle className="text-primary text-center">
              Vous avez des questions ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base text-center">
            N&apos;hésitez pas à me contacter pour toute question ou demande
            d&apos;information sur mes services. 
            <div className="flex mt-8">
              <Link href="/contact" className="w-full">
                <Button variant="accent" size="lg" className="w-full">
                  Me contacter pour plus d&apos;informations
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
