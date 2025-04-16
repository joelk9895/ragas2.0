"use client";
import Image from "next/image";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  const firstRowTestimonials = testimonials;
  const secondRowTestimonials = testimonials;

  return (
    <section className="py-10 sm:py-16 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif mb-8 md:mb-12 text-center">
          Here&apos;s what people <br className="hidden sm:inline" /> are saying
          about Ragas
        </h2>

        <div className="space-y-10 md:space-y-16 mask">
          {/* First row */}
          <div className="marquee">
            <div className="flex track">
              {firstRowTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="mx-2 sm:mx-4 p-4 sm:p-6 bg-background/80 backdrop-blur-sm border border-[#FDD674]/10 hover:border-[#FDD674]/20 rounded-lg shadow-sm w-[250px] sm:w-80 flex-shrink-0 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="img-container w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="avatar-img responsive-img w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              ))}
            </div>
            <div className="flex track">
              {firstRowTestimonials.map((testimonial, index) => (
                <div
                  key={`dup-${index}`}
                  className="mx-2 sm:mx-4 p-4 sm:p-6 bg-background/80 backdrop-blur-sm border border-[#FDD674]/10 hover:border-[#FDD674]/20 rounded-lg shadow-sm w-[250px] sm:w-80 flex-shrink-0 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="img-container w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="avatar-img responsive-img w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Second row */}
          <div className="marquee2">
            <div className="track2 flex">
              {secondRowTestimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="mx-2 sm:mx-4 p-4 sm:p-6 bg-background/80 backdrop-blur-sm border border-[#FDD674]/10 hover:border-[#FDD674]/20 rounded-lg shadow-sm w-[250px] sm:w-80 flex-shrink-0 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="img-container w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="avatar-img responsive-img w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              ))}
            </div>
            <div className="flex track2">
              {secondRowTestimonials.map((testimonial, index) => (
                <div
                  key={`dup-${index}`}
                  className="mx-2 sm:mx-4 p-4 sm:p-6 bg-background/80 backdrop-blur-sm border border-[#FDD674]/10 hover:border-[#FDD674]/20 rounded-lg shadow-sm w-[250px] sm:w-80 flex-shrink-0 transition-all duration-300 hover:shadow-md"
                >
                  <div className="flex items-center mb-3 sm:mb-4">
                    <div className="img-container w-10 sm:w-12 h-10 sm:h-12 mr-3 sm:mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="avatar-img responsive-img w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium text-sm sm:text-base">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground italic">
                    "{testimonial.testimonial}"
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
