interface ApiResponse<T> {
  data?: T
  error?: string
  success: boolean
}

class ApiClient {
  private baseUrl: string

  constructor(baseUrl = "") {
    this.baseUrl = baseUrl
  }

  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${this.baseUrl}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.error || `HTTP ${response.status}`,
        }
      }

      return {
        success: true,
        data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error",
      }
    }
  }

  // GitHub API methods
  async getGitHubUser() {
    return this.request("/api/github/user")
  }

  async getGitHubStats() {
    return this.request("/api/github/stats")
  }

  async getGitHubRepositories(limit = 6, popular = true) {
    return this.request(`/api/github/repositories?limit=${limit}&popular=${popular}`)
  }

  async getGitHubLanguages() {
    return this.request("/api/github/languages")
  }

  // Portfolio API methods
  async getPortfolioData() {
    return this.request("/api/portfolio")
  }

  async getAnalytics() {
    return this.request("/api/analytics")
  }

  async checkHealth() {
    return this.request("/api/health")
  }

  // Contact and Newsletter methods
  async submitContactForm(data: any) {
    return this.request("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }

  async subscribeNewsletter(data: { email: string; name?: string; interests?: string[] }) {
    return this.request("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(data),
    })
  }
}

// Export singleton instance
export const apiClient = new ApiClient()

// Export types for use in components
export type { ApiResponse }
