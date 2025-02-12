import Card from "@/components/card"
import { resolve } from "styled-jsx/css"

export default async function ProjectList() {
  const response = await fetch(
    'https://api.github.com/users/nhonvo/repos',
    // { cache: 'no-store' }
  )
  const repos = await response.json()

  const repoList = repos.map(repo => ({
    name: repo.name,
    stargazers_count: repo.stargazers_count
  }));

  repoList.sort((a, b) => b.stargazers_count - a.stargazers_count);

  // await new Promise(resolve => setTimeout(resolve, 1000)) // testing suspense
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {repoList.map(repo => (
        <li key={repo.id} className="mb-4">
          <Card className="font-mono h-full">
            <div className="flex justify-between items-center mb-4">
              <div className="font-semibold">{repo.name}</div>
              <div>🌟{repo.stargazers_count}</div>
            </div>
            <div>{repo.description}</div>
          </Card>
        </li>
      ))}
    </ul>
  )
}