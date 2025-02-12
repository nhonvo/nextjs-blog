import Card from "@/components/card"


export default async function Experience() {
  const response = await fetch(
    'https://api.github.com/users/nhonvo/repos',
    // { cache: 'no-store' }
  )
  const repos = await response.json()

  const repoList = repos.map(repo => ({
    name: repo.name,
    stargazers_count: repo.stargazers_count,
    description: repo.description
  }));

  repoList.sort((a, b) => b.stargazers_count - a.stargazers_count);

  return (
    <>
      <nav>
        <ul className="flex md:space-x-4 flex-col md:flex-row">
          <li>home</li>
          <li>project</li>
          <li>about</li>
        </ul>
      </nav>


      <div>
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {repoList.map(repo => (
            <li key={repo.id} className="mb-4">
              <Card className="font-mono h-full">
                <div className="flex justify-between items-center mb-4">
                  <div className="font-semibold mx-3">{repo.name}</div>
                  <div>🌟{repo.stargazers_count}</div>
                </div>
                <div className="mx-4">{repo.description}</div>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
