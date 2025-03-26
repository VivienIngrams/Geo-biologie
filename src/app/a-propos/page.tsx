
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-4xl space-y-12">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">À Propos de Moi</h1>
          <p className="text-lg text-muted-foreground">Joëlle Villegas, géobiologue certifiée par Bioterres</p>
          <div className="h-px w-full bg-border my-4"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div>
            <Image
              src="/oliviers.jpeg"
              width={500}
              height={500}
              alt="Joëlle Villegas"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">Mon Parcours</h2>
            <p>
              Passionnée par les relations entre l&apos;être humain et son environnement, j&apos;ai suivi une formation rigoureuse
              auprès de Bioterres pour devenir géobiologue certifiée.
            </p>
            <p>
              Ma démarche s&apos;inscrit dans une approche holistique, considérant l&apos;être humain dans sa globalité et dans
              son interaction avec le monde qui l&apos;entoure.
            </p>
            <p>
              Je mets aujourd&apos;hui mes compétences à votre service pour vous aider à retrouver l&apos;harmonie dans votre
              environnement et améliorer votre bien-être au quotidien.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Mes domaines de compétences et formations</h2>
          <div className="space-y-4">
            <ul className="list-disc pl-6 space-y-2">
              <li>Géobiologie certifiée par Bioterres</li>
              <li>Tarot initiatique de Wirth, avec Régine Brzesc-Colonges</li>
              <li>Thérapie avec la trame de Jérémie Guerry</li>
              <li>Le langage des oiseaux avec Jérémie Guerry</li>
              <li>La Kabbale avec Jean Haab</li>
              <li>L&apos;alchimie avec Jean Haab</li>
              <li>
                Les plantes, les huiles essentielles, gemmothérapie, alcoolature... Christian Escriva d&apos;après l&apos;approche
                des plantes selon Goethe
              </li>
              <li>L&apos;alchimie, les maladies... Thérapie au diapason... de Tony Ceron</li>
              <li>Homéopathie avec Alain Launay</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Mon engagement : la charte du géobiologue</h2>
          <div className="space-y-4">
            <p>
              En tant que géobiologue professionnelle, je m&apos;engage à respecter la charte du géobiologue qui comprend
              notamment :
            </p>
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <strong>Article 1:</strong> La géobiologie implique la conception holistique de l&apos;homme et du monde. La
                maison, l&apos;entreprise, ou la collectivité, n&apos;étant pas séparés de cet ensemble, il s&apos;en suit que
                l&apos;équilibre, ou l&apos;harmonie énergétique, est une clé essentielle du bien-être et de la bonne entente
                entre les êtres. Une pratique saine de la géobiologie permet de rétablir l&apos;équilibre ou l&apos;harmonie
                énergétique du vivant.
              </li>
              <li>
                <strong>Article 2:</strong> Le géobiologue s&apos;engage à exercer joyeusement son activité avec humanité,
                probité et loyauté, cela dans la limite de ses aptitudes et de ses compétences, il n&apos;entreprend pas de
                prestations pour lesquelles il n&apos;est pas suffisamment préparé.
              </li>
              <li>
                <strong>Article 3:</strong> Le géobiologue s&apos;engage à ne présenter que les titres et les compétences
                réelles qu&apos;il possède, et s&apos;interdit toute publicité mensongère sur son activité, à exposer clairement
                aux usagers la nature, les prix et les modalités des services qui leur seront dispensés, à pratiquer des
                honoraires raisonnables conformes à l&apos;éthique du secteur en tenant compte de ses compétences, de
                l&apos;ampleur du travail demandé, et, dans la mesure du possible, des ressources de l&apos;usager.
              </li>
              <li>
                <strong>Article 4:</strong> Le géobiologue s&apos;engage à toujours observer le principe fondamental du
                respect de la personne humaine, celui de l&apos;animal et celui du lieu; il respecte au mieux le secret
                professionnel afin de protéger la vie privée, l&apos;honneur et la réputation du client.
              </li>
              <li>
                <strong>Article 5:</strong> Le géobiologue, s&apos;il n&apos;est pas médecin, s&apos;abstient de poser des diagnostics
                d&apos;ordre médical, ou de conseiller à un usager de suspendre un traitement ou un suivi médical en cours,
                il laisse à l&apos;usager sa totale liberté de choix thérapeutique et cherche toujours à respecter au maximum
                son autonomie.
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Ma philosophie</h2>
          <div className="space-y-4">
            <p>
              Je crois profondément que notre bien-être est intimement lié à notre environnement. Nos lieux de vie et de
              travail ont une influence considérable sur notre santé physique et mentale.
            </p>
            <p>
              Mon approche vise à rétablir l&apos;harmonie entre l&apos;être humain et son environnement, en identifiant et en
              neutralisant les influences négatives, tout en favorisant les énergies positives.
            </p>
            <p>
              Chaque lieu, chaque personne est unique, c&apos;est pourquoi j&apos;adapte mes interventions à vos besoins
              spécifiques, en tenant compte de votre sensibilité et de votre contexte particulier.
            </p>
          </div>
        </div>

        <div className="flex justify-center pt-8">
          <Link href="/contact">
            <button className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-base font-medium text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
              Me contacter
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

