import "./App.css";
import logo from "./assets/logo/logo - Copy.png";
import background from "./assets/Images/1.jpg"
function App() {
  return (
    <>
    <nav className="bg-white shadow md:flex md:items-center md:justify-between">
      <div>
      <img className="ml-16 w-full h-28 inline" src={logo} alt="Logo" />
      </div>

      <div className="mr-16">
        <ul className="md:flex md:items-center w-full md:py-0 md:pl-0 md:opacity-100">
          <li className="mx-4 my-6 md:my-0 "><a href="">HOME</a></li>
          <li className="mx-4 my-6 md:my-0"><a href="">ABOUT</a></li>
          <li className="mx-4 my-6 md:my-0"><a href="">BLOGS</a></li>
          <li className="mx-4 my-6 md:my-0">
            <a href="" className="flex flex-col	 items-center justify-center">
              <div>CONTACT US</div> 
              <div className="underline underline-offset-2">+91-762836197</div>
              </a></li>
        </ul>
      </div>
    </nav>
    <main>
      <div>
        <img className="w-full h-screen" src={background} alt="Image" />
      </div>
    </main>
    </>
  );
}

export default App;
