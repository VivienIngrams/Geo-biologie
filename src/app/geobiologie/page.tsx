import { ArrowRight, Globe, Check, Sparkles, SunMoon, Zap } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'

export default function GeobiologiePage() {
  return (
    <div className="flex flex-col items-center ">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center xl:mx-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/pierre.jpg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-center">
          <div className="relative flex flex-col justify-center p-4 space-y-6 lg:col-span-2">
            {/* Blurred background layer */}
            <div className="absolute inset-0 z-0 blur-mask rounded-lg" />

            {/* Foreground text content */}
            <div className="relative z-10">
              <h1 className="text-white">La Géobiologie</h1>
              <h3 className="text-white">
                L&apos;art d&apos;harmoniser les énergies entre
                l&apos;environnement et le vivant pour créer des espaces
                équilibrés et favorables au bien-être.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction - What is Geobiology */}
      <div className="w-full">
        <Card
          bgColor="bg-secondary"
          className="flex flex-col md:flex-row min-h-[85vh]"
        >
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full md:max-w-xl space-y-4 text-center md:text-left">
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-xl md:text-2xl text-primary">
                  Qu’est-ce que la géobiologie ?
                </CardTitle>
                <CardDescription className="text-primary text-lg">
                  La géobiologie est l’étude des interactions entre notre
                  environnement et notre bien-être, dans une approche à la fois
                  scientifique et énergétique.
                </CardDescription>
              </CardHeader>

              <CardContent className="p-0 space-y-4">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Le terme provient du grec : <strong>géo</strong> (Terre),{' '}
                      <strong>bios</strong> (vie), <strong>logos</strong>{' '}
                      (étude).
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Elle vise à équilibrer les{' '}
                      <strong>forces naturelles et artificielles</strong> qui
                      influencent notre santé.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      Le géobiologue intervient pour{' '}
                      <strong>harmoniser les lieux</strong> et favoriser une vie
                      plus saine.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </div>
          </div>
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
            <Image
              src="/oliviers.jpg"
              alt="Joëlle Villegas"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              className="object-cover"
            />
          </div>
        </Card>
      </div>

      <section className="bg-primary">
        {/* Les principes fondamentaux */}
        <div className="container text-center py-12 md:p-16 xl:p-24">
          <div className="text-center mb-12">
            <div className="flex justify-center items-center mb-4">
              <h2 className="text-secondary">Les principes fondamentaux</h2>
            </div>
            <h4 className="text-secondary">
              La géobiologie explore les différentes forces visibles et
              invisibles qui influencent notre bien-être.
            </h4>
          </div>

          <div className="grid gap-8 xl:gap-16 md:grid-cols-2">
            <Card bgColor="bg-primary">
              <CardHeader className="flex flex-col items-center">
                <Globe className="h-10 w-10 mb-4 " />
                <CardTitle>Forces telluriques</CardTitle>
                <CardDescription>
                  La Terre génère des énergies naturelles qui influencent les
                  êtres vivants.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Les courants d&apos;eau souterrains peuvent perturber
                  l&apos;équilibre énergétique d&apos;un lieu et les failles
                  géologiques et les réseaux énergétiques terrestres influencent
                  l&apos;environnement.
                </p>
              </CardContent>
            </Card>

            <Card bgColor="bg-primary">
              <CardHeader className="flex flex-col items-center">
                <Zap className="h-10 w-10 mb-4" />
                <CardTitle>Influences modernes</CardTitle>
                <CardDescription>
                  Le développement technologique a introduit de nouvelles
                  sources de perturbations.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Champs électromagnétiques (équipements électroniques, Wi-Fi,
                  antennes relais, lignes à haute tension) et la radioactivité
                  naturelle ou artificielle et autres pollutions invisibles.
                </p>
              </CardContent>
            </Card>

            <Card bgColor="bg-primary">
              <CardHeader className="flex flex-col items-center">
                <SunMoon className="h-10 w-10 mb-4" />
                <CardTitle>Forces cosmiques</CardTitle>
                <CardDescription>
                  Les rayonnements célestes du soleil, de la lune et des astres.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Ils participent à l&apos;équilibre énergétique terrestre et
                  peuvent affecter notre bien-être quotidien.
                </p>
              </CardContent>
            </Card>

            <Card bgColor="bg-primary">
              <CardHeader className="flex flex-col items-center">
                <Sparkles className="h-10 w-10 mb-4" />
                <CardTitle>Phénomènes subtils</CardTitle>
                <CardDescription>
                  Certains lieux gardent l&apos;empreinte des émotions et
                  événements passés.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Pouvant affecter le bien-être des habitants, on parle alors de
                  mémoires des lieux ou d&apos;énergies résiduelles.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="w-full">
        <Card
          bgColor="bg-secondary"
          className="flex flex-col md:flex-row min-h-[90vh]"
        >
          {/* Image */}
          <div className="relative w-full md:w-1/2 aspect-square md:aspect-auto h-64 md:h-auto">
            <Image
              src="/interieure (2).jpg"
              alt="Joëlle Villegas"
              layout="fill"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              className="object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 flex items-center justify-center p-6">
            <div className="w-full space-y-4 text-center md:text-left">
              <CardHeader className="space-y-2 p-0">
                <CardTitle className="text-xl md:text-2xl text-primary">
                  Pourquoi faire appel à un géobiologue ?
                </CardTitle>
                <CardDescription className="text-primary text-lg">
                  Que ce soit pour une maison, un lieu de travail ou un projet
                  d&apos;aménagement, la géobiologie offre une approche globale
                  et personnalisée pour :
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-4">
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span> Créer un environnement équilibré et harmonieux</span>
                  </li>

                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      {' '}
                      Améliorer votre qualité de vie et votre relation à
                      l&apos;espace.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span>
                      {' '}
                      Identifier et corriger les influences négatives naturelles
                      ou artificielles qui peuvent affecter votre bien-être
                      quotidien.
                    </span>
                  </li>
                </ul>

                <Link href="/contact">
                  <Button
                    variant="accent"
                    className="w-full md:w-fit px-6 py-3 text-base font-medium"
                  >
                    Discutons de votre espace
                  </Button>
                </Link>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>

      <section className="bg-primary ">
        <Card
          bgColor="bg-primary"
          className="  md:max-w-xl md:p-6  h-full  mx-auto"
        >
          <CardHeader className="">
            <CardTitle className="text-secondary text-center">
              Prêt à transformer votre espace ?
            </CardTitle>
          </CardHeader>
          <CardContent className="text-base text-center">
            Découvrez comment la géobiologie peut améliorer votre qualité de vie
            et créer un environnement plus harmonieux.
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/services" className="w-full">
                <Button size="lg" variant="secondary" className="w-full group">
                  Mes services
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/contact" className="w-full">
                <Button variant="accent" size="lg" className="w-full">
                  Me contacter
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
