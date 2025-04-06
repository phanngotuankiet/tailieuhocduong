import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Về chúng tôi</h3>
            <ul className="space-y-2">
              <li><Link href="/gioi-thieu" className="hover:text-gray-300">Giới thiệu</Link></li>
              <li><Link href="/lien-he" className="hover:text-gray-300">Liên hệ</Link></li>
              <li><Link href="/chinh-sach" className="hover:text-gray-300">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Giáo viên</h3>
            <ul className="space-y-2">
              <li><Link href="/sach-giao-vien" className="hover:text-gray-300">Sách giáo viên</Link></li>
              <li><Link href="/bai-giang" className="hover:text-gray-300">Bài giảng</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Học sinh</h3>
            <ul className="space-y-2">
              <li><Link href="/tu-sach" className="hover:text-gray-300">Tủ sách</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hỗ trợ</h3>
            <ul className="space-y-2">
              <li><Link href="/kich-hoat" className="hover:text-gray-300">Kích hoạt sách</Link></li>
              <li><Link href="/faq" className="hover:text-gray-300">Câu hỏi thường gặp</Link></li>
              <li><Link href="/dia-chi-mua" className="hover:text-gray-300">Địa chỉ mua sách</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>© 2024 Tài liệu Học Đường. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 