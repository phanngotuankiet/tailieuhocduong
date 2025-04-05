import Header from '@/components/Header'

interface Document {
  id: string
  title: string
  description: string
  category: string
  grade: string
  downloadCount: number
}

const documents: Document[] = [
  {
    id: '1',
    title: 'Đề thi giữa kì 1 môn Toán lớp 4',
    description: 'Bộ đề thi giữa kì 1 môn Toán lớp 4 năm học 2023-2024 có đáp án chi tiết',
    category: 'Đề thi',
    grade: 'Lớp 4',
    downloadCount: 1250,
  },
  {
    id: '2',
    title: 'Bài tập Tiếng Việt lớp 3',
    description: 'Tổng hợp các bài tập Tiếng Việt lớp 3 theo chương trình mới',
    category: 'Bài tập',
    grade: 'Lớp 3',
    downloadCount: 980,
  },
  {
    id: '3',
    title: 'Giáo án STEM lớp 5',
    description: 'Bộ giáo án STEM lớp 5 đầy đủ các chủ đề',
    category: 'Giáo án',
    grade: 'Lớp 5',
    downloadCount: 750,
  },
]

export default function DocumentsPage() {
  return (
    <main>
      <Header />
      
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Tài liệu học tập</h1>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {documents.map((doc) => (
              <div key={doc.id} className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 bg-blue-500 rounded-md p-3">
                      <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                      <dl>
                        <dt className="text-sm font-medium text-gray-500 truncate">
                          {doc.category} - {doc.grade}
                        </dt>
                        <dd className="flex items-baseline">
                          <div className="text-lg font-semibold text-gray-900">
                            {doc.title}
                          </div>
                        </dd>
                      </dl>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">
                      {doc.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <svg className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                      {doc.downloadCount} lượt tải
                    </div>
                    <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200">
                      Tải xuống
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
} 