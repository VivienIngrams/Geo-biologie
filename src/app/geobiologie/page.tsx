import {
  ArrowRight,
  Map,
  Scale,
  Leaf,
  Globe,
  Lightbulb,
  Users,
  Award,
  Home,
  Building,
  Sprout,
  Zap,
  Info,
  History,
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Separator } from '../components/ui/separator'
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
    <div className="flex flex-col items-center mb-24">
      {/* Hero Section */}
      <section className="relative w-full md:min-h-[85vh] flex items-center justify-center  ">
        {/* Background image */}
        <div className="absolute  inset-0 z-0">
          <Image
            src="/pierre.jpg"
            alt="Joëlle Villegas, géobiologue"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
        <div className="container relative z-10 py-16 md:my-24 ">
          {/* Blurred background layer */}
          <div className="absolute inset-0 z-0 blur-mask rounded-lg" />
          <div className="relative mx-auto z-10 max-w-2xl text-center">
            <div className="  space-y-4">
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


      <div className="py-8 md:py-16 px-4 md:px-0 w-full">
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
                <div className="md:text-lg">
                  <CardContent className="space-y-4">
                    <p className=" leading-relaxed">
                      La géobiologie étudie les influences de
                      l&apos;environnement sur les êtres vivants, analysant les
                      interactions entre les phénomènes naturels et le bien-être
                      des individus.
                    </p>

                    <p className="leading-relaxed">
                      D&apos;un point de vue étymologique,
                      &apos;géobiologie&apos; se compose de &apos;gé&apos; (la
                      Terre), &apos;bios&apos; (la vie) et &apos;logos&apos;
                      (l&apos;étude). Elle s&apos;intéresse à l&apos;équilibre
                      entre les forces terrestres et cosmiques qui nous
                      entourent.
                    </p>

                    <p className="leading-relaxed">
                      Le géobiologue optimise ces interactions pour créer un
                      environnement harmonieux et équilibré, transformant les
                      lieux pour développer l&apos;art d&apos;habiter sainement.
                    </p>
                  </CardContent>
                </div>
              </div>
            </div>
          </div>
          </section>
         
