import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const highlights = [
  'CBSE affiliated with consistent 100% results',
  'State-of-the-art laboratories and facilities',
  'Experienced faculty with proven track record',
  'Comprehensive co-curricular programs',
];

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 bg-navy-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
                alt="Students in classroom"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-8 -right-8 bg-accent-amber text-navy-900 rounded-lg p-6 shadow-2xl"
            >
              <div className="text-4xl font-display font-bold mb-1">75+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-4 py-1.5 bg-accent-blue/10 border border-accent-blue/20 rounded-full mb-6">
              <span className="text-accent-blue text-sm font-semibold">
                About Our Institution
              </span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Building Character,
              <br />
              Nurturing Excellence
            </h2>

            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              For over seven decades, we have been committed to providing
              holistic education that goes beyond textbooks. Our mission is to
              develop well-rounded individuals prepared to excel in an
              ever-changing world.
            </p>

            <div className="space-y-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle className="w-6 h-6 text-accent-blue flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">{highlight}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-md hover:bg-white/20 transition-all"
            >
              Learn More About Us
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
