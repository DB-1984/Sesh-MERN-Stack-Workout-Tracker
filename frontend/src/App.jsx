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
     {/* halftone dots, staggered grid */}
<div
  className="absolute inset-0 text-zinc-900/20 dark:text-white/20
    [background-image:radial-gradient(circle,currentColor_1px,transparent_1.5px),radial-gradient(circle,currentColor_1px,transparent_1.5px)]
    [background-size:16px_16px]
    [background-position:0_0,8px_8px]
    [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_75%)]"
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
