import { NextResponse } from 'next/server'
import { getProjectImage } from '@/lib/projects'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  if (!/^[0-9a-f-]{36}$/i.test(params.id)) return NextResponse.json({ error: 'Imagem não encontrada.' }, { status: 404 })
  try {
    const image = await getProjectImage(params.id)
    if (!image) return NextResponse.json({ error: 'Imagem não encontrada.' }, { status: 404 })
    return new NextResponse(image.data, {
      headers: {
        'Content-Type': image.contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
        'X-Content-Type-Options': 'nosniff',
      },
    })
  } catch (error) {
    console.error('Não foi possível carregar a imagem do projeto:', error)
    return NextResponse.json({ error: 'Não foi possível carregar a imagem.' }, { status: 503 })
  }
}
