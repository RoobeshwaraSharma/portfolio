import { getGitHubRepos, languageColors } from "@/lib/github";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { IconBrandGithub, IconExternalLink, IconStar, IconGitFork } from "@tabler/icons-react";

export default async function Projects() {
  const repos = await getGitHubRepos();

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6">
      <SectionHeader
        label="// projects"
        title="GitHub showcase"
        subtitle="Open-source projects and work pulled live from GitHub."
      />

      {repos.length === 0 ? (
        <div className="text-center py-16 text-[#444]">
          <IconBrandGithub size={40} className="mx-auto mb-4 opacity-30" />
          <p className="text-sm font-mono">Could not load repositories. Check back soon.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <FadeIn key={repo.id} delay={i * 0.06}>
              <div className="group flex flex-col h-full p-5 rounded-xl border border-[#1f1f1f] bg-[#111] hover:border-[#2a2a3a] hover:bg-[#121218] transition-all duration-200">
                {/* Header */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="text-sm font-medium text-[#f0f0f0] group-hover:text-[#a89de8] transition-colors leading-snug">
                    {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                  </h3>
                  <div className="flex items-center gap-2 shrink-0">
                    {repo.homepage && (
                      <a
                        href={repo.homepage}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#555] hover:text-[#f0f0f0] transition-colors"
                        aria-label="Live demo"
                      >
                        <IconExternalLink size={14} />
                      </a>
                    )}
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#555] hover:text-[#f0f0f0] transition-colors"
                      aria-label="GitHub repo"
                    >
                      <IconBrandGithub size={14} />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-[#666] leading-relaxed flex-1 mb-4 line-clamp-3">
                  {repo.description || "No description available."}
                </p>

                {/* Topics */}
                {repo.topics.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {repo.topics.slice(0, 4).map((topic) => (
                      <span
                        key={topic}
                        className="px-2 py-0.5 rounded text-xs bg-[#1a1a2a] text-[#7a7a9a] border border-[#252535]"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                )}

                {/* Footer */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-[#1a1a1a]">
                  <div className="flex items-center gap-1.5">
                    {repo.language && (
                      <>
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{
                            backgroundColor:
                              languageColors[repo.language] || "#666",
                          }}
                        />
                        <span className="text-xs text-[#555] font-mono">{repo.language}</span>
                      </>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#555]">
                    <span className="flex items-center gap-1">
                      <IconStar size={11} />
                      {repo.stargazers_count}
                    </span>
                    <span className="flex items-center gap-1">
                      <IconGitFork size={11} />
                      {repo.forks_count}
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      )}

      <FadeIn delay={0.3}>
        <div className="mt-8 text-center">
          <a
            href="https://github.com/RoobeshwaraSharma"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-[#2a2a2a] hover:border-[#7c6fcd]/50 text-[#666] hover:text-[#a89de8] text-sm rounded-lg transition-all duration-200"
          >
            <IconBrandGithub size={16} />
            View all on GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