<section>
          {/* Principles */}
          <div className="my-16 bg-muted/50  p-8 md:p-16">
            <div className="flex items-center mb-8">
              <Leaf className="h-7 w-7 text-primary mr-3" />
              <h2>Les principes fondamentaux</h2>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <Card className="bg-gradient-to-br from-background to-muted/50 hover:shadow-md transition-all duration-300 h-full border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    Forces telluriques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p className="mb-3">
                    La Terre génère des énergies naturelles qui influencent les
                    êtres vivants. Les courants d&apos;eau souterrains peuvent
                    perturber l&apos;équilibre énergétique d&apos;un lieu et les
                    failles géologiques et les réseaux énergétiques terrestres
                    (Hartmann, Curry) influencent l&apos;environnement.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-background to-muted/50 hover:shadow-md transition-all duration-300 h-full border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    Influences modernes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p className="mb-3">
                    Le développement technologique a introduit de nouvelles
                    sources de perturbations. Champs électromagnétiques
                    (équipements électroniques, Wi-Fi, antennes relais, lignes à
                    haute tension) et la radioactivité naturelle ou artificielle
                    et autres pollutions invisibles
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/50 hover:shadow-md transition-all duration-300 h-full border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    Forces cosmiques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Les rayonnements célestes du soleil, de la lune et
                    d&apos;autres corps célestes. Les rayonnements solaires,
                    lunaires et les influences des astres participent à
                    l&apos;équilibre énergétique terrestre et peuvent affecter
                    notre bien-être quotidien.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-background to-muted/50 hover:shadow-md transition-all duration-300 h-full border-primary/10">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg text-primary">
                    Phénomènes subtils
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-base">
                  <p>
                    Certains lieux gardent l&apos;empreinte des émotions et
                    événements passés, pouvant affecter le bien-être des
                    habitants. On parle alors de mémoires des lieux ou
                    d&apos;énergies résiduelles qui peuvent être harmonisées par
                    un géobiologue expérimenté.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          </section>

          {/* Applications pratiques with improved layout */}
          <section className="my-16">
            <div className="flex items-center mb-8">
              <Info className="h-7 w-7 text-primary mr-3" />
              <h2>Applications pratiques</h2>
            </div>

            <p>
              La géobiologie analyse les influences énergétiques de notre
              environnement sur la santé et le bien-être.
            </p>
            <p>Ses applications touchent plusieurs domaines clés :</p>

            <div className="mt-16 grid gap-16  max-w-6xl mx-auto">
              {/* Entreprises */}
              <div className="space-y-4 text-center">
                <Image
                  src="/oliv.jpg"
                  alt="Géobiologie en entreprise"
                  width={250}
                  height={100}
                  className="aspect-square overflow-hidden object-cover   shadow-md mx-auto"
                />
                <h3>
                  Commerces, entreprises et industries ou établissements
                  d&apos;accueil collectif
                </h3>
                <p>
                  Un espace harmonisé favorise la concentration et réduit le
                  stress des équipes.
                </p>
              </div>

              {/* Agriculture */}
              <div className="space-y-4 text-center">
                <Image
                  src="/oliv.jpg"
                  alt="Géobiologie en agriculture"
                  width={250}
                  height={250}
                  className="aspect-square overflow-hidden object-cover  shadow-md mx-auto"
                />
                <h3>Espaces verts, domaines agricoles et élevages</h3>
                <p>
                  L&apos;influence énergétique du sol joue un rôle clé dans la
                  croissance des cultures et la santé animale.
                </p>
              </div>

              {/* Particuliers */}
              <div className="space-y-4 text-center">
                <Image
                  src="/oliv.jpg"
                  alt="Géobiologie pour particuliers"
                  width={250}
                  height={250}
                  className="aspect-square overflow-hidden object-cover  shadow-md mx-auto"
                />
                <h3>Particuliers (maison, appartements...)</h3>
                <p>
                  Une exposition excessive aux ondes electromagnétiques peut
                  perturber l&apos;équilibre naturel du corps et du mental.
                  L&apos;équilibre énergétique d&apos;un lieu influe sur la
                  qualité du sommeil et le bien-être quotidien.
                </p>
              </div>
            </div>
          </section>

          <section className="my-16 bg-primary  ">
            <div className="my-16  ">
              <div className="p-6 text-secondary  space-y-4">
                <h2 className="">Pourquoi faire appel à un géobiologue ?</h2>
                <p>
                  Faire appel à un géobiologue permet de créer un environnement
                  équilibré et harmonieux, en identifiant et en corrigeant les
                  influences négatives naturelles ou artificielles qui peuvent
                  affecter votre bien-être quotidien.
                </p>
                <p >
                  Que ce soit pour une maison, un lieu de travail ou un projet
                  d&apos;aménagement, la géobiologie offre une approche globale
                  et personnalisée pour améliorer votre qualité de vie et votre
                  relation à l&apos;espace.
                </p>
              </div>
            </div>
          </section>

          <section>
            <Card className="shadow-sm hover:shadow-md transition-all bg-white/70 md:p-6   border  duration-300 h-full border-primary/10 mx-auto">
              <CardHeader className="flex flex-col items-center">
                <div className="flex flex-col gap-4 w-full max-w-md">
                  <h3 className="text-xl font-bold text-center text-primary md:text-left">
                    Prêt à transformer votre espace ?
                  </h3>
                </div>
              </CardHeader>
              <CardContent className="text-base">
                <p className="text-muted-foreground text-center md:text-left">
                  Découvrez comment la géobiologie peut améliorer votre qualité
                  de vie et créer un environnement plus harmonieux.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mt-6">
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
      </div>
   
  )
}
