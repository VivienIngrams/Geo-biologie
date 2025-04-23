import { ArrowRight, Leaf, Map, Shield } from 'lucide-react'
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

  return (
    <div className="flex flex-col items-center">
      <section className="relative w-full min-h-screen flex items-center justify-center  xl:mx-20">
        {/* Background image */}
        <div className="absolute -top-20 inset-0 z-0">
          <Image
            src="/vignes.jpeg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
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

      <section className="w-full py-12 md:py-16 lg:py-20 bg-primary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col text-secondary items-center justify-center  space-y-4 text-center">
            <div className="space-y-4 max-w-3xl mx-auto py-12 ">
              <h2 className='text-secondary'>Qu&apos;est-ce que la Géobiologie ?</h2>
              <h4>
                La géobiologie est l&apos;étude de l&apos;influence de
                l&apos;environnement, des ondes et des énergies terrestres sur
                la santé et le bien-être des êtres vivants.
              </h4>
            </div>
            <div className="mx-auto grid text-secondary max-w-5xl grid-cols-1 gap-6 md:gap-12 xl:gap-20 py-6 md:grid-cols-2 lg:grid-cols-3">
              <Card bgColor="bg-primary">
                <CardHeader>
                  <div className="flex justify-center items-center">
                  <Leaf className="h-10 w-10 mb-4" /></div>
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
              <Card bgColor="bg-primary">
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
              <Card bgColor="bg-primary">
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
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2 py-12">
              <h2 className='text-primary'>Mes Services</h2>
              <h3 className="text-primary md:max-w-5xl font-medium">
                Découvrez comment je peux vous aider à améliorer votre
                environnement et votre bien-être
              </h3>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 xl:gap-12 py-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Analyse d'environnement",
                  description:
                    "Identification des sources d'influence, positives ou négatives, pour harmoniser une maison, un lieu, des animaux de ferme, des ruches, des vignes...",
                  image: '/thailande (1).jpg',
                },
                {
                  title: 'Détection de pollution',
                  description:
                    'Identification des sources de pollution électro-magnétiques, telluriques (courants souterrains), voire paranormales.',
                  image: '/thailande (2).jpg',
                },
                {
                  title: 'Conseil et accompagnement',
                  description:
                    'Conseils personnalisés pour améliorer votre environnement et votre bien-être au quotidien.',
                  image: '/oliv.jpg',
                },
                {
                  title: 'Radiesthésie',
                  description:
                    "Recherche d'eau et autres services de radiesthésie pour vous aider à comprendre votre environnement.",
                  image: '/thailande (3).jpg',
                },
                {
                  title: 'Nettoyage aurique',
                  description:
                    'Nettoyage des entités et des mémoires pour purifier votre espace de vie et votre bien-être.',
                  image: '/house.jpg',
                },
                {
                  title: 'Géométrie sacrée',
                  description:
                    'Utilisation de la géométrie adaptée du lieu, tracés régulateurs et géométrie sacrée pour harmoniser votre espace.',
                  image: '/cottage.jpg',
                },
                
              ].map((service, index) => (
                <Card key={index} bgColor='bg-secondary' className="border-none shadow-none">
                  <div className="px-6">
                    <div className="relative w-full aspect-square p-4 overflow-hidden ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        sizes="(max-width: 768px) 80vw, (max-width: 1200px)  30vw, 20vw"
                        className="object-cover p-4"
                      />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/services">
                <Button variant='accent' className="w-full">
                  Tous mes services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32  rounded-md">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2  lg:gap-12 items-center">
            <div className="">
              <Image
                src="/photo3.jpg"
                width={500}
                height={400}
                alt="Joëlle Villegas"
                className="mx-auto  overflow-hidden   object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className='text-primary'>À Propos de Moi</h2>
                <h3 className='text-primary'>Joëlle Villegas, géobiologue certifiée Bioterres</h3>
              </div>
              <h4 className="text-primary md:max-w-5xl font-medium">
                Je mets mes compétences et mon expérience à votre service pour
                vous aider à retrouver l&apos;harmonie dans votre environnement.
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
        </div>
      </section>

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
