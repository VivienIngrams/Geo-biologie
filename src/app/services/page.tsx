import Link from 'next/link'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '../components/ui/card'
import {
  ArrowRight,
  Check,
  Home,
  Server,
  Tractor,
  Building2,
} from 'lucide-react'

// Define the service data type
interface ServiceItem {
  title: string
  subtitle: string
  features: string[]
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
      title: "Harmonisation de l'habitat",
      subtitle: 'Pour un espace de vie équilibré',
      features: [
        'Analyse complète de votre environnement',
        "Identification des sources d'influence positives et négatives",
        'Solutions personnalisées pour harmoniser votre espace',
        'Utilisation de géométrie adaptée et tracés régulateurs',
      ],
    },
    {
      title: 'Détection de pollutions',
      subtitle: 'Identifier les sources de perturbation',
      features: [
        'Mesure des champs électromagnétiques',
        'Détection des courants souterrains',
        'Identification des failles géologiques',
        'Analyse des perturbations énergétiques',
      ],
    },
    {
      title: 'Radiesthésie',
      subtitle: "Recherche d'eau et d'informations",
      features: [
        "Recherche de sources d'eau",
        'Évaluation de la profondeur et du débit',
        'Détection de réseaux énergétiques',
        'Analyse des influences subtiles',
      ],
    },
    {
      title: 'Nettoyage aurique',
      subtitle: 'Purification énergétique',
      features: [
        'Nettoyage des entités parasites',
        'Effacement des mémoires négatives',
        'Harmonisation des champs énergétiques',
        'Rééquilibrage énergétique des lieux',
      ],
    },
    {
      title: 'Bien-être animal',
      subtitle: 'Harmonisation pour les animaux',
      features: [
        'Analyse des espaces pour animaux domestiques',
        'Optimisation des fermes et élevages',
        'Harmonisation des ruches',
        'Amélioration du bien-être animal',
      ],
    },
    {
      title: 'Conseils personnalisés',
      subtitle: 'Accompagnement sur mesure',
      features: [
        "Conseils pour l'aménagement de votre espace",
        'Recommandations pour améliorer votre bien-être',
        'Solutions adaptées à vos besoins spécifiques',
        'Suivi personnalisé',
      ],
    },
  ]

  const applicationDomains = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Habitat et Rénovation",
      subtitle: "Espaces de vie et projets résidentiels",
      description: `
         Identifier et neutraliser les perturbations géopathogènes.
         Optimiser les espaces pour le bien-être et un sommeil de qualité.
        Conseils sur les matériaux respectueux et études pré-construction.
      `,
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "Commerces, Entreprises et Industries",
      subtitle: "Espaces professionnels et productivité",
      description: `
         Réduction des perturbations pour améliorer concentration et productivité.
         Adaptation des grandes surfaces (bureaux, locaux industriels).
      `,
    },
    {
      icon: <Tractor className="w-8 h-8" />,
      title: "Espaces Verts et Exploitations Agricoles",
      subtitle: "Agriculture, élevages et jardins",
      description: `
         Amélioration de la qualité des cultures et des vins.
         Bien-être animal grâce à l'identification des zones neutres.
      `,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Établissements Collectifs",
      subtitle: "Harmonie dans les espaces partagés",
      description: `
         Optimisation des espaces dans les centres collectifs.
         Amélioration du bien-être des résidents et visiteurs.
      `,
    },
  ];
  

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Mes Services
          </h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-[700px]">
            Une approche personnalisée pour harmoniser votre environnement et
            améliorer votre bien-être
          </p>
          <div className="h-px w-[100px] bg-border mx-auto my-4"></div>
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <p className="text-center mx-auto max-w-[800px]">
            Je me propose de vous aider dans ces domaines particuliers que sont
            les relations avec votre environnement, l&apos;analyse et le
            traîtement de déséquilibres liés à des interactions dont on ne
            perçoit pas toujours la cause.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.subtitle}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex items-center justify-center w-full text-xl font-bold text-primary">
          <h3>Prenez soin de vous et de votre environnement !</h3>
        </div>
        <div className="flex items-center justify-center w-full ">
          <Link href="/contact" className="">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Prendre rendez-vous
            </button>
          </Link>
        </div>

        {/* Application Domains Section */}
        <div className="space-y-8 pt-12">
          <h2 className="text-2xl font-bold text-center">
            Champs d&apos;application : Dans quels domaines je peux vous aider
          </h2>
          <p className="text-center mx-auto max-w-[800px] text-muted-foreground">
            Mes services en géobiologie visent à harmoniser vos espaces de vie
            et de travail, en tenant compte des énergies naturelles et des
            besoins spécifiques.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {applicationDomains.map((domain, index) => (
              <Card
                key={index}
                className="flex flex-col items-center text-center"
              >
                <CardContent className="flex flex-col items-center">
                  <div className="rounded-full bg-primary text-primary-foreground p-4 my-4">
                    {domain.icon}
                  </div>
                  <CardTitle className="mt-2">{domain.title}</CardTitle>
                  <p className=" mt-2">
                    {domain.subtitle}
                  </p>
                  <CardDescription>{domain.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Intervention Process Section */}
        <div className="pt-8 space-y-6 md:max-w-[35vw] mx-auto">
          <h2 className="text-2xl font-bold text-center ">
            Comment se déroule une intervention ?
          </h2>
          <div className="grid gap-6">
            {[
              {
                title: '1. Premier contact',
                description:
                  "Nous échangeons par téléphone ou par email pour comprendre vos besoins et définir le type d'intervention nécessaire.",
              },
              {
                title: '2. Visite et analyse',
                description:
                  'Je me déplace sur le lieu concerné pour réaliser une analyse complète et identifier les problématiques spécifiques.',
              },
              {
                title: '3. Solutions et suivi',
                description:
                  "Je vous propose des solutions adaptées et assure un suivi pour vérifier l'efficacité des mesures mises en place.",
              },
            ].map((step, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Button */}
        <div className="flex justify-center pt-8">
          <Link href="/contact">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Me contacter pour plus d&apos;informations
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}
