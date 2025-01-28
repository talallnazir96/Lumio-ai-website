import Header from "@/app/ClientGetStarted/components/Header";
import { MapPin, Mail } from "lucide-react";
import ContactForm from "../components/ContactForm";
import Footer from "@/features/landing/components/footer";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="mt-20 flex flex-col bg-white text-black">
        <main className="flex-grow">
          <ContactForm />

          {/* Contact Information */}
          <div className="w-full max-w-xl pb-20 pt-10 mt-8 ml-auto">
            <div className="bg-blue-600 text-white rounded-l-full p-8 space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 mt-1 flex-shrink-0" />
                <p>
                  Unit 3, 1st Floor 6/7 St Mary At Hill,
                  <br />
                  London, England, EC3R 8EE
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 flex-shrink-0" />
                <a href="mailto:info@lumioai.io" className="text-white hover:underline">
                  info@lumioai.io
                </a>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;