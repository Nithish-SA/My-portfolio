import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Tessolve',
    role: 'R&D Hardware Engineer',
    period: '2022 - Present',
    achievements: [
      'Designed and delivered 5+ production-ready PCBs with 100% first-pass yield',
      'Led EMI/EMC optimization resulting in FCC Part 15 Class B certification',
      'Reduced power supply costs by 30% through efficient DC-DC converter design',
      'Implemented automated PCB verification workflows using Python and AI tools'
    ]
  },
  {
    company: 'Previous Role',
    role: 'Hardware Design Engineer',
    period: '2020 - 2022',
    achievements: [
      'Developed USB 3.0 based data acquisition system with 100MHz sampling',
      'Designed carrier boards for Raspberry Pi Compute Modules deployed in 200+ units',
      'Collaborated with firmware team to optimize signal integrity on high-speed buses',
      'Created comprehensive design documentation and manufacturing packages'
    ]
  },
  {
    company: 'Early Career',
    role: 'PCB Design Intern',
    period: '2019 - 2020',
    achievements: [
      'Assisted in 4-layer board layouts for industrial control applications',
      'Conducted EMI testing and implemented mitigation strategies',
      'Learned KiCad, Altium, and industry-standard design practices',
      'Contributed to successful product launches with zero critical issues'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-blue-500/30"></div>

            {experiences.map((exp, index) => (
              <div key={index} className="relative mb-16 last:mb-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="md:w-1/2 md:text-right md:pr-12">
                    <div className="inline-block md:block">
                      <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                      <p className="text-blue-400 font-semibold text-lg mb-2">{exp.company}</p>
                      <p className="text-gray-400">{exp.period}</p>
                    </div>
                  </div>

                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 mt-2 ring-4 ring-gray-900 z-10"></div>

                  <div className="md:w-1/2 ml-16 md:ml-0 md:pl-12">
                    <div className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300">
                      <div className="flex items-center gap-2 mb-4 text-blue-400">
                        <Briefcase size={20} />
                        <span className="font-semibold">Key Achievements</span>
                      </div>
                      <ul className="space-y-3">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-gray-300">
                            <span className="text-blue-500 mt-1 flex-shrink-0">▸</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
