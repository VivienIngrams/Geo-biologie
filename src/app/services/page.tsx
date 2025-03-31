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
import { Separator } from '../components/ui/separator'
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
        'Analyse des influences positives et négatives de votre environnement',
        'Harmonisation de l’espace avec des solutions adaptées',
        'Utilisation de géométrie et tracés régulateurs',
      ],
    },
    {
      title: 'Détection de pollutions',
      subtitle: 'Identifier les sources de perturbation',
      features: [
        'Mesure des champs électromagnétiques',
        'Détection des courants souterrains et failles géologiques',
        'Analyse des perturbations énergétiques',
      ],
    },
    {
      title: 'Radiesthésie',
      subtitle: "Recherche d'eau et d'informations",
      features: [
        "Recherche de sources d'eau et estimation de leur potentiel",
        'Détection de réseaux et influences énergétiques subtiles',
      ],
    },
    {
      title: 'Nettoyage aurique',
      subtitle: 'Purification énergétique',
      features: [
        'Élimination des entités parasites et mémoires négatives',
        'Rééquilibrage des champs énergétiques des lieux',
      ],
    },
    {
      title: 'Bien-être animal',
      subtitle: 'Harmonisation pour les animaux',
      features: [
        'Analyse et optimisation des espaces pour animaux',
        'Harmonisation des lieux de vie et élevages pour améliorer leur bien-être',
      ],
    },
    {
      title: 'Conseils personnalisés',
      subtitle: 'Accompagnement sur mesure',
      features: [
        'Recommandations pour aménager vos espaces',
        'Solutions adaptées à vos besoins spécifiques',
        'Suivi personnalisé pour un bien-être durable',
      ],
    },
  ]

  const applicationDomains = [
    {
      icon: <Home className="w-8 h-8" />,
      title: 'Habitat et Rénovation',
      description: `
         Identifier et neutraliser les perturbations géopathogènes pour des espaces sains.
         Conseils sur les matériaux et études pré-construction pour optimiser votre habitat.
      `,
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Commerces, Entreprises et Industries',
      description: `
         Améliorer la concentration et la productivité dans les espaces professionnels.
         Adapter les environnements industriels et bureaux pour un bien-être accru.
      `,
    },
    {
      icon: <Tractor className="w-8 h-8" />,
      title: 'Espaces Verts et Exploitations Agricoles',
      description: `
         Optimiser les zones agricoles et améliorer la qualité des cultures.
         Créer des environnements favorables au bien-être animal.
      `,
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: 'Établissements Collectifs',
      description: `
         Harmoniser les espaces partagés pour un meilleur confort des résidents et visiteurs.
      `,
    },
  ]

  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Header Section */}
        <div className="space-y-4 text-center">
          <h1>Mes Services</h1>
          <p>
            Des consultations personnalisées en géobiologie pour améliorer votre
            bien-être, harmoniser vos espaces de vie, et analyser les déséquilibres
            environnementaux
          </p>
          <Separator className="my-6" />
        </div>

        {/* Introduction */}
        <div className="space-y-4">
          <h3>Découvrez mes services conçus pour vous aider à créer un environnement sain et harmonieux</h3>
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
        <div className="space-y-8 p-4 md:p-12 bg-muted/80 rounded-md">
          <h2>Champs d&apos;application </h2>
          <h3>Dans quels domaines je peux vous aider</h3>
          <p>
            Lorsqu&apos;on ne peut pas changer un lieu, on peut néanmoins le
            transformer et développer l&apos;art d&apos;habiter. Réussir une
            harmonisation, c&apos;est alléger les corps subtils qui polluent
            l&apos;état d&apos;esprit et la santé globale de l&apos;occupant.
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
                  <CardTitle className="my-2">{domain.title}</CardTitle>
                  <CardDescription>{domain.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Intervention Process Section */}
        <div className="pt-8 space-y-6 md:max-w-[35vw] mx-auto">
          <h2>Comment se déroule une intervention ?</h2>
          <div className="grid gap-6">
            {[
              {
                title: '1. Premier contact',
                description:
                  'Un échange téléphonique ou par email pour comprendre vos besoins et définir l’intervention.',
              },
              {
                title: '2. Visite et analyse',
                description:
                  'Une analyse approfondie sur place pour identifier les problématiques spécifiques.',
              },
              {
                title: '3. Solutions et suivi',
                description:
                  'Des solutions adaptées suivies d’un accompagnement pour garantir leur efficacité.',
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
