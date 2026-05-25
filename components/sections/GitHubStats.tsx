import { getGitHubStats, getGitHubRepos } from "@/lib/github";
import SectionHeader from "@/components/ui/SectionHeader";
import FadeIn from "@/components/ui/FadeIn";
import { Card, CardContent } from "@/components/ui/card";
import {
  IconUsers,
  IconStar,
  IconCode,
  IconGitFork,
} from "@tabler/icons-react";

export default async function GitHubStats() {
  const [stats, repos] = await Promise.all([
    getGitHubStats(),
    getGitHubRepos(),
  ]);

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);
  const totalForks = repos.reduce((acc, r) => acc + r.forks_count, 0);

  const languages = repos.reduce<Record<string, number>>((acc, repo) => {
    if (repo.language) acc[repo.language] = (acc[repo.language] || 0) + 1;
    return acc;
  }, {});

  const topLanguages = Object.entries(languages)
    .sort(([, a], [, b]) => b - a)
    .slice(0, 5);

  const total = topLanguages.reduce((s, [, c]) => s + c, 0);

  const langColors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f7df1e",
    Python: "#3776ab",
    "C#": "#9b4993",
    HTML: "#e34c26",
    CSS: "#563d7c",
    Go: "#00add8",
  };

  const statItems = [
    {
      label: "Public repos",
      value: stats?.public_repos ?? "—",
      icon: <IconCode size={16} />,
    },
    {
      label: "Followers",
      value: stats?.followers ?? "—",
      icon: <IconUsers size={16} />,
    },
    { label: "Total stars", value: totalStars, icon: <IconStar size={16} /> },
    {
      label: "Total forks",
      value: totalForks,
      icon: <IconGitFork size={16} />,
    },
  ];

  return (
    <section id="github-stats" className="mx-auto px-8">
      <SectionHeader
        label="// github"
        title="Contribution stats"
        subtitle="Live data pulled from the GitHub API."
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {statItems.map((item, i) => (
          <FadeIn key={item.label} delay={i * 0.08}>
            <Card className="border-border bg-card hover:border-[#7c6fcd]/30 transition-colors">
              <CardContent className="p-5">
                <div className="flex items-center gap-2 text-[#7c6fcd] mb-3">
                  {item.icon}
                </div>
                <p className="text-2xl font-medium text-foreground mb-1">
                  {item.value}
                </p>
                <p className="text-xs text-muted-foreground">{item.label}</p>
              </CardContent>
            </Card>
          </FadeIn>
        ))}
      </div>

      {/* Top languages */}
      {topLanguages.length > 0 && (
        <FadeIn delay={0.3}>
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mb-5">
                Top languages
              </p>
              <div className="space-y-3">
                {topLanguages.map(([lang, count]) => {
                  const pct = Math.round((count / total) * 100);
                  return (
                    <div key={lang}>
                      <div className="flex items-center justify-between mb-1.5">
                        <div className="flex items-center gap-2">
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{
                              backgroundColor: langColors[lang] || "#666",
                            }}
                          />
                          <span className="text-sm text-foreground">
                            {lang}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-mono">
                          {pct}%
                        </span>
                      </div>
                      <div className="h-1.5 rounded-full bg-muted">
                        <div
                          className="h-full rounded-full transition-all duration-700"
                          style={{
                            width: `${pct}%`,
                            backgroundColor: langColors[lang] || "#7c6fcd",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      )}
    </section>
  );
}
