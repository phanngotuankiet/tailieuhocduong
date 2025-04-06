import Link from 'next/link'

const subjects = [
  {
    name: 'Cánh diều',
    books: [
      { name: 'Giải sách giáo khoa', href: '/sach-giao-khoa/tap-1' },
      { name: 'Giải vở bài tập', href: '/sach-giao-khoa/tap-2' },
      { name: 'Giáo án', href: '/vo-bai-tap/tap-1' },
    ]
  },
  {
    name: 'Kết nối tri thức',
    books: [
      { name: 'Giải sách giáo khoa', href: '/sach-giao-khoa' },
      { name: 'Giải vở bài tập', href: '/vo-bai-tap' },
      { name: 'Giáo án', href: '/vo-bai-tap' },
    ]
  },
  {
    name: 'Chân trời sáng tạo',
    books: [
      { name: 'Giải sách giáo khoa', href: '/sach-giao-khoa' },
      { name: 'Giải vở bài tập', href: '/vo-bai-tap' },
      { name: 'Giáo án', href: '/vo-bai-tap' },
    ]
  }
]

export default function GradePage({ params }: { params: { grade: string } }) {
  const gradeName = `Lớp ${params.grade.split('-')[1]}`

  return (
    <div className="bg-gradient-to-b from-amber-300 to-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900">{gradeName}</h1>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-600">Chọn bộ sách để xem tài liệu</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <div 
              key={subject.name} 
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 group"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4 group-hover:bg-blue-200 transition-colors duration-300">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h2 className="text-xl font-semibold text-gray-900">{subject.name}</h2>
              </div>
              
              <div className="space-y-2">
                {subject.books.map((book) => (
                  <Link
                    key={book.name}
                    href={`/tu-sach/${params.grade}${book.href}`}
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-blue-50 transition-colors duration-300 group/item"
                  >
                    <div className="flex items-center">
                      <span className="text-gray-900 group-hover/item:text-blue-600 transition-colors duration-300">{book.name}</span>
                      <svg className="w-5 h-5 ml-auto text-gray-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 