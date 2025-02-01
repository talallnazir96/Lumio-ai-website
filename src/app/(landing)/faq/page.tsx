import AntiCheatingRules from "@/app/WorkForDeveloper/AntiCheatingRules/page";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        id: "collapseOne",
        question: "What is LumioAI?",
        answer: "LumioAI is a multifaceted platform powered by AI that offers AI tools, solutions, and remote talent.",
    },
    {
        id: "collapseTwo",
        question: "What does LumioAI do?",
        answer: "We help companies adopt AI in their systems by providing custom tools and solutions.",
    },
    {
        id: "collapseThree",
        question: "How does LumioAI remote talent hiring work?",
        answer:
            "We connect AI and software engineers to companies, ensuring expertise through rigorous vetting and matching them to specific requirements.",
    },
    {
        id: "collapseFour",
        question: "How do you vet your candidates?",
        answer:
            "We have a comprehensive vetting system to evaluate each candidate's skills and expertise. This process includes technical assessments, interviews, and background checks.",
    },
    {
        id: "collapseFive",
        question: "How does the process work for companies seeking talent?",
        answer:
            "Companies provide us with detailed information about their talent needs. Our internal AI suggests the best candidates based on those requirements, ensuring a perfect match.",
    },
    {
        id: "collapseSix",
        question: "What services do you provide beyond connecting talent?",
        answer:
            "In addition to connecting companies with top talent, we handle payroll, benefits, and compliance with international laws.",
    },
    {
        id: "collapseSeven",
        question: "Can you help with hiring remote talent internationally?",
        answer:
            "Yes, we specialize in connecting companies with remote AI and software engineers globally, handling payroll and compliance via our Deel partnership.",
    },
    {
        id: "collapseEight",
        question: "What types of companies do you work with?",
        answer:
            "We work with startups to large enterprises, providing AI tools, solutions, and highly skilled engineers to support innovation across industries.",
    },
];

const FaqPage = () => {
    return <>
        <section className="bannersection innerbanner pb-110">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bannerheading">
                            <h1>
                                Frequently Asked Questions
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="faq">
            <div className="container text-center">
                <div className="row">
                    <div className="col-lg-10 ">
                        <Accordion type="single" collapsible className="accordion" id="accordionExample">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={faq.id} value={faq.id} className="accordion-item">
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <AccordionTrigger
                                            className={`accordion-button justify-content-between`}
                                            aria-expanded={index === 0}
                                            aria-controls={faq.id}
                                        >
                                            {faq.question}
                                        </AccordionTrigger>
                                    </h2>
                                    <AccordionContent
                                        id={faq.id}
                                        className={``}
                                        aria-labelledby={`heading${index}`}
                                    >
                                        <div className="accordion-body">{faq.answer}</div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </div>
        </section>
        <div className="flex items-center justify-center">
            <AntiCheatingRules />
        </div>
    </>
}

export default FaqPage