'use client'

import { useState, useEffect } from 'react'
import { Search, Loader2, ExternalLink, Globe, Calendar, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface SearchResult {
  url: string
  name: string
  snippet: string
  host_name: string
  rank: number
  date: string
  favicon: string
}

export default function Home() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setHasSearched(true)

    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(query)}`)
      const data = await response.json()
      
      if (data.success && data.results) {
        setResults(data.results)
      } else {
        setResults([])
      }
    } catch (error) {
      console.error('Search error:', error)
      setResults([])
    } finally {
      setIsLoading(false)
    }
  }

  const formatDate = (dateString: string) => {
    try {
      const date = new Date(dateString)
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
      })
    } catch {
      return dateString
    }
  }

  const getDomainFromUrl = (url: string) => {
    try {
      return new URL(url).hostname
    } catch {
      return url
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,rgba(23,255,154,0.1),transparent_50%)] pointer-events-none" />
      <div className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-[#17ff9a] rounded-full blur-[150px] opacity-30 pointer-events-none" />
      
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-[#2a2a2a]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="https://zkforge.io/zk.png" 
                  alt="ZK Forge" 
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain"
                />
                <h1 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-[#17ff9a] to-[#0ea674] bg-clip-text text-transparent">
                  ZK Forge
                </h1>
              </div>
              <Badge className="bg-[#0d3d2a] border-[#17ff9a]/30 text-[#17ff9a] text-xs">
                BETA
              </Badge>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Search Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-[#17ff9a] to-[#0ea674] bg-clip-text text-transparent">
              Search the Web
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Discover anything with ZK Forge's powerful search engine
            </p>

            <form onSubmit={handleSearch} className="max-w-3xl mx-auto">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-[#17ff9a] to-[#0ea674] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                <div className="relative flex gap-2">
                  <Input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for anything..."
                    className="flex-1 h-14 sm:h-16 text-base sm:text-lg bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a] rounded-2xl px-6 text-white placeholder-gray-400 focus:border-[#17ff9a] focus:shadow-[0_0_30px_rgba(23,255,154,0.4)] transition-all duration-300"
                  />
                  <Button 
                    type="submit" 
                    disabled={isLoading || !query.trim()}
                    className="h-14 sm:h-16 px-6 sm:px-8 bg-gradient-to-r from-[#17ff9a] to-[#0ea674] text-black font-semibold rounded-2xl hover:shadow-[0_0_40px_rgba(23,255,154,0.5)] transition-all duration-300 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <Search className="w-5 h-5" />
                    )}
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Search Results */}
          {hasSearched && (
            <div className="space-y-6">
              {isLoading ? (
                <div className="flex flex-col items-center justify-center py-20">
                  <Loader2 className="w-12 h-12 animate-spin text-[#17ff9a] mb-4" />
                  <p className="text-gray-300">Searching the web...</p>
                </div>
              ) : results.length > 0 ? (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <p className="text-gray-300">
                      Found {results.length} results for "{query}"
                    </p>
                    <Badge variant="outline" className="border-[#17ff9a]/30 text-[#17ff9a]">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Ranked
                    </Badge>
                  </div>

                  <div className="space-y-4">
                    {results.map((result, index) => (
                      <Card 
                        key={index} 
                        className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a] rounded-2xl hover:shadow-[0_0_30px_rgba(23,255,154,0.2)] transition-all duration-300 group"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-2">
                                <Globe className="w-4 h-4 text-[#17ff9a] flex-shrink-0" />
                                <span className="text-sm text-[#17ff9a] font-medium truncate">
                                  {getDomainFromUrl(result.url)}
                                </span>
                                {result.date && (
                                  <div className="flex items-center gap-1 text-xs text-gray-400">
                                    <Calendar className="w-3 h-3" />
                                    {formatDate(result.date)}
                                  </div>
                                )}
                              </div>
                              
                              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#17ff9a] transition-colors duration-200">
                                {result.name}
                              </h3>
                              
                              <p className="text-gray-300 text-sm leading-relaxed mb-3">
                                {result.snippet}
                              </p>
                              
                              <a
                                href={result.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-[#17ff9a] hover:text-[#0ea674] transition-colors duration-200"
                              >
                                <span className="truncate max-w-xs">{result.url}</span>
                                <ExternalLink className="w-4 h-4 flex-shrink-0" />
                              </a>
                            </div>
                            
                            <Badge 
                              variant="outline" 
                              className="bg-[#0d3d2a] border-[#17ff9a]/30 text-[#17ff9a] flex-shrink-0"
                            >
                              #{result.rank}
                            </Badge>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-20">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#2a2a2a] flex items-center justify-center">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    No results found
                  </h3>
                  <p className="text-gray-300">
                    Try searching with different keywords or check your spelling
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Features Section (shown when no search has been made) */}
          {!hasSearched && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a] rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#17ff9a] to-[#0ea674] flex items-center justify-center">
                    <Search className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Fast Search</h3>
                  <p className="text-gray-300 text-sm">
                    Lightning-fast search results powered by advanced algorithms
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a] rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#17ff9a] to-[#0ea674] flex items-center justify-center">
                    <Globe className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Reach</h3>
                  <p className="text-gray-300 text-sm">
                    Search across the entire web with comprehensive results
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border-[#2a2a2a] rounded-2xl">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-r from-[#17ff9a] to-[#0ea674] flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Smart Ranking</h3>
                  <p className="text-gray-300 text-sm">
                    AI-powered ranking for the most relevant results first
                  </p>
                </CardContent>
              </Card>
            </div>
          )}
        </main>

        {/* Footer */}
        <footer className="border-t border-[#2a2a2a] mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center text-gray-400 text-sm">
              <p>&copy; 2025 ZK Forge. Powered by zero-knowledge technology.</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}