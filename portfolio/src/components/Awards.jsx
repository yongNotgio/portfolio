import { motion } from 'framer-motion';

const awards = [
  { title: 'National Champion, Most Disruptive Idea, & Best Business Model', org: 'DICT: Philippine Startup Challenge X, Clark Pampanga', year: 'DEC 2025' },
  { title: 'Best Research Presentation (Top 5% Paper)', org: '26th International Symposium on Advanced Intelligent Systems, Cheongju South Korea', year: 'NOV 2025' },
  { title: 'Champion & Most Market-Ready Innovation', org: 'WESTnovation Challenge, West Visayas State University System, La Paz, Iloilo City', year: 'NOV 2025' },
  { title: 'Champion, Best Pitch, & Most Innovative', org: 'DICT: PSC X Regional, Region VI – Iloilo City', year: 'OCT 2025' },
  { title: 'Champion & Visionary Innovator', org: 'DICT: AI.DEAS for Impact, Region VI – Bacolod City', year: 'SEP 2025' },
  { title: '1st Runner-Up', org: 'DOST: National AI Fest – AI Hackathon', year: 'AUG 2025' },
];

function Awards() {
  return (
    <section id="awards" className="py-20 md:py-28">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            My <span>Achievements</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-4 mb-8 last:mb-0"
            >
              <div className="flex flex-col items-center">
                <div className="timeline-dot" />
                {index < awards.length - 1 && (
                  <div className="w-0.5 flex-1 bg-darkBorder mt-2" />
                )}
              </div>
              <div className="pb-8">
                <span className="text-xs text-textMuted uppercase tracking-wider">{award.year}</span>
                <h3 className="text-lg font-semibold text-accent mt-1">{award.title}</h3>
                <p className="text-textMuted text-sm mt-1">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Awards;
