import Link from 'next/link'

const grades = [
  { name: 'Lớp 1', href: '/tu-sach/lop-1' },
  { name: 'Lớp 2', href: '/tu-sach/lop-2' },
  { name: 'Lớp 3', href: '/tu-sach/lop-3' },
  { name: 'Lớp 4', href: '/tu-sach/lop-4' },
  { name: 'Lớp 5', href: '/tu-sach/lop-5' },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              <span className="block">Tủ sách điện tử</span>
              <span className="block text-blue-600 mt-2">tương tác</span>
            </h1>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-600">
              Khám phá kho tài liệu học tập phong phú cho mọi cấp học
            </p>
          </div>
        </div>
      </div>

      {/* Grades Grid */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Chọn lớp học</h2>
          <div className="mt-2 h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-5">
          {grades.map((grade) => (
            <Link
              key={grade.name}
              href={grade.href}
              className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-6 text-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-blue-600">{grade.name.split(' ')[1]}</span>
                </div>
                <span className="text-lg font-medium text-gray-900">{grade.name}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Học liệu phong phú</h3>
              <p className="mt-2 text-gray-600">
                Tài liệu học tập đa dạng cho mọi môn học
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Bài giảng chất lượng</h3>
              <p className="mt-2 text-gray-600">
                Video bài giảng sinh động, dễ hiểu
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Đề kiểm tra</h3>
              <p className="mt-2 text-gray-600">
                Ngân hàng đề thi phong phú, đa dạng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
