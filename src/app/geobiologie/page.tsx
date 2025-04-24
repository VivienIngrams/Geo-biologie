import { ArrowRight, Globe, Info, Sparkles, SunMoon, Zap } from 'lucide-react'
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
      <section className="relative w-full min-h-screen flex items-center justify-center xl:mx-20">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/pierre.jpg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>

        {/* Foreground content */}
        <div className="relative z-10 container mx-auto px-4 grid gap-6 lg:grid-cols-2 items-center">
          <div className="relative flex flex-col justify-center p-4 space-y-6">
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

      <section>
        {/* Introduction - What is Geobiology */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="relative h-[300px] md:h-[400px]  overflow-hidden shadow-lg">
              <Image
                src="/oliv.jpg"
                alt="Géobiologie"
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
            <div>
              <Card bgColor="bg-secondary" className="md:text-lg">
                <CardContent className="space-y-4">
                  <p className=" leading-relaxed">
                    La géobiologie étudie les influences de l&apos;environnement
                    sur les êtres vivants, analysant les interactions entre les
                    phénomènes naturels et le bien-être des individus.
                  </p>

                  <p className="leading-relaxed">
                    D&apos;un point de vue étymologique, &apos;géobiologie&apos;
                    se compose de &apos;gé&apos; (la Terre), &apos;bios&apos;
                    (la vie) et &apos;logos&apos; (l&apos;étude). Elle
                    s&apos;intéresse à l&apos;équilibre entre les forces
                    terrestres et cosmiques qui nous entourent.
                  </p>

                  <p className="leading-relaxed">
                    Le géobiologue optimise ces interactions pour créer un
                    environnement harmonieux et équilibré, transformant les
                    lieux pour développer l&apos;art d&apos;habiter sainement.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

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

      <section className="w-full py-12 md:py-16 lg:py-24 xl:py-32  rounded-md">
        <Card bgColor="bg-secondary" className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2  lg:gap-12 items-center">
            <div className="">
              <Image
                src="/oliv.jpg"
                width={500}
                height={400}
                alt="Joëlle Villegas"
                className="mx-auto aspect-[4/3] overflow-hidden   object-cover"
              />
            </div>
            <div className=" flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <CardTitle className="text-primary">
                  Pourquoi faire appel à un géobiologue ?
                </CardTitle>
              </div>
              <h4 className="text-primary  font-medium">
                Faire appel à un géobiologue permet de créer un environnement
                équilibré et harmonieux, en identifiant et en corrigeant les
                influences négatives naturelles ou artificielles qui peuvent
                affecter votre bien-être quotidien.
              </h4>
              <h4 className="text-primary md:max-w-5xl font-medium">
                Que ce soit pour une maison, un lieu de travail ou un projet
                d&apos;aménagement, la géobiologie offre une approche globale et
                personnalisée pour améliorer votre qualité de vie et votre
                relation à l&apos;espace.
              </h4>
            </div>
          </div>
        </Card>
      </section>

      <section className="bg-primary ">
        <Card
          bgColor="bg-secondary"
          className=" bg-secondary shadow-sm md:max-w-xl hover:shadow-md transition-all  md:p-6  duration-300 h-full  mx-auto"
        >
          <CardHeader className="">
            <h3 className="text-primary">Prêt à transformer votre espace ?</h3>
          </CardHeader>
          <CardContent className="text-base">
            Découvrez comment la géobiologie peut améliorer votre qualité de vie
            et créer un environnement plus harmonieux.
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link href="/services" className="w-full">
                <Button size="lg" className="w-full group">
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
