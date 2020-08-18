import Link from 'next/link'

const Header = () => {
  return (
      <div className="h-12 w-full bg-gray-200">
          <div className="container flex mx-auto h-full items-center">
              <ul className="font-bold flex space-x-8">
                  <li>
                      <Link href="/">
                          <a className="hover:underline">Home</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a className="hover:underline">Blog</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a className="hover:underline">Bookmarks</a>
                      </Link>
                  </li>
                  <li>
                      <Link href="/">
                          <a className="hover:underline">About</a>
                      </Link>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Header
