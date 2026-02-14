
import React from "react";
import { TestimonialsColumn } from "./ui/testimonials-columns-1";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "10/10 Superb Website",
    name: "Arnav Malhotra",
    role: "HexaCraft Network",
  },
  {
    text: "You Nailed It Bro",
    name: "Siddharth Verma",
    role: "BetterHost Solutions",
  },
  {
    text: "Superb Work",
    name: "Kavya Iyer",
    role: "Matrix Cloud Systems",
  },
  {
    text: "Exceptional full-stack expertise. Delivered exactly what we needed for our Minecraft community hub.",
    name: "Rahul Deshmukh",
    role: "Lead Server Admin",
  },
  {
    text: "The Discord bot integration is seamless. It handled 50k+ members without a single hitch.",
    name: "Sneha Kapoor",
    role: "Community Director",
  },
  {
    text: "The gooey animations and modern UI really set my portfolio apart. ANSH9BOSS is a wizard.",
    name: "Aditya Joshi",
    role: "Web Developer",
  }
];

const firstColumn = testimonials.slice(0, 2);
const secondColumn = testimonials.slice(2, 4);
const thirdColumn = testimonials.slice(4, 6);

export const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-neutral-950 py-24 relative overflow-hidden">
      <div className="container z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[600px] mx-auto mb-16"
        >
          <div className="flex justify-center">
            <div className="border border-neutral-200 dark:border-neutral-800 py-1 px-4 rounded-full text-sm font-medium text-neutral-600 dark:text-neutral-400">
              Testimonials
            </div>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mt-5 text-neutral-900 dark:text-neutral-100 text-center">
            What my clients say
          </h2>
          <p className="text-center mt-5 text-neutral-600 dark:text-neutral-400">
            Real feedback from server owners and web clients across the globe.
          </p>
        </motion.div>

        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)] max-h-[600px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={12} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={15} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={13} />
        </div>
      </div>
    </section>
  );
};
