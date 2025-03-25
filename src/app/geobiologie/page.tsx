import { ArrowRight } from "lucide-react"
import Link from "next/link"

import { Button } from "../components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card"
import { Separator } from "../components/ui/separator"

export default function GeobiologiePage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-3xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">La Géobiologie</h1>
          <p className="text-lg text-muted-foreground">Comprendre l'influence de l'environnement sur le vivant</p>
          <Separator className="my-4" />
        </div>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Définition et origines</h2>
          <div className="space-y-4">
            <p>
              Étymologiquement, la géobiologie se décompose en "gé" (la terre), "bios" (la vie) et "logos" (l'étude).
            </p>
            <p>
              D'après une définition classique de la géobiologie (Larousse) elle serait une "science qui s'occupe des
              rapports de l'évolution cosmique et géologique de la planète avec celle de la matière vivante".
            </p>
            <p>
              Le géobiologue étudie donc, et tend à optimiser leur interaction avec le vivant, les influences naturelles
              d'origine tellurique d'une part, et celles plus artificielles mais bien réelles initiées par le monde
              moderne (électromagnétisme, radioactivité ..)
            </p>
            <p>
              À cela, il faut ajouter les phénomènes "paranormaux" qui peuvent parfois apporter des perturbations
              sensibles dans un lieu.
            </p>
            <blockquote className="border-l-4 border-primary pl-4 italic">
              "La géobiologie est l'influence de la Terre sur tout ce qui vit. Notre globe est considéré dans son
              contexte planétaire, car ses mouvements sont conditionnés par ceux des astres qui nous entourent. Cette
              discipline prend donc en compte deux types de forces:
              <br />
              <br />- celles qui sont propres à la Terre, elles sont appelées "telluriques".
              <br />- celles qui viennent du ciel sont les "cosmiques".
              <br />
              <br />
              La géobiologie va donc faire appel aussi bien à la géologie, la biologie, l'hydrologie qu'à
              l'astrophysique."
              <br />— Gilbert Le Cossec, "Le souffle de la Terre"
            </blockquote>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Histoire de la géobiologie</h2>
          <div className="space-y-4">
            <p>
              Le Feng Shui est apparu en Chine voilà plus de 3000 ans, et vise à optimiser les emplacements des maisons
              d'habitation ou des tombeaux, ainsi que leur disposition interne, en fonction des "vents et de l'eau" (si
              l'on s'en tient à la traduction littérale du terme); il est considéré comme l'ancêtre de la géobiologie.
            </p>
            <p>
              On peut remonter encore plus loin avec le "Vaastu Shaastra" pour les hindous, ou la géomancie pour les
              perses.
            </p>
            <p>
              Toutes les anciennes cultures considèrent que le lieu a une influence déterminante, que certains
              emplacements sont particuliers, ne serait-ce qu'en observant (comme le faisaient par exemple les indiens
              d'Amérique) la réaction des animaux en certains endroits.
            </p>
            <p>
              Hippocrate, le célèbre médecin et philosophe grec, déclarait, 4 siècles avant notre ère, que la santé des
              individus dépendait de quatre facteurs: leur constitution, l'air, l'eau, et l'état du sous-sol.
            </p>
            <p>
              Très tôt, le rôle des cours d'eau souterrains a été étudié et pris en compte, de même que la manière de
              les détecter, ce qui a induit l'apparition des "sourciers" (appelés autrefois les "rhabdomanciens"),
              capables de découvrir l'eau, mais aussi pour certains, sa profondeur sous terre, voire son débit.
            </p>
            <p>
              La technique utilisée par le sourcier est appelée radiesthésie, elle permet d'ailleurs de dépasser
              largement le seul cadre de la recherche d'eaux souterraines.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Principes de base de la géobiologie</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Forces telluriques</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les influences naturelles d'origine tellurique comprennent les courants d'eau souterrains, les failles
                  géologiques, les réseaux énergétiques terrestres comme les lignes Hartmann et Curry.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Forces cosmiques</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les influences cosmiques proviennent des rayonnements célestes, notamment du soleil et de la lune,
                  mais aussi d'autres corps célestes qui interagissent avec notre environnement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Influences modernes</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les influences artificielles du monde moderne incluent les champs électromagnétiques générés par les
                  appareils électriques, les antennes relais, les lignes à haute tension, etc.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Phénomènes subtils</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Les phénomènes "paranormaux" peuvent inclure les mémoires des lieux, les perturbations énergétiques
                  liées à l'histoire du lieu, ou d'autres influences subtiles qui affectent le bien-être.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">La charte du géobiologue</h2>
          <div className="space-y-4">
            <p>
              En tant que géobiologue professionnelle, je m'engage à respecter la charte du géobiologue qui inclut
              notamment :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Exercer avec humanité, probité et loyauté</li>
              <li>Respecter le principe fondamental du respect de la personne humaine, de l'animal et du lieu</li>
              <li>Respecter le secret professionnel et la vie privée des clients</li>
              <li>Ne pas poser de diagnostic médical si je ne suis pas médecin</li>
              <li>Me tenir régulièrement informée de l'évolution des disciplines que je pratique</li>
              <li>Ne pas créer de relation de dépendance avec mes clients</li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold">Applications pratiques</h2>
          <div className="space-y-4">
            <p>La géobiologie trouve des applications dans de nombreux domaines de notre vie quotidienne :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Optimisation des lieux d'habitation pour améliorer le bien-être et la santé</li>
              <li>Recherche de sources d'eau souterraines</li>
              <li>Harmonisation des espaces de travail pour une meilleure productivité</li>
              <li>Amélioration du bien-être des animaux dans les fermes et élevages</li>
              <li>Protection contre les pollutions électromagnétiques modernes</li>
              <li>Résolution de problèmes récurrents dans certains lieux</li>
            </ul>
          </div>
        </section>

        <div className="flex justify-center pt-8">
          <Link href="/services">
            <Button>
              Découvrir mes services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
