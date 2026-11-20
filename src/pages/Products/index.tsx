import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState, useContext } from "react";
import { FiPlus } from "react-icons/fi";
import { api } from "../../services/api";
import { CartContext } from "../../contexts/CartContext";
import toast from "react-hot-toast";

export interface productProps {
  id: number;
  brand: string;
  petType: string[];
  category: string;
  title: string;
  description: string;
  price: number;
  cover: string;
}

export function Products() {
  const [products, setProducts] = useState<productProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProducts() {
      try {
        setLoading(true);
        setError("");

        const response = await api.get("");
        setProducts(response.data.products);
      } catch (error) {
        setError("Não foi possível carregar os produtos.");
      } finally {
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  const { addItemCart } = useContext(CartContext);

  const handleAddToCart = (product: productProps) => {
    addItemCart(product);
    toast.success(`${product.title} adicionado ao carrinho!`);
  };

  return (
    <main className="mx-auto max-w-[1240px] px-5 py-10 md:px-8 md:py-14">
      <motion.div
        className="mb-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <motion.p
          className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#64705a]"
          variants={{
            hidden: { opacity: 0, y: 12 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.45 }}
        >
          Para todos os pets
        </motion.p>
        <motion.h1
          className="m-0 font-[Georgia] text-[38px] font-medium tracking-[-0.035em] sm:text-[42px] md:text-[58px]"
          variants={{
            hidden: { opacity: 0, y: 22 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          Produtos
        </motion.h1>
      </motion.div>

      <AnimatePresence mode="wait">
        {loading ? (
          <motion.section
            key="loading"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-[18px] border border-[#dedfd5] bg-[#fffefa]"
              >
                <motion.div
                  className="h-[260px] bg-[#e8eadf]"
                  animate={{ opacity: [0.45, 0.85, 0.45] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="space-y-4 p-5">
                  <div className="h-3 w-20 animate-pulse rounded-full bg-[#e8eadf]" />
                  <div className="h-5 w-full animate-pulse rounded-full bg-[#dfe3d5]" />
                  <div className="h-5 w-24 animate-pulse rounded-full bg-[#dfe3d5]" />
                </div>
              </div>
            ))}
          </motion.section>
        ) : error ? (
          <motion.section
            key="error"
            className="flex min-h-[300px] flex-col items-center justify-center rounded-[24px] border border-[#d9cab0] bg-[#faf3e7] px-6 text-center"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
          >
            <h2 className="m-0 font-[Georgia] text-[28px] font-medium">
              Não foi possível carregar
            </h2>
            <p className="mt-3 text-[#687066]">{error}</p>
          </motion.section>
        ) : products.length === 0 ? (
          <motion.section
            key="empty"
            className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-[#dedfd5] bg-[#fffefa]"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
          >
            <p className="text-[#687066]">Nenhum produto encontrado.</p>
          </motion.section>
        ) : (
          <motion.section
            key="products"
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {products.map((product) => (
              <motion.article
                key={product.id}
                className="overflow-hidden rounded-[18px] border border-[#dedfd5] bg-[#fffefa] shadow-[0_8px_30px_rgba(47,53,43,0)]"
                variants={{
                  hidden: { opacity: 0, y: 28, scale: 0.96 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: { duration: 0.45, ease: "easeOut" },
                  },
                }}
                whileHover={{
                  y: -8,
                  boxShadow: "0 18px 36px rgba(47,53,43,0.12)",
                }}
              >
                <div className="overflow-hidden">
                  <motion.img
                    className="h-[220px] w-full object-cover sm:h-[260px]"
                    src={product.cover}
                    alt={product.title}
                    whileHover={{ scale: 1.055 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                  />
                </div>

                <div className="p-5">
                  <motion.p
                    className="mb-2 text-[12px] font-bold uppercase tracking-[0.08em] text-[#7a8175]"
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {product.category}
                  </motion.p>

                  <h2 className="mb-5 font-[Georgia] text-[20px] font-medium">
                    {product.title}
                  </h2>

                  <div className="flex items-center justify-between gap-4">
                    <motion.strong
                      className="text-[18px]"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.25 }}
                    >
                      R$ {product.price.toFixed(2).replace(".", ",")}
                    </motion.strong>

                    <motion.button
                      onClick={() => handleAddToCart(product)}
                      type="button"
                      className="grid h-[42px] w-[42px] shrink-0 place-items-center rounded-full bg-[#20251f] text-[20px] text-white transition-colors hover:bg-[#64705a]"
                      whileHover={{ scale: 1.12, rotate: 6 }}
                      whileTap={{ scale: 0.82, rotate: -8 }}
                      aria-label={`Adicionar ${product.title} ao carrinho`}
                    >
                      <FiPlus />
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
