"use client"

import Link from 'next/link'
import Image from 'next/image'
import TaiLieuHocDuongLogo from "@/img/tailieuhocduong-removebg.png"

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src={TaiLieuHocDuongLogo}
                alt="Logo"
                width={150}
                height={40}
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/tu-sach" className="text-gray-700 hover:text-gray-900">
              Tủ sách
            </Link>
            <Link href="/hoc-lieu" className="text-gray-700 hover:text-gray-900">
              Học liệu
            </Link>
            <Link href="/bai-giang" className="text-gray-700 hover:text-gray-900">
              Bài giảng
            </Link>
            <Link href="/de-kiem-tra" className="text-gray-700 hover:text-gray-900">
              Đề kiểm tra
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link 
              href="/dang-nhap" 
              className="text-gray-700 hover:text-gray-900"
            >
              Đăng nhập
            </Link>
            <Link
              href="/dang-ky"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Đăng ký
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 