import {
  ArrowRight,
  Building2,
  Leaf,
  Shield,
  Map,
  Home,
  Server,
  Tractor,
} from 'lucide-react'
import Image from 'next/legacy/image'
import Link from 'next/link'

import { getClient } from '~/sanity/lib/sanity.client'
import { urlForImage } from '~/sanity/lib/sanity.image'
import { getHomePage } from '~/sanity/lib/sanity.queries'

import { Button } from './components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from './components/ui/card'

export default async function HomePage() {
  const client = getClient()

  // const homePageData = await getHomePage(client, {
  //   next: {
  //     revalidate: 600,
  //     cache: 'no-store',
  //   },
  // })
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
      icon: <Building2 className="w-8 h-8" />,
      title: 'Établissements Collectifs',
      description: `
         Harmoniser les espaces partagés pour un meilleur confort des résidents et visiteurs.
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
      icon: <Server className="w-8 h-8" />,
      title: 'Commerces, Entreprises et Industries',
      description: `
         Améliorer la concentration et la productivité dans les espaces professionnels.
         Adapter les environnements industriels et bureaux pour un bien-être accru.
      `,
    },
  ]

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full min-h-[90vh] flex items-center justify-center bg-primary xl:mx-20">
        {/* Background image */}
        <div className="absolute -top-20 inset-0 z-0">
          <Image
            src="/vignes.jpeg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 text-secondary">
          <div className="grid gap-6 lg:grid-cols-2  items-center">
            <div className="relative flex flex-col justify-center p-4 space-y-6  ">
              {/* Blurred background layer */}
              <div className="absolute inset-0 z-0 blur-mask rounded-lg" />

              {/* Foreground text content */}
              <div className="relative z-10 ">
                <h1 className="text-secondary">Joëlle Villegas</h1>
                <h2 className="text-secondary tracking-wide font-quicksand font-light mb-1 md:-mt-1 md:mb-4 text-xl lg:text-3xl uppercase">
                  Géobiologue
                </h2>
                <h4>
                  Harmonisez votre environnement de vie pour améliorer votre
                  bien-être, votre santé et votre équilibre énergétique
                </h4>
              </div>

              {/* Buttons */}
              <div className="relative z-10 flex flex-col gap-4  min-[400px]:flex-row ">
                <Link href="/contact">
                  <Button className="w-full tracking-wide text-[16px]">
                    Prendre rendez-vous
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    variant="accent"
                    className="w-full tracking-wide text-[16px]"
                  >
                    Découvrir mes services
                  </Button>
                </Link>
              </div>
            </div>

            <div />
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col text-primary items-center justify-center  space-y-4 text-center">
            <div className="space-y-4 max-w-3xl mx-auto  ">
              <h2 className="text-primary">
                Qu&apos;est-ce que la Géobiologie ?
              </h2>
              <h4>
                La géobiologie est l&apos;étude de l&apos;influence de
                l&apos;environnement, des ondes et des énergies terrestres sur
                la santé et le bien-être des êtres vivants.
              </h4>
            </div>
            <div className="mx-auto grid text-secondary max-w-5xl grid-cols-1 gap-6 md:gap-12 xl:gap-20 py-6 md:grid-cols-2 lg:grid-cols-3">
              <Card bgColor="bg-secondary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <Leaf className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Harmonisation</CardTitle>
                  <CardDescription>
                    Rétablir l&apos;équilibre énergétique dans votre espace de
                    vie
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Retrouvez un équilibre et une harmonie énergétique dans votre
                  maison ou lieu de travail.
                </CardContent>
              </Card>
              <Card bgColor="bg-secondary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <Shield className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Protection</CardTitle>
                  <CardDescription>
                    Identifier et neutraliser les influences négatives
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Protection contre les sources de pollution électromagnétique,
                  tellurique et paranormale.
                </CardContent>
              </Card>
              <Card bgColor="bg-secondary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                    <Map className="h-10 w-10 mb-4" />
                  </div>
                  <CardTitle>Expertise</CardTitle>
                  <CardDescription>
                    Analyse complète et solutions adaptées
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  Expertise professionnelle pour identifier les problèmes et
                  proposer des solutions sur mesure.
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        {/* CTA */}
        <div className="flex justify-center ">
          <Link href="/geobiologie">
            <Button variant="accent" className="w-full">
              En savoir plus sur la géobiologie
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Application Domains Section */}
      <section className="bg-primary space-y-8 py-8 md:py-16 text-center rounded-md">
        <h2 className="text-secondary">Mes domaines d&apos;expertise </h2>
        <h3 className="text-secondary">
          Lorsqu&apos;on ne peut pas changer un lieu, on peut néanmoins le
          transformer et développer l&apos;art d&apos;habiter.
        </h3>

        <div className="grid gap-6 md:grid-cols-2">
          {applicationDomains.map((domain, index) => (
            <Card
              bgColor="bg-primary"
              key={index}
              className="flex flex-col items-center text-center"
            >
              <CardContent className="flex flex-col items-center">
                <div className="rounded-full bg-secondary text-primary p-4 my-4">
                  {domain.icon}
                </div>
                <CardTitle className="my-2">{domain.title}</CardTitle>
                <CardDescription>{domain.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* CTA */}
        <div className="flex justify-center ">
          <Link href="/services">
            <Button variant="accent" className="w-full">
              Connaître tous mes services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <div className="w-full">
        <Card
          bgColor="bg-secondary"
          className="flex flex-col md:flex-row min-h-[85vh]"
        >
          {/* Image on the Left */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
            <Image
              src="/Joelle.jpg"
              alt="Joëlle Villegas"
              layout="fill"
              className="object-cover"
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full md:max-w-xl space-y-4 text-center md:text-left">
              <CardContent className="p-0 space-y-4">
                <div className="w-full md:max-w-xl space-y-6 text-center md:text-left">
                  <div className="flex flex-col justify-center space-y-4">
                    <div className="space-y-2">
                      <h2 className="text-primary">À Propos de Moi</h2>
                      <h3 className="text-primary">
                        Joëlle Villegas, géobiologue certifiée Bioterres
                      </h3>
                    </div>
                    <h4 className="text-primary md:max-w-5xl font-medium">
                      Je mets mes compétences et mon expérience à votre service
                      pour vous aider à retrouver l&apos;harmonie dans votre
                      environnement.
                    </h4>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                      <Link href="/a-propos">
                        <Button className="w-full">
                          En savoir plus sur mon parcours
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <section className="w-full bg-primary py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 text-secondary">
              <h2 className="text-secondary">Contactez-moi</h2>
              <p>
                Vous avez des questions ou souhaitez prendre rendez-vous ?
                N&apos;hésitez pas à me contacter.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button variant="accent" className="w-full">
                  Prendre contact
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
