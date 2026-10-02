import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrollToTop from "./components/ui/scroll-to-top";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  useEffect(() => {
    document.title = "Sesh";
  }, []);
  return (
    <div className="relative min-h-[100dvh] bg-transparent overflow-hidden">
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-[10%] -right-[10%] w-[45rem] h-[45rem] 
             rounded-full bg-zinc-400/20 blur-[150px] 
            animate-float dark:bg-amber-700/25"
        />

        <div
          className="absolute -bottom-[15%] -left-[10%] w-[50rem] h-[50rem] 
             rounded-full bg-gray-200/25 blur-[50px] 
            animate-float-slow dark:bg-zinc-900/50"
        />

        <div
          className="absolute -bottom-[15%] -left-[10%] w-[50rem] h-[50rem] 
             rounded-full bg-zinc-100/25 blur-[50px] 
            animate-float-slow dark:bg-zinc-900/50"
        />
      </div>
      <main className="relative z-10">
        <ScrollToTop />
        <Outlet />
      </main>

      {/* Toasts always need to be globally mounted */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}
