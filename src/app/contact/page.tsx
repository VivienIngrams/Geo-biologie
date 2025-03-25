import ContactForm from '../components/ContactForm';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";

export default function ContactPage() {

  return (
    <div className="min-h-screen mt-20 xl:mt-20 bg-white text-gray-500 ">
      <div className="xl:h-[90%] flex flex-col items-center justify-center mx-6 xl:w-1/3 xl:mx-auto">
        <h1 className="text-2xl xl:text-3xl  w-full text-left font-cinzel py-4">
          {`Contactez-moi !`}        </h1>
        <ContactForm  />
      </div>
    </div>
  );
}
