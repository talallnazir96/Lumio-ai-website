import React from "react";
import { AlertCircle, Shield, Eye, AlertTriangle, Info } from "lucide-react";
import Footer from "@/features/landing/components/footer";

export default function AntiCheatingRules() {
  return (
    <div>
      <div className="max-w-full mx-auto p-6 space-y-8 bg-white text-black">
        <h1 className="text-2xl font-bold text-center mb-6">Anti-cheating rules and measures</h1>

        {/* Introduction */}
        <div className="px-4 md:px-10">
          <p className="text-gray-700">
            At LumiAI, we are committed to ensuring the integrity and fairness of our vetting process for developers.
            To maintain a high standard, we have implemented a rigorous AI-powered vetting system designed to evaluate
            candidates' technical skills accurately. This policy outlines our anti-cheating rules and the measures we
            take to prevent and detect any dishonest behavior during the vetting process.
          </p>
        </div>

        {/* What we consider cheating */}
        <section className="space-y-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold">What we consider cheating</h2>
          </div>
          <ul className="space-y-3 pl-6">
            <li className="list-decimal">
              <span className="font-semibold">Plagiarism:</span> Submitting work that is not your own, including copying
              code from external sources without proper attribution.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Collaboration:</span> Receiving unauthorized help from others during the
              vetting process.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Use of unauthorized resources:</span> Utilizing books, online resources, or
              other aids that are not explicitly allowed.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Manipulating the system:</span> Attempting to interfere with or alter the
              AI-powered system to gain an unfair advantage.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Misrepresentation:</span> Providing false information about your identity or
              qualifications.
            </li>
          </ul>
        </section>

        {/* Detection measures */}
        <section className="space-y-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Eye className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold">Detection measures</h2>
          </div>
          <ul className="space-y-3 pl-6">
            <li className="list-decimal">
              <span className="font-semibold">Code similarity analysis:</span> Our AI system compares submitted code
              against a vast database to detect plagiarism.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Behavioral monitoring:</span> We monitor patterns of behavior during the
              vetting process to identify anomalies that may indicate cheating.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Proctoring tools:</span> We may use online proctoring tools to monitor
              candidates in real-time.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Audit logs:</span> Detailed logs of candidate interactions with the system
              are maintained and reviewed for suspicious activity.
            </li>
          </ul>
        </section>

        {/* Consequences of cheating */}
        <section className="space-y-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold">Consequences of cheating</h2>
          </div>
          <ul className="space-y-3 pl-6">
            <li className="list-decimal">
              <span className="font-semibold">Immediate disqualification:</span> Your application will be rejected, and
              you will be barred from reapplying for a specified period.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Notification:</span> Your current or prospective employers may be informed
              of the dishonest behavior.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Permanent ban:</span> Repeat offenders may be permanently banned from using
              LumiAI.
            </li>
            <li className="list-decimal">
              <span className="font-semibold">Legal action:</span> In severe cases, we reserve the right to pursue legal
              action for any damages caused by cheating.
            </li>
          </ul>
        </section>

        {/* Additionally */}
        <section className="space-y-4 px-4 md:px-8">
          <div className="flex items-center gap-2">
            <Info className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold">Additionally</h2>
          </div>
          <ul className="space-y-3 list-disc pl-6">
            <li>
              We encourage candidates and users of our platform to report any suspicious activity or potential cheating.
              Reports can be made confidentially through our contact form.
            </li>
            <li>
              Our goal is to provide a fair and transparent vetting process for all candidates. By adhering to this
              policy, we ensure that everyone is evaluated based on their true abilities and qualifications.
            </li>
            <li>
              This policy may be updated periodically to reflect new technologies or changes in our vetting process.
              Candidates are encouraged to review this policy regularly to stay informed about our anti-cheating measures.
            </li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
}