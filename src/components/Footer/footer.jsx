import SocialMedia from "./socialMedia"

const Footer = () => {
    return(
        
<footer className="bg-light-green-700">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
              <a href="https://facebook.com/" className="flex items-center">
                  <img src="../public/logo_white.svg" className="h-6 mt-2 mr-3" alt="CahayaElhamidiLogo" />
              </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-medium text-white uppercase">Resources</h2>
                  <ul className="text-gray-200 font-light">
                      <li className="mb-4">
                          <a href="https://flowbite.com/" className="hover:underline">React</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" className="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-medium text-white uppercase">Follow us</h2>
                  <ul className="text-white font-light">
                      <li className="mb-4">
                          <a href="https://github.com/themesberg/flowbite" className="hover:underline ">Instagram</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" className="hover:underline">Facebook</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-medium text-white uppercase">Legal</h2>
                  <ul className="text-white font-light">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-200 sm:text-center">© 2023 <a href="https://facebook.com/" className="hover:underline">CahayaElhamidi ™</a>. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-5 sm:justify-center sm:mt-0">
            <SocialMedia />
          </div>
      </div>
    </div>
</footer>

    )
}

export default Footer