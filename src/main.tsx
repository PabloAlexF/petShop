import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./App";
import { CartProvider } from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        gutter={12}
        containerStyle={{
          top: 96,
          left: 16,
          right: 16,
        }}
        toastOptions={{
          duration: 2800,
          className:
            "!mt-0 !rounded-2xl !border !border-[#dedfd5] !bg-[#fffefa] !px-4 !py-3 !text-[13px] !font-bold !text-[#20251f] !shadow-[0_14px_40px_rgba(47,53,43,0.16)] sm:!text-[14px]",
          success: {
            iconTheme: {
              primary: "#687a5b",
              secondary: "#fffefa",
            },
          },
          error: {
            iconTheme: {
              primary: "#9a5f50",
              secondary: "#fffefa",
            },
          },
          loading: {
            iconTheme: {
              primary: "#687a5b",
              secondary: "#e9ecdf",
            },
          },
        }}
      />
    </CartProvider>
  </StrictMode>,
);
