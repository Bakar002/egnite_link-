import React from 'react';
import { ClipboardCheck, Network, TrendingUp } from 'lucide-react';
import oneimg from "../assets/images/Group (1).png";
import twoimg from "../assets/images/Group (2).png";
import threeimg from "../assets/images/Group (3).png";
import fourimg from "../assets/images/Group (4).png";

export default function BusinessImpact() {
  const impacts = [
    {
      icon: oneimg,
      title: "Higher-Quality Lead Acquisition And Conversion Rates",
    },
    {
      icon: twoimg,
      title: "Reduced Overhead From Repetitive Marketing Tasks",
    },
    {
      icon: threeimg,
      title: "Predictive Resource Planning And Intelligent Campaign Allocation",
    },
    {
      icon: fourimg,
      title: "Real-Time Data Visibility Across Marketing Campaigns And Inventory",
    }
  ];

  return (
    <div className=" bg-black flex items-start justify-center p-8">
      <div className="max-w-7xl w-full">
         <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center pb-5">
            Business Impact
          </h1>
        

        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-8 rounded-3xl"
          style={{
            background: "linear-gradient(2430deg, #6D95FC -127.55%, rgba(21, 21, 21, 0.35) 77.97%)",
          }}
        >
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 flex flex-col items-center text-center"
            >
              <div className={`bg-gradient-to-br ${impact.gradient} p-4 rounded-2xl mb-6 flex items-center justify-center `}>
                {typeof impact.icon === "string" ? (
                  <img src={impact.icon} alt={impact.title} className="w-15 h-15" />
                ) : (
                  <impact.icon className="w-10 h-10 text-white" strokeWidth={1.5} />
                )}
              </div>
              <p className="text-white text-sm leading-relaxed font-light">
                {impact.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
