import { getGitHubRepos, languageColors } from "@/lib/github";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconBrandGithub,
  IconExternalLink,
  IconStar,
  IconGitFork,
} from "@tabler/icons-react";

export default async function Projects() {
  const repos = await getGitHubRepos();

  return (
    <section id="projects" className="mx-auto px-8">
      <SectionHeader
        label="// projects"
        title="Projects"
        subtitle="Open-source work pulled live from GitHub."
      />

      {repos.length === 0 ? (
        <div className="text-center py-16 text-muted-foreground">
          <IconBrandGithub size={40} className="mx-auto mb-4 opacity-30" />
          <p className="text-sm font-mono">
            Could not load repositories. Check back soon.
          </p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <FadeIn key={repo.id} delay={i * 0.06}>
              <Card className="group flex flex-col h-full border-border bg-card hover:border-[#7c6fcd]/30 hover:shadow-md transition-all duration-200 rounded-xl overflow-hidden">
                <CardContent className="flex flex-col h-full p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-2 mb-3">
                    <h3 className="text-sm font-medium text-foreground group-hover:text-[#a89de8] transition-colors leading-snug">
                      {repo.name.replace(/-/g, " ").replace(/_/g, " ")}
                    </h3>
                    <div className="flex items-center gap-2 shrink-0">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noreferrer"
                          className="text-muted-foreground/60 hover:text-foreground transition-colors"
                          aria-label="Live demo"
                        >
                          <IconExternalLink size={14} />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-muted-foreground/60 hover:text-foreground transition-colors"
                        aria-label="GitHub repo"
                      >
                        <IconBrandGithub size={14} />
                      </a>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-muted-foreground leading-relaxed flex-1 mb-4 line-clamp-3">
                    {repo.description || "No description available."}
                  </p>

                  {/* Topics */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="px-2 py-0.5 text-xs rounded border border-border"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}

                  {/* Footer */}
                  <div className="flex items-center justify-between mt-auto pt-3 border-t border-border">
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
                          <span className="text-xs text-muted-foreground font-mono">
                            {repo.language}
                          </span>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground">
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
                </CardContent>
              </Card>
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
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-border hover:border-[#7c6fcd]/50 text-muted-foreground hover:text-[#a89de8] text-sm rounded-lg transition-all duration-200"
          >
            <IconBrandGithub size={16} />
            View all on GitHub
          </a>
        </div>
      </FadeIn>
    </section>
  );
}
