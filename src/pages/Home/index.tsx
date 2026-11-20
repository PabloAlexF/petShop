import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

export function Home() {
  return (
    <main className="mx-auto max-w-[1240px] px-5 py-6 pb-[60px] sm:py-8 md:px-8 md:pt-12 md:pb-20">
      <section className="grid items-center gap-[38px] md:min-h-[590px] md:grid-cols-[0.88fr_1.12fr] md:gap-[70px]">
        <motion.div
          className="max-w-[520px]"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <motion.p
            className="mb-[18px] text-[12px] font-bold uppercase tracking-[0.16em] text-[#64705a]"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            Cuidado que faz bem
          </motion.p>

          <motion.h1
            className="m-0 font-[Georgia] text-[40px] font-medium leading-[1] tracking-[-0.045em] sm:text-[46px] md:text-[clamp(48px,6vw,78px)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.22, duration: 0.65, ease: "easeOut" }}
          >
            Uma vida melhor começa com pequenos cuidados.
          </motion.h1>

          <motion.p
            className="mt-7 mb-8.5 max-w-[470px] text-[17px] leading-[1.7] text-[#687066]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34, duration: 0.55 }}
          >
            Produtos escolhidos com carinho para deixar o dia a dia dos seus
            pets mais saudável e feliz.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.5 }}
            whileHover={{ y: -3 }}
          >
            <Link
              className="inline-flex min-h-[52px] items-center gap-3 rounded-full border border-[#20251f] bg-[#20251f] px-[22px] text-[14px] font-bold text-white no-underline transition duration-180 hover:-translate-y-0.5 hover:bg-transparent hover:text-[#20251f]"
              to="/products"
            >
              Ver produtos
              <FiArrowUpRight />
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative h-[340px] sm:h-[420px] md:h-[480px] lg:h-[590px]"
          initial={{ opacity: 0, x: 40, scale: 0.96 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.85, delay: 0.12, ease: "easeOut" }}
          whileHover={{ scale: 1.012 }}
        >
          <img
            className="h-full w-full rounded-[120px_120px_18px_18px] object-cover md:rounded-[180px_180px_24px_24px]"
            src="https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=1100&q=85"
            alt="Cachorro relaxando ao ar livre"
          />
          <motion.div
            className="absolute right-2.5 bottom-3 flex min-w-[180px] flex-col rounded-xl border border-[#e5e1d7] bg-[#f7f5ef]/96 p-4.5 px-5 shadow-[0_16px_40px_rgba(47,53,43,0.12)] md:right-[-18px] md:bottom-[-18px]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.55 }}
          >
            <span className="mb-1.5 text-[11px] uppercase tracking-[0.08em] text-[#7a8175]">
              Entregamos com cuidado
            </span>
            <strong className="font-[Georgia] text-[17px]">
              Para toda família
            </strong>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        className="mt-[72px] flex flex-col items-start justify-between gap-[40px] rounded-[24px] border border-[#dedfd5] bg-[#e9ecdf] p-6 md:mt-[110px] md:p-14 lg:flex-row lg:items-end"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 0.65, ease: "easeOut" }}
      >
        <div>
          <p className="mb-3.5 text-[12px] font-bold uppercase tracking-[0.16em] text-[#64705a] md:mb-4">
            Nossa loja
          </p>
          <h2 className="m-0 max-w-[720px] font-[Georgia] text-[38px] font-medium leading-[1.05] tracking-[-0.035em] md:text-[clamp(38px,5vw,58px)]">
            Produtos para cuidar de quem faz parte da família.
          </h2>
        </div>

        <motion.div whileHover={{ x: 4 }}>
          <Link
            className="inline-flex min-h-[52px] items-center gap-2.5 whitespace-nowrap border-b border-[#20251f] px-0 text-[14px] font-bold text-[#20251f] no-underline md:px-5"
            to="/products"
          >
            Conhecer todos os produtos
            <FiArrowUpRight />
          </Link>
        </motion.div>
      </motion.section>
    </main>
  );
}
