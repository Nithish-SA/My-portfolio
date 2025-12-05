import { Cpu, Zap, Shield, Wrench, Code, Lightbulb } from 'lucide-react';

const skillCategories = [
  {
    icon: Cpu,
    title: 'PCB Design',
    skills: ['KiCad', 'Altium Designer', '4-8 Layer Boards', 'High-Speed Routing', 'Differential Pairs']
  },
  {
    icon: Zap,
    title: 'Power Electronics',
    skills: ['DC-DC Converters', 'Buck/Boost Topology', 'AC-DC Power Supplies', 'Thermal Management']
  },
  {
    icon: Shield,
    title: 'EMI/EMC',
    skills: ['FCC Compliance', 'EMI Reduction', 'Layout Optimization', 'Decoupling Strategy', 'Shielding']
  },
  {
    icon: Wrench,
    title: 'DFM/DFT',
    skills: ['Design for Manufacturing', 'Design for Test', 'Production-Ready', 'Cost Optimization']
  },
  {
    icon: Code,
    title: 'Embedded Hardware',
    skills: ['USB Controllers', 'UART/SPI/I2C', 'Raspberry Pi', 'Logic Analyzers', 'Sensor Integration']
  },
  {
    icon: Lightbulb,
    title: 'Emerging Tech',
    skills: ['AI Automation', 'LLM Workflows', 'PCB-AI PoCs', 'Python Scripting']
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Technical Expertise
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="group bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-all duration-300 hover:shadow-xl border border-gray-200 hover:border-blue-300"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                      <Icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-white text-gray-700 text-sm rounded-full border border-gray-300 group-hover:border-blue-400 group-hover:text-blue-700 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
