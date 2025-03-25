import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl space-y-12">
        <div className="space-y-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mes Services</h1>
          <p className="text-lg text-muted-foreground mx-auto max-w-[700px]">
            Une approche personnalisée pour harmoniser votre environnement et améliorer votre bien-être
          </p>
          <div className="h-px w-[100px] bg-border mx-auto my-4"></div>
        </div>

        <div className="space-y-4">
          <p className="text-center mx-auto max-w-[800px]">
            Je me propose de vous aider dans ces domaines particuliers que sont les relations avec votre environnement,
            l'analyse et le traîtement de déséquilibres liés à des interactions dont on ne perçoit pas toujours la
            cause.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Harmonisation de l'habitat</h3>
              <p className="text-sm text-muted-foreground">Pour un espace de vie équilibré</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Analyse complète de votre environnement</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Identification des sources d'influence positives et négatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Solutions personnalisées pour harmoniser votre espace</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Utilisation de géométrie adaptée et tracés régulateurs</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Détection de pollutions</h3>
              <p className="text-sm text-muted-foreground">Identifier les sources de perturbation</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Mesure des champs électromagnétiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Détection des courants souterrains</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Identification des failles géologiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Analyse des perturbations énergétiques</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Radiesthésie</h3>
              <p className="text-sm text-muted-foreground">Recherche d'eau et d'informations</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Recherche de sources d'eau</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Évaluation de la profondeur et du débit</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Détection de réseaux énergétiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Analyse des influences subtiles</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Nettoyage aurique</h3>
              <p className="text-sm text-muted-foreground">Purification énergétique</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Nettoyage des entités parasites</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Effacement des mémoires négatives</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Harmonisation des champs énergétiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Rééquilibrage énergétique des lieux</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Bien-être animal</h3>
              <p className="text-sm text-muted-foreground">Harmonisation pour les animaux</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Analyse des espaces pour animaux domestiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Optimisation des fermes et élevages</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Harmonisation des ruches</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Amélioration du bien-être animal</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-lg font-semibold leading-none tracking-tight">Conseils personnalisés</h3>
              <p className="text-sm text-muted-foreground">Accompagnement sur mesure</p>
            </div>
            <div className="flex-1 p-6 pt-0">
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Conseils pour l'aménagement de votre espace</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Recommandations pour améliorer votre bien-être</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Solutions adaptées à vos besoins spécifiques</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>Suivi personnalisé</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center p-6 pt-0">
              <Link href="/contact" className="w-full">
                <button className="w-full inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                  Prendre rendez-vous
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 space-y-6">
          <h2 className="text-2xl font-bold text-center">Comment se déroule une intervention ?</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Process Card 1 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">1. Premier contact</h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  Nous échangeons par téléphone ou par email pour comprendre vos besoins et définir le type
                  d'intervention nécessaire.
                </p>
              </div>
            </div>

            {/* Process Card 2 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">2. Visite et analyse</h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  Je me déplace sur le lieu concerné pour réaliser une analyse complète et identifier les problématiques
                  spécifiques.
                </p>
              </div>
            </div>

            {/* Process Card 3 */}
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-lg font-semibold leading-none tracking-tight">3. Solutions et suivi</h3>
              </div>
              <div className="p-6 pt-0">
                <p>
                  Je vous propose des solutions adaptées et assure un suivi pour vérifier l'efficacité des mesures mises
                  en place.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/contact">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Me contacter pour plus d'informations
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

