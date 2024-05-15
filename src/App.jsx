import './App.css'

function App() {
  return (
    <>
    <header>
      <div className="hidden lg:flex lg:gap-x-12 text-customGray custom-header">
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-customColor-cGray rounded-lg px-3 py-2">Home</a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-customColor-cGray rounded-lg px-3 py-2">Shop</a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-customColor-cGray rounded-lg px-3 py-2">About</a>
        <a href="#" className="text-sm font-semibold leading-6 text-gray-900 hover:bg-customColor-cGray rounded-lg px-3 py-2">Contacts</a>
      </div>
    </header>
    <div className="text-sm custom-h1 text-blue-500 rounded-lg">
      <h1 className="text-4xl mb-6 ">HELLO, THIS IS REACT + TAILWIND</h1>
      <h1 className="text-3xl text-customColor-cWhite">MADE BY: IVAN EMMANUEL A. DADACAY</h1>
      <div class="mt-10 flex items-center justify-center gap-x-6">
        <h1 class="text-sm font-semibold leading-6 text-white">Click this <span aria-hidden="true">→</span></h1>
        <a href="https://github.com/Kribope" target="_blank" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">Github</a>
      </div>
    </div>
    </>
  )
}

export default App
