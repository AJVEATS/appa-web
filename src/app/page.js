import Image from "next/image";
import AuthenticationComponent from "../../Components/AuthenticationComponent/AuthenticationComponent";

export default function Home() {
  return (
    <main class="h-screen flex justify-center content-center flex-wrap">
      <div class="py-8 px-8 max-w-sm bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6 h-fit">
        <img
          class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
          src="../images/placeholder/appa.jpg"
          alt="appa"
        />
        <div class="text-center space-y-2 sm:text-left">
          <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">appa</p>
            <p class="text-slate-500 font-medium">spotify extention</p>
          </div>
          <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            learn more
          </button>
        </div>
      </div>
      <AuthenticationComponent />
    </main>
  );
}
