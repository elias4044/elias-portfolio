import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export function useGitHubUser() {
  const { data, error, isLoading } = useSWR("/api/github/user", fetcher)

  return {
    user: data,
    isLoading,
    isError: error,
  }
}

export function useGitHubStats() {
  const { data, error, isLoading } = useSWR("/api/github/stats", fetcher)

  return {
    stats: data,
    isLoading,
    isError: error,
  }
}

export function useGitHubRepositories(limit = 6, popular = true) {
  const { data, error, isLoading } = useSWR(`/api/github/repositories?limit=${limit}&popular=${popular}`, fetcher)

  return {
    repositories: data,
    isLoading,
    isError: error,
  }
}

export function useGitHubLanguages() {
  const { data, error, isLoading } = useSWR("/api/github/languages", fetcher)

  return {
    languages: data,
    isLoading,
    isError: error,
  }
}
