import { ArrowRight, Leaf, Map, Shield } from "lucide-react"
import Image from 'next/legacy/image'
import Link from 'next/link'

import { getClient } from '~/sanity/lib/sanity.client'
import { urlForImage } from '~/sanity/lib/sanity.image';
import { getHomePage } from '~/sanity/lib/sanity.queries'

import { Button } from "./components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./components/ui/card"

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
    <section className="w-full py-12 md:p-16  xl:p-20">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="flex items-center justify-center">
            <Image
              src="/icon.png"
              width={300}
              height={300}
              alt="Joëlle Villegas, géobiologue"
              className=" overflow-hidden rounded-lg object-cover max-w-full"
            />
          </div>
          <div className="flex flex-col justify-center space-y-4">
            <div className="">
              <h1>Joëlle Villegas</h1>
              <h2>Géobiologue</h2>
              <p>
                Harmonisez votre environnement de vie pour améliorer votre bien-être, votre santé et votre équilibre énergétique
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="w-full">Prendre rendez-vous</Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="w-full">
                  Découvrir mes services
                </Button>
              </Link>
            </div>
          </div>
         
        </div>
      </div>
    </section>
  
  

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50 rounded-md">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2>Qu&apos;est-ce que la Géobiologie ?</h2>
              <p>
                La géobiologie étudie l&apos;influence de la Terre sur tout ce qui vit. Elle prend en compte les forces
                telluriques propres à la Terre et les forces cosmiques qui viennent du ciel.
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <Leaf className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Harmonisation</CardTitle>
                  <CardDescription>Rétablir l&apos;équilibre énergétique dans votre espace de vie</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Retrouvez un équilibre et une harmonie énergétique dans votre maison ou lieu de travail.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Shield className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Protection</CardTitle>
                  <CardDescription>Identifier et neutraliser les influences négatives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Protection contre les sources de pollution électromagnétique, tellurique et paranormale.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Map className="h-10 w-10 text-primary mb-2" />
                  <CardTitle>Expertise</CardTitle>
                  <CardDescription>Analyse complète et solutions adaptées</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Expertise professionnelle pour identifier les problèmes et proposer des solutions sur mesure.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/geobiologie">
                <Button variant="outline" className="w-full">
                  En savoir plus
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2>Mes Services</h2>
              <p>
                Découvrez comment je peux vous aider à améliorer votre environnement et votre bien-être
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Analyse d&apos;environnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Identification des sources d&apos;influence, positives ou négatives, pour harmoniser une maison, un lieu,
                    des animaux de ferme, des ruches, des vignes...
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Détection de pollution</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Identification des sources de pollution électro-magnétiques, telluriques (courants souterrains),
                    voire paranormales.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Radiesthésie</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Recherche d&apos;eau et autres services de radiesthésie pour vous aider à comprendre votre environnement.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Nettoyage aurique</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Nettoyage des entités et des mémoires pour purifier votre espace de vie et votre bien-être.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Géométrie sacrée</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>
                    Utilisation de la géométrie adaptée du lieu, tracés régulateurs et géométrie sacrée pour harmoniser
                    votre espace.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Conseil et accompagnement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Conseils personnalisés pour améliorer votre environnement et votre bien-être au quotidien.</p>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/services">
                <Button className="w-full">
                  Tous mes services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20 bg-muted/50 rounded-md">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <Image
                src="/oliviers.jpeg"
                width={500}
                height={400}
                alt="Joëlle Villegas"
                className="mx-auto  overflow-hidden rounded-lg object-cover"
              />
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2>À Propos de Moi</h2>
                <p>
                  Joëlle Villegas, géobiologue certifiée par Bioterres
                </p>
              </div>
              <p>
                Je mets mes compétences et mon expérience à votre service pour vous aider à retrouver l&apos;harmonie dans
                votre environnement.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/a-propos">
                  <Button variant="outline" className="w-full">
                    En savoir plus sur mon parcours
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-16 lg:py-20">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2>Contactez-moi</h2>
              <p>
                Vous avez des questions ou souhaitez prendre rendez-vous ? N&apos;hésitez pas à me contacter.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="/contact">
                <Button className="w-full">
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

