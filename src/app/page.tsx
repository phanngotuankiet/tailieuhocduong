import Header from '@/components/Header'
import GradeCard from '@/components/GradeCard'

export default function Home() {
  const grades = [
    { name: 'Mầm non', href: '/grade/mam-non' },
    { name: 'Lớp 1', href: '/grade/lop-1' },
    { name: 'Lớp 2', href: '/grade/lop-2' },
    { name: 'Lớp 3', href: '/grade/lop-3' },
    { name: 'Lớp 4', href: '/grade/lop-4' },
    { name: 'Lớp 5', href: '/grade/lop-5' },
  ]

  return (
    <main>
      <Header />

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Tài liệu học tập</span>
              <span className="block text-blue-600">cho mọi cấp học</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Kho tài liệu, đề thi, trắc nghiệm, giải bài tập phong phú cho học sinh từ mầm non đến đại học
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <a
                  href="/documents"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10"
                >
                  Xem tài liệu
                </a>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="/register"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Đăng ký
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Levels Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {grades.map((grade) => (
              <GradeCard key={grade.name} grade={grade.name} href={grade.href} />
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}
