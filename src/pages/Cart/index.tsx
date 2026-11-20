import { useContext, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { FiMinus, FiPlus, FiTrash2, FiShoppingBag } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts/CartContext";
import { ModalSuccess } from "../../components/Modal/modalSucess";

export function Cart() {
  const { cart, increaseAmount, decreaseAmount, removeItemCart, clearCart } =
    useContext(CartContext);

  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  function handleFinishPurchase() {
    clearCart();
    setIsSuccessModalOpen(true);
  }

  const totalCart = cart.reduce(
    (total, item) => total + item.price * item.amount,
    0,
  );

  return (
    <main className="mx-auto min-h-[calc(100vh-84px)] max-w-[1240px] px-4 py-8 sm:px-5 md:px-8 md:py-14">
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.16em] text-[#64705a]">
          Seus produtos
        </p>
        <h1 className="m-0 font-[Georgia] text-[38px] font-medium tracking-[-0.035em] sm:text-[42px] md:text-[58px]">
          Carrinho
        </h1>
      </motion.div>

      {cart.length === 0 ? (
        <motion.section
          className="flex min-h-[390px] flex-col items-center justify-center rounded-[24px] border border-[#dedfd5] bg-[#fffefa] px-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="mb-5 grid h-[72px] w-[72px] place-items-center rounded-full bg-[#e9ecdf] text-[30px] text-[#64705a]">
            <FiShoppingBag />
          </span>
          <h2 className="m-0 font-[Georgia] text-[28px] font-medium">
            Seu carrinho está vazio
          </h2>
          <p className="mt-3 mb-6 text-[#687066]">
            Escolha os produtos que seu pet vai amar.
          </p>
          <Link
            to="/products"
            className="rounded-full bg-[#20251f] px-6 py-[14px] text-[14px] font-bold text-white no-underline transition hover:-translate-y-0.5"
          >
            Ver produtos
          </Link>
        </motion.section>
      ) : (
        <div className="grid items-start gap-7 lg:grid-cols-[1fr_340px]">
          <section className="flex flex-col gap-4">
            <AnimatePresence initial={false}>
              {cart.map((item, index) => (
                <motion.article
                  key={item.id}
                  className="grid grid-cols-[88px_1fr] gap-4 rounded-[18px] border border-[#dedfd5] bg-[#fffefa] p-4 md:grid-cols-[120px_1fr_auto] md:items-center md:p-5"
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 18, scale: 0.96, height: 0 }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -4, scale: 1.005 }}
                >
                  <motion.img
                    src={item.image}
                    alt={item.name}
                    className="h-[88px] w-[88px] rounded-[12px] object-cover md:h-[120px] md:w-[120px]"
                    whileHover={{ scale: 1.06, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  />

                  <div>
                    <h2 className="m-0 font-[Georgia] text-[19px] font-medium md:text-[21px]">
                      {item.name}
                    </h2>
                    <p className="mt-2 mb-4 text-[14px] text-[#687066]">
                      R$ {item.price.toFixed(2).replace(".", ",")}
                    </p>

                    <div className="flex w-fit items-center rounded-full border border-[#dcd8cc] bg-white">
                      <motion.button
                        type="button"
                        onClick={() => decreaseAmount(item.id)}
                        className="grid h-[38px] w-[38px] place-items-center text-[#20251f]"
                        whileHover={{ scale: 1.12, backgroundColor: "#e9ecdf" }}
                        whileTap={{ scale: 0.78, rotate: -8 }}
                        aria-label={`Diminuir quantidade de ${item.name}`}
                      >
                        <FiMinus />
                      </motion.button>
                      <motion.span
                        key={item.amount}
                        className="min-w-[38px] text-center text-[14px] font-bold"
                        initial={{ opacity: 0, y: item.amount > 1 ? 6 : -6, scale: 0.85 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 500, damping: 24 }}
                      >
                        {item.amount}
                      </motion.span>
                      <motion.button
                        type="button"
                        onClick={() => increaseAmount(item.id)}
                        className="grid h-[38px] w-[38px] place-items-center text-[#20251f]"
                        whileHover={{ scale: 1.12, backgroundColor: "#e9ecdf" }}
                        whileTap={{ scale: 0.78, rotate: 8 }}
                        aria-label={`Aumentar quantidade de ${item.name}`}
                      >
                        <FiPlus />
                      </motion.button>
                    </div>
                  </div>

                  <div className="col-span-2 flex items-center justify-between border-t border-[#eeeae1] pt-4 md:col-span-1 md:flex-col md:border-t-0 md:border-l md:py-2 md:pl-5 md:text-right">
                    <strong className="text-[18px]">
                      R$ {(item.price * item.amount).toFixed(2).replace(".", ",")}
                    </strong>
                    <motion.button
                      type="button"
                      onClick={() => removeItemCart(item.id)}
                      className="mt-0 grid h-[38px] w-[38px] place-items-center rounded-full text-[#8a6256] md:mt-5"
                      whileHover={{ scale: 1.12, backgroundColor: "#f5ebe7", rotate: 8 }}
                      whileTap={{ scale: 0.78, rotate: -12 }}
                      aria-label={`Remover ${item.name}`}
                    >
                      <FiTrash2 />
                    </motion.button>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </section>

          <motion.aside
            className="rounded-[24px] border border-[#dedfd5] bg-[#e9ecdf] p-6 md:p-7 lg:sticky lg:top-6"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15, duration: 0.45 }}
          >
            <h2 className="m-0 font-[Georgia] text-[26px] font-medium">
              Resumo do pedido
            </h2>

            <div className="my-6 border-t border-[#ced2c1]" />

            <div className="flex items-center justify-between text-[14px] text-[#687066]">
              <span>Subtotal</span>
              <strong className="text-[#20251f]">
                R$ {totalCart.toFixed(2).replace(".", ",")}
              </strong>
            </div>

            <div className="mt-4 flex items-center justify-between text-[14px] text-[#687066]">
              <span>Entrega</span>
              <strong className="text-[#20251f]">A calcular</strong>
            </div>

            <div className="my-6 border-t border-[#ced2c1]" />

            <div className="flex items-end justify-between">
              <span className="text-[14px] font-bold">Total</span>
              <motion.strong
                key={totalCart}
                className="font-[Georgia] text-[28px]"
                initial={{ opacity: 0, y: 8, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
              >
                R$ {totalCart.toFixed(2).replace(".", ",")}
              </motion.strong>
            </div>

            <motion.button
              type="button"
              onClick={handleFinishPurchase}
              className="mt-6 h-[52px] w-full rounded-full bg-[#20251f] text-[14px] font-bold text-white"
              whileHover={{ y: -4, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 420, damping: 20 }}
            >
              Finalizar compra
            </motion.button>
          </motion.aside>
        </div>
      )}

      <ModalSuccess
        open={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Compra realizada!"
        message="Seu pedido foi finalizado com sucesso. Obrigado pela preferência!"
        buttonText="Continuar comprando"
      />
    </main>
  );
}