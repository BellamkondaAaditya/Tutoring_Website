import { motion } from 'framer-motion'
import {
  GraduationCap,
  Code,
  Calculator,
  Award,
  BookOpen,
  Star,
  CheckCircle,
  Mail,
  ArrowRight
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tight">
            <span className="text-foreground">Aaditya</span>
            <span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted-foreground">
            <a href="#about" className="hover:text-foreground transition-colors">About</a>
            <a href="#services" className="hover:text-foreground transition-colors">Services</a>
            <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonials</a>
          </div>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90 transition-colors"
          >
            Start Learning
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="absolute inset-0 bg-grid-white opacity-20 [mask-image:linear-gradient(to_bottom,white,transparent)] pointer-events-none" />

        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-8 border border-secondary/20">
              <Award className="w-4 h-4" />
              <span>IB Score 43/45 (7s in CS & Maths AA HL)</span>
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
            >
              Master the IB with <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
                Elite-Level
              </span> Tutoring
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Unlock your true potential in <span className="text-foreground font-medium">Computer Science</span> and <span className="text-foreground font-medium">Mathematics</span>. Taught by a University of Warwick First Class graduate.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95">
                Book a Free Consultation <ArrowRight className="w-5 h-5" />
              </a>
              <a href="#about" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 text-foreground font-semibold text-lg hover:bg-white/10 transition-colors border border-white/10">
                View My Credentials
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats / Proof Section */}
      <section className="py-12 border-y border-white/5 bg-white/[0.02]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-x divide-white/5">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">43<span className="text-secondary text-2xl">/45</span></div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">IB Score</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">7<span className="text-secondary text-2xl">HL</span></div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">CS & Maths AA</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">1st</div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">BSc & MSc Warwick</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-foreground mb-2">100<span className="text-primary text-3xl">%</span></div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex-1 space-y-8"
          >
            <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wide uppercase text-sm">
              <GraduationCap className="w-5 h-5" /> The Tutor
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Hi, I'm Aaditya Srikrishna Bellamkonda
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I understand exactly what it takes to excel in the IB diploma. Having navigated the rigors myself to achieve a <strong className="text-foreground font-semibold">43 out of 45</strong>, including <strong className="text-foreground font-semibold">7s in Higher Level Computer Science and Mathematics AA</strong>, I know the syllabus inside out.
              </p>
              <p>
                I hold a <strong className="text-foreground font-semibold">BSc in Data Science</strong> and an <strong className="text-foreground font-semibold">MSc in Data Analytics</strong> from the prestigious <strong className="text-secondary font-semibold">University of Warwick</strong>, both with First-Class Honours. My deep academic background means I don't just teach the syllabus—I explain the deeper 'why' mathematically and computationally, ensuring you truly understand the core concepts.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {[
                "Targeted exam techniques",
                "Internal Assessment (IA) guidance",
                "Complex concept breakdown",
                "Personalized learning plans"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.6 } }}
            viewport={{ once: true }}
            className="flex-1 w-full aspect-square md:aspect-[4/5] relative rounded-3xl overflow-hidden border border-white/10 bg-white/5"
          >
            {/* Elegant placeholder for a professional photo */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/10" />
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-center p-8 backdrop-blur-[2px]">
              <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                <BookOpen className="w-10 h-10 text-primary" />
              </div>
              <p className="text-lg font-medium text-foreground">Dedicated to turning potential into excellence.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 md:py-32 bg-white/[0.02] px-6 border-y border-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Expertised Coaching</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Specialized tutoring tailored to the specific demands of the toughest IB subjects.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-3xl border border-white/10 bg-background/50 backdrop-blur-md hover:border-primary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150" />
              <Code className="w-14 h-14 text-primary mb-8" />
              <h3 className="text-3xl font-bold mb-4">IB Computer Science</h3>
              <div className="text-primary font-semibold mb-6">HL & SL • Papers 1, 2, 3 • IA Support</div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                From pseudo-code and OOP in Java, to mastering database concepts and computational thinking. Get unparalleled support for your programming dossier (IA) from a Data Science expert.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-primary" /> Java & Object Oriented Programming</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-primary" /> Option D: OOP (or equivalent)</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-primary" /> Step-by-step IA Development</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.2 } }}
              viewport={{ once: true }}
              className="group p-8 md:p-10 rounded-3xl border border-white/10 bg-background/50 backdrop-blur-md hover:border-secondary/50 transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] -mr-32 -mt-32 transition-transform group-hover:scale-150" />
              <Calculator className="w-14 h-14 text-secondary mb-8" />
              <h3 className="text-3xl font-bold mb-4">IB Mathematics</h3>
              <div className="text-secondary font-semibold mb-6">Analysis & Approaches (AA) HL & SL</div>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                Tackle rigorous calculus, complex numbers, and proof techniques with confidence. I teach intuitive mathematical thinking rather than rote memorization, crucial for the AA syllabus.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-secondary" /> Advanced Calculus & Algebra</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-secondary" /> Vectors & Complex Numbers</li>
                <li className="flex items-center gap-3 text-sm font-medium"><CheckCircle className="w-4 h-4 text-secondary" /> Math Exploration (IA) Strategy</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Student Success Stories</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Hear from students who achieved their target IB scores.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Sarah M.",
                subject: "IB CS HL",
                text: "Aaditya completely changed my approach to the CS IA. His background in data science made the complex programming concepts so much clearer. I jumped from a 4 to a 6 in just a few months!",
              },
              {
                name: "James T.",
                subject: "IB Maths AA HL",
                text: "Maths AA HL was my weakest subject. Aaditya's ability to explain calculus from first principles was a game-changer. I finally understood the 'why' behind the math. Scored a solid 7.",
              },
              {
                name: "Priya K.",
                subject: "IB CS SL & Maths AA SL",
                text: "Finding a tutor who excels in both tech and math at an elite level is rare. His University of Warwick experience shines through in every lesson. Highly professional and encouraging.",
              }
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1, transition: { duration: 0.4, delay: i * 0.1 } }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 flex flex-col"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-5 h-5 fill-secondary text-secondary" />)}
                </div>
                <p className="text-lg text-foreground/90 italic leading-relaxed mb-8 flex-1">"{testimonial.text}"</p>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm font-medium text-primary mt-1">{testimonial.subject}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="p-10 md:p-16 rounded-[2.5rem] bg-gradient-to-br from-primary/20 via-primary/5 to-background border border-primary/20 text-center relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 text-white">Ready to Secure Your 7?</h2>
              <p className="text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
                Stop struggling with complex topics. Let's build a structured learning plan to hit your target grades and get into your dream university.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="mailto:aadityasrikrishna1703@gmail.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-bold text-lg hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)]">
                  <Mail className="w-5 h-5" /> Contact Aaditya
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 text-center text-muted-foreground text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <p>© {new Date().getFullYear()} Aaditya Srikrishna Bellamkonda. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
