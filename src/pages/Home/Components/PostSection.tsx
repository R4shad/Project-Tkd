import { useEffect, useState, forwardRef } from 'react'

import { NewsPostData } from '../../../interfaces/types'
import { getLatestPosts } from '../../../services/postServices'
import PostCard from './PostCard'

export const PostSection = forwardRef<HTMLDivElement>((_, ref) => {
  const [latestNews, setLatestNews] = useState<NewsPostData[]>([])
  useEffect(() => {
    const fetchLatestNews = async () => {
      const data: NewsPostData[] | null = await getLatestPosts()
      if (!data) {
        console.error('Error fetching publications')
      } else {
        setLatestNews(data)
      }
    }
    fetchLatestNews()
  }, [])

  return (
    <section
      ref={ref}
      className="team lg:py-16"
      data-aos="fade-up"
      data-aos-duration="2000"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-black text-3xl md:text-4xl font-bold text-center mb-6 mt-10">
          Publicaciones Recientes
        </h2>
        <div className="team__cards flex flex-wrap justify-center gap-6">
          {latestNews.map((team) => (
            <PostCard key={team.id} {...team} />
          ))}
        </div>
      </div>
    </section>
  )
})
