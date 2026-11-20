import { AnimatePresence, motion } from "motion/react";
import { useEffect } from "react";
import { FiCheck, FiX } from "react-icons/fi";

interface ModalSuccessProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

export function ModalSuccess({
  open,
  onClose,
  title = "Pedido finalizado!",
  message = "Sua compra foi realizada com sucesso.",
  buttonText = "Continuar",
}: ModalSuccessProps) {
  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-100 grid place-items-center bg-[#20251f]/45 px-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
          role="presentation"
        >
          <motion.section
            className="relative w-full max-w-105 rounded-3xl border border-[#dedfd5] bg-[#fffefa] p-6 text-center shadow-[0_24px_70px_rgba(32,37,31,0.28)] sm:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.94 }}
            transition={{ type: "spring", stiffness: 340, damping: 24 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="success-modal-title"
          >
            <motion.button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 grid h-9.5 w-9.5 place-items-center rounded-full text-[#687066] transition-colors hover:bg-[#e9ecdf]"
              whileHover={{ rotate: 8, scale: 1.08 }}
              whileTap={{ scale: 0.88 }}
              aria-label="Fechar modal"
            >
              <FiX size={20} />
            </motion.button>

            <motion.div
              className="mx-auto mb-5 grid h-18 w-18 place-items-center rounded-full bg-[#e9ecdf] text-[34px] text-[#687a5b]"
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.12, type: "spring", stiffness: 280, damping: 16 }}
            >
              <FiCheck />
            </motion.div>

            <h2
              id="success-modal-title"
              className="m-0 font-[Georgia] text-[28px] font-medium tracking-[-0.02em] text-[#20251f]"
            >
              {title}
            </h2>

            <p className="mt-3 mb-6 text-[15px] leading-6 text-[#687066]">
              {message}
            </p>

            <motion.button
              type="button"
              onClick={onClose}
              className="h-13 w-full rounded-full bg-[#20251f] text-[14px] font-bold text-white"
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
            >
              {buttonText}
            </motion.button>
          </motion.section>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
