import React from 'react';


const benefits = [{
    id: 1,
    icon: <img alt={"The New Way"} src={'/assets/images/home/candidates.svg'} className={'w-32 h-32'} />,
    name: "The New Way",
    description: "Going through 100+ candidates to evaluate them is a thing of the past."
}, {
    id: 2,
    icon: <img alt={"Cut Down Costs"} src={'/assets/images/home/profit.svg'} className={'w-32 h-32'} />,
    name: "Cut Down Costs",
    description: "You don't have to deal with expensive staffing agencies anymore."
}, {
    id: 3,
    icon: <img alt={"Simplify"} src={'/assets/images/home/compliance.svg'} className={'w-32 h-32'} />,
    name: "Simplify",
    description: "No need to worry about global compliance, benefits and payroll."
}, {
    id: 4,
    icon: <img alt={"Save Time"} src={'/assets/images/home/time.svg'} className={'w-32 h-32'} />,
    name: "Save Time",
    description: "No need to worry about global compliance, benefits and payroll."
}]

const BenefitSection = () => {
    return (
        <div className="bg-white ">
            <div className="bg-blue-600 flex text-white flex-col gap-9 py-20 text-center">
                <h3 className={"text-xl"}>
                    Tired of traditional ways of hiring expert developers?
                </h3>

                <p className={"text-5xl"}>
                    LumioAI makes hiring easy
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 p-24 gap-8 container m-auto">
                {benefits.map((benefit) => (<div className={"flex flex-col items-start"}>
                    <div className="flex items-center gap-3">
                        <div className={""}>
                            {benefit.icon}
                        </div>

                        <h3 className="font-bold">{benefit.name}</h3>
                    </div>
                    <div className={""}>
                        <p>{benefit.description}</p>
                    </div>

                </div>))}

            </div>
        </div>);
};

export default BenefitSection;