import React, { memo, useState } from 'react';
import { Github, ExternalLink, Info, CheckCircle2, Cpu, Database, FileText, ArrowRight } from 'lucide-react';
import LazyImage from './LazyImage';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog';

export interface ArchitectureStep {
  name: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  technologies: string[];
  year: string;
  github?: string;
  live?: string;
  features?: string[];
  architecture?: ArchitectureStep[];
  disclaimer?: string;
}

interface AnimatedProjectCardProps {
  project: Project;
  index: number;
}

const AnimatedProjectCard = memo(({ project, index: _index }: AnimatedProjectCardProps) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const githubUrl = project.github
    ? project.github.startsWith('http')
      ? project.github
      : `https://${project.github}`
    : undefined;

  return (
    <>
      <div className="group bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-emerald-100 flex flex-col justify-between">
        <div>
          <div className="relative overflow-hidden h-48 bg-slate-900">
            <LazyImage
              src={project.image}
              alt={project.title}
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover group-hover:scale-95 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

            <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-white/20 backdrop-blur-sm px-2 py-1 rounded border border-white/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6">
            <div className="flex justify-between items-start mb-3 gap-2">
              <h3 className="text-xl font-bold text-forest-900 group-hover:text-emerald-600 transition-colors duration-300 leading-tight">
                {project.title}
              </h3>
              <span className="text-sm text-forest-500 bg-emerald-100 px-2 py-1 rounded flex-shrink-0 font-medium">
                {project.year}
              </span>
            </div>

            <p className="text-forest-700 mb-4 leading-relaxed text-sm">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-xs bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-md font-medium border border-emerald-100/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 pt-2 border-t border-emerald-50 flex items-center justify-between gap-3">
          <div>
            {(project.features || project.architecture) && (
              <button
                type="button"
                onClick={() => setDetailsOpen(true)}
                className="text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-lg transition-colors duration-200 flex items-center gap-1.5 font-semibold text-xs cursor-pointer"
              >
                <Info className="w-3.5 h-3.5" />
                <span>Architecture & Details</span>
              </button>
            )}
          </div>

          <div className="flex items-center gap-3">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 flex items-center gap-1.5 font-semibold text-sm"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:text-emerald-700 transition-colors duration-200 flex items-center gap-1.5 font-semibold text-sm"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Project Details Modal */}
      {(project.features || project.architecture) && (
        <Dialog open={detailsOpen} onOpenChange={setDetailsOpen}>
          <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto bg-white p-6 sm:p-8 rounded-2xl">
            <DialogHeader className="text-left space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full font-bold">
                  {project.year}
                </span>
                <span className="text-xs bg-teal-50 text-teal-700 px-2.5 py-0.5 rounded-full font-medium">
                  {project.category}
                </span>
              </div>
              <DialogTitle className="text-2xl font-bold text-forest-900">
                {project.title}
              </DialogTitle>
              <DialogDescription className="text-forest-700 text-sm leading-relaxed">
                {project.description}
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-6 pt-4 text-forest-800 text-sm">
              {/* Features List */}
              {project.features && project.features.length > 0 && (
                <div>
                  <h4 className="font-bold text-forest-900 text-base mb-3 flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                    Key Features
                  </h4>
                  <ul className="space-y-2.5 bg-emerald-50/50 p-4 rounded-xl border border-emerald-100">
                    {project.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-forest-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Architecture Pipeline */}
              {project.architecture && project.architecture.length > 0 && (
                <div>
                  <h4 className="font-bold text-forest-900 text-base mb-3 flex items-center gap-2">
                    <Cpu className="w-5 h-5 text-emerald-600" />
                    Architecture & Pipeline
                  </h4>
                  <div className="grid gap-3">
                    {project.architecture.map((step, idx) => (
                      <div
                        key={idx}
                        className="bg-white p-3.5 rounded-xl border border-emerald-100/80 shadow-xs flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-emerald-600 text-white font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="font-bold text-forest-900 mr-1.5">{step.name}:</span>
                          <span className="text-forest-700 leading-relaxed">{step.detail}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              <div>
                <h4 className="font-bold text-forest-900 text-base mb-2 flex items-center gap-2">
                  <Database className="w-5 h-5 text-emerald-600" />
                  Technologies & Frameworks
                </h4>
                <div className="flex flex-wrap gap-2 pt-1">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs bg-emerald-100/80 text-emerald-800 font-semibold px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Disclaimer */}
              {project.disclaimer && (
                <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3.5 rounded-xl text-xs leading-relaxed">
                  <span className="font-bold">Disclaimer: </span>
                  {project.disclaimer}
                </div>
              )}

              {/* Actions */}
              <div className="pt-2 flex flex-wrap gap-3">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-forest-800 hover:bg-forest-900 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    View Repository on GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
});

AnimatedProjectCard.displayName = 'AnimatedProjectCard';

export default AnimatedProjectCard;
