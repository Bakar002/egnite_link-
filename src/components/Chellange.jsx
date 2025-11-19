import React from 'react';

export default function ChallengeCards() {
  const cards = [
    {
      number: 1,
      title: "Fragmented platforms and disconnected data limit growth."
    },
    {
      number: 2,
      title: "Marketing and management operate in isolation."
    },
    {
      number: 3,
      title: "Manual Reporting Delays Decisions."
    }
  ];

  return (
    <div className="bg-black flex items-center justify-center px-4 sm:px-6 md:px-0">
      <div className="max-w-5xl w-full">

        {/* Title */}
        <h1 className="
          text-white 
          text-2xl 
          sm:text-3xl 
          md:text-4xl       /* md & lg untouched */
          text-center 
          mb-10 sm:mb-12 md:mb-16
        ">
          The Challenge
        </h1>

        {/* Cards Container */}
        <div className="
          grid 
          grid-cols-1 
          sm:grid-cols-2 
          md:grid-cols-3   /* md untouched */
          gap-6 sm:gap-8 md:gap-9
        ">
          {cards.map((card) => (
            <div
              key={card.number}
              className="
                backdrop-blur-sm 
                rounded-3xl 
                p-6 
                sm:p-7 
                md:p-8          /* md untouched */
                border border-white/60 
                flex flex-col 
                items-center 
                justify-between 
                min-h-[230px] 
                sm:min-h-[250px] 
                md:min-h-[280px] /* md untouched */
              "
              style={{
                background:
                  "linear-gradient(148.43deg, #262628 29.96%, #4B4B4D 81.02%)"
              }}
            >
              {/* Number Circle */}
              <div className="
                bg-gradient-to-br from-cyan-500 to-blue-600 
                rounded-full 
                w-12 h-12 
                sm:w-14 sm:h-14 
                md:w-16 md:h-16   /* md untouched */
                flex items-center justify-center 
                mb-6 sm:mb-7 md:mb-8
                shadow-lg shadow-cyan-500/30
              ">
                <span className="
                  text-white 
                  text-xl 
                  sm:text-2xl 
                  md:text-2xl     /* md untouched */
                  font-semibold
                ">
                  {card.number}
                </span>
              </div>

              {/* Title */}
              <p className="
                text-white 
                text-center 
                text-sm 
                sm:text-base 
                md:text-base     /* md untouched */
                font-normal 
                leading-relaxed
              ">
                {card.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
