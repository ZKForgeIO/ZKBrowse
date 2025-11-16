import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get('q')

    if (!query || query.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()
    
    const searchResult = await zai.functions.invoke("web_search", {
      query: query.trim(),
      num: 10
    })

    return NextResponse.json({
      success: true,
      results: searchResult,
      query: query.trim()
    })

  } catch (error: any) {
    console.error('Search API error:', error)
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Search failed. Please try again later.',
        details: error.message 
      },
      { status: 500 }
    )
  }
}