import {
  ArrowRight,
  Map,
  Scale,
  Leaf,
  Globe,
  Lightbulb,
  Users,
  BookOpen,
  Award,
} from 'lucide-react'
import Link from 'next/link'

import { Button } from '../components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../components/ui/card'
import { Separator } from '../components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'

export default function GeobiologiePage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-4xl">
        {/* Hero Section */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-3">
            La Géobiologie
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La géobiologie étudie l&apos;influence de l&apos;environnement sur
            le vivant, en considérant les forces telluriques, cosmiques et les
            influences modernes.
          </p>
          <Separator className="my-6" />
        </div>

    
        <div className="mb-10">
          <CardHeader>
            <CardTitle className="flex items-center">
              <BookOpen className="h-5 w-5 text-primary mr-2" />
              La géobiologie est une science basée sur les lois universelles
              utilisée pour purifier notre espace de vie
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p>
               Lorsqu&apos;on ne peut pas changer un lieu, on peut
              néanmoins le transformer et développer l&apos;art d&apos;habiter.
              Réussir une harmonisation, c&apos;est alléger les corps subtils
              qui polluent l&apos;état d&apos;esprit et la santé globale de
              l&apos;occupant. Les influences peuvent être nombreuses: mémoires,
              âmes errantes, forces telluriques et géophysiques, influences
              électromagnétiques artificielles, réseaux, vortex, etc.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium mb-2">Origines</h3>
                <p className=" text-muted-foreground">
                  Pratiquée depuis plus de 3000 ans (Feng Shui en Chine, Vaastu
                  Shaastra en Inde), la géobiologie moderne intègre science et
                  traditions. C&apos;est un processus oral issu d&apos;une tradition ancestrale
              qui influence l&apos;état vibratoire du lieu, telle une invisible
              présence.
                </p>
              </div>
              <div>
                <h3 className="font-medium mb-2">Applications</h3>
                <ul className=" text-muted-foreground space-y-1">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Habitat et bien-être</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Espaces professionnels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Agriculture et élevage</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </div>

        {/* Main Content */}
        <div className="space-y-8 mb-10">
          {/* Principles Cards */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Leaf className="h-5 w-5 text-primary mr-2" />
              Principes fondamentaux
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Forces telluriques
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Courants d&apos;eau souterrains, failles géologiques, réseaux
                  Hartmann et Curry.
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">Forces cosmiques</CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Rayonnements célestes du soleil, de la lune et d&apos;autres
                  corps célestes.
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Influences modernes
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Champs électromagnétiques, appareils électriques, antennes
                  relais.
                </CardContent>
              </Card>
              <Card className="bg-muted/50">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base">
                    Phénomènes subtils
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm">
                  Mémoires des lieux et perturbations énergétiques historiques.
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Principles of Intervention */}
          <div>
            <h2 className="text-xl font-bold mb-4 flex items-center">
              <Lightbulb className="h-5 w-5 text-primary mr-2" />
              Principes d&apos;intervention
            </h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <h3 className="font-medium">Prévention</h3>
                <p className="text-sm text-muted-foreground">
                  Identification des risques environnementaux et prévention
                  primaire des maladies.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Épigénétique</h3>
                <p className="text-sm text-muted-foreground">
                  Impact de l&apos;environnement sur l&apos;expression
                  génétique.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Exposome</h3>
                <p className="text-sm text-muted-foreground">
                  Évaluation des expositions environnementales cumulées.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Singularité du lieu</h3>
                <p className="text-sm text-muted-foreground">
                  Approches adaptées à l&apos;unicité de chaque lieu.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Approche pluridisciplinaire</h3>
                <p className="text-sm text-muted-foreground">
                  Collaboration avec d&apos;autres disciplines pour une vision
                  complète.
                </p>
              </div>
              <div className="space-y-1">
                <h3 className="font-medium">Dialogue interdisciplinaire</h3>
                <p className="text-sm text-muted-foreground">
                  Échanges avec les disciplines académiques pour
                  l&apos;innovation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs for Legal and Professional Info */}
        <Tabs defaultValue="legal" className="mb-10">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="legal">Fondements juridiques</TabsTrigger>
            <TabsTrigger value="professional">La profession</TabsTrigger>
          </TabsList>

          <TabsContent value="legal" className="p-4 border rounded-md mt-2">
            <div className="space-y-4">
              <div className="flex items-start">
                <Scale className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">
                    Charte de l&apos;Environnement (2005)
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    L&apos;article 1 garantit le droit de chacun à vivre dans un
                    environnement équilibré et respectueux de la santé.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Scale className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">
                    Code de l&apos;environnement et Code de l&apos;urbanisme
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Ces textes soulignent l&apos;importance de prévenir les
                    risques environnementaux, sanitaires, et sonores.
                  </p>
                </div>
              </div>
              <div>
                <h3 className="font-medium mb-2">La charte du géobiologue</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  <p className="text-sm text-muted-foreground flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Exercer avec humanité et loyauté</span>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Respecter la personne, l&apos;animal et le lieu</span>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Respecter le secret professionnel</span>
                  </p>
                  <p className="text-sm text-muted-foreground flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-primary"></div>
                    <span>Ne pas poser de diagnostic médical</span>
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent
            value="professional"
            className="p-4 border rounded-md mt-2"
          >
            <div className="space-y-4">
              <div className="flex items-start">
                <Award className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">
                    Évolution et cadre professionnel
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Registre National des Géobiologues professionnels et
                    formations rigoureuses.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Dynamisme et visibilité</h3>
                  <p className="text-sm text-muted-foreground">
                    Congrès annuel et Printemps de la Géobiologie pour renforcer
                    la notoriété.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Globe className="h-5 w-5 text-primary mr-3 mt-1" />
                <div>
                  <h3 className="font-medium">Internationalisation</h3>
                  <p className="text-sm text-muted-foreground">
                    Collaborations internationales et publications en plusieurs
                    langues.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Conclusion and CTA */}
        <div className="space-y-6">
          <div className="bg-muted p-4 rounded-lg">
            <h2 className="text-lg font-bold mb-2">Conclusion</h2>
            <p className="text-sm">
              La géobiologie, forte de plus de 40 ans d&apos;histoire, occupe
              une place transversale dans le paysage socioprofessionnel
              français. Elle offre des solutions uniques aux problématiques
              environnementales, favorise une meilleure compréhension du vivant
              et s&apos;affirme comme un acteur essentiel pour la santé et le
              bien-être.
            </p>
          </div>

          <div className="flex justify-center">
            <Card className="w-full max-w-xs">
              <CardHeader className="pb-2">
                <div className="flex items-center">
                  <Map className="h-6 w-6 text-primary mr-3" />
                  <div>
                    <CardTitle className="text-base">Guide pratique</CardTitle>
                    <CardDescription className="text-xs">
                      La Confédération nationale de géobiologie
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Link href="/services">
                    <Button size="sm" className="group">
                      Lire le guide
                      <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4">
            <Link href="/services" className="w-full sm:w-auto">
              <Button className="w-full group">
                Découvrir mes services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full">
                Me contacter
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
