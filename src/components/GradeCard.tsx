import Link from 'next/link'

interface GradeCardProps {
  grade: string
  href: string
}

export default function GradeCard({ grade, href }: GradeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-center hover:shadow-lg transition-shadow">
      <Link href={href} className="text-lg font-medium text-gray-900">
        {grade}
      </Link>
    </div>
  )
} 