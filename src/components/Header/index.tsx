import { AnimatePresence, motion } from "motion/react"
import { useContext, useEffect, useState } from "react"
import { FaPaw } from "react-icons/fa"
import { FiShoppingBag } from "react-icons/fi"
import { NavLink } from "react-router-dom"
import { CartContext } from "../../contexts/CartContext"

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { cart } = useContext(CartContext)
    const cartItemsCount = cart.reduce((total, item) => total + item.amount, 0)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 24)

        handleScroll()
        window.addEventListener("scroll", handleScroll, { passive: true })

        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <motion.header
            className="sticky top-0 z-50 flex justify-center px-2 sm:px-3"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
        >
            <motion.div
                className="grid h-[68px] w-full grid-cols-[44px_1fr_44px] items-center rounded-[18px] border border-[#e5e1d7] bg-[#f7f5ef]/96 px-2 shadow-[0_10px_30px_rgba(47,53,43,0)] backdrop-blur-md sm:px-3 md:h-[76px] md:px-5 lg:h-[84px] lg:grid-cols-[1fr_auto_1fr] lg:px-6"
                initial={false}
                animate={{
                    maxWidth: isScrolled ? 760 : 1240,
                    marginTop: isScrolled ? 8 : 0,
                    borderRadius: isScrolled ? 18 : 0,
                    boxShadow: isScrolled
                        ? "0 12px 34px rgba(47,53,43,0.14)"
                        : "0 12px 34px rgba(47,53,43,0)",
                }}
                transition={{ type: "spring", stiffness: 240, damping: 28 }}
            >
                <motion.div
                    className="hidden justify-self-start lg:block"
                    animate={{
                        x: isScrolled ? -4 : 0,
                    }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                >
                    <NavLink
                        className="flex w-max items-center gap-2.5 font-[Georgia] text-[18px] font-bold text-[#20251f] no-underline md:text-[20px]"
                        to="/"
                        aria-label="Ir para o início"
                    >
                        <motion.span
                            className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#687a5b] text-[16px] text-[#f7f5ef] md:h-[38px] md:w-[38px] md:text-[17px]"
                            whileHover={{ rotate: -8, scale: 1.08 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaPaw />
                        </motion.span>
                        <motion.span
                            className="hidden overflow-hidden whitespace-nowrap md:inline"
                            animate={{
                                width: isScrolled ? 0 : "auto",
                                opacity: isScrolled ? 0 : 1,
                            }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                        >
                            PetShop
                        </motion.span>
                    </NavLink>
                </motion.div>

                <nav
                    className="col-start-2 flex min-w-0 items-center justify-center gap-3 sm:gap-5 md:gap-7"
                    aria-label="Navegação principal"
                >
                    {/*
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative whitespace-nowrap px-1 py-5 text-[12px] font-bold no-underline after:absolute after:right-1 after:bottom-3 after:left-1 after:h-0.5 after:origin-center after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 sm:text-[13px] md:px-2 md:py-6 md:text-[14px] md:after:bottom-4 ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative whitespace-nowrap px-1 py-5 text-[12px] font-bold no-underline after:absolute after:right-1 after:bottom-3 after:left-1 after:h-0.5 after:origin-center after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 sm:text-[13px] md:px-2 md:py-6 md:text-[14px] md:after:bottom-4 ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Produtos
          </NavLink>
          */}
                    {/*
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Produtos
          </NavLink>
          */}
                    {/*
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Produtos
          </NavLink>
          */}
                    {/*
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Início
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              `relative whitespace-nowrap px-0 py-[20px] text-[13px] font-bold no-underline after:absolute after:right-0 after:bottom-[10px] after:left-0 after:h-0.5 after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 md:py-[24px] md:text-[14px] md:after:bottom-[14px] ${
                isActive
                  ? "text-[#20251f] after:scale-x-100"
                  : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
              }`
            }
          >
            Produtos
          </NavLink>
          */}
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `relative whitespace-nowrap px-1 py-5 text-[12px] font-bold no-underline after:absolute after:right-1 after:bottom-3 after:left-1 after:h-0.5 after:origin-center after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 sm:text-[13px] md:px-2 md:py-6 md:text-[14px] md:after:bottom-4 ${
                                isActive
                                    ? "text-[#20251f] after:scale-x-100"
                                    : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
                            }`
                        }
                    >
                        Início
                    </NavLink>
                    <NavLink
                        to="/products"
                        className={({ isActive }) =>
                            `relative whitespace-nowrap px-1 py-5 text-[12px] font-bold no-underline after:absolute after:right-1 after:bottom-3 after:left-1 after:h-0.5 after:origin-center after:rounded-full after:bg-[#687a5b] after:content-[''] after:transition-transform after:duration-180 sm:text-[13px] md:px-2 md:py-6 md:text-[14px] md:after:bottom-4 ${
                                isActive
                                    ? "text-[#20251f] after:scale-x-100"
                                    : "text-[#73796d] after:scale-x-0 hover:text-[#20251f]"
                            }`
                        }
                    >
                        Produtos
                    </NavLink>
                </nav>

                <motion.div
                    className="col-start-3 justify-self-end"
                    animate={{ scale: isScrolled ? 1.05 : 1 }}
                    transition={{ type: "spring", stiffness: 420, damping: 22 }}
                >
                    <NavLink
                        className={({ isActive }) =>
                            `relative grid h-[38px] w-[38px] place-items-center rounded-full border border-[#dcd8cc] text-[18px] no-underline transition-colors duration-180 sm:h-[40px] sm:w-[40px] md:h-[42px] md:w-[42px] ${
                                isActive
                                    ? "bg-[#20251f] text-white"
                                    : "bg-transparent text-[#20251f] hover:bg-[#20251f] hover:text-white"
                            }`
                        }
                        to="/cart"
                        aria-label={`Abrir carrinho, ${cartItemsCount} itens`}
                    >
                        <motion.span
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.82 }}
                            className="grid place-items-center"
                        >
                            <FiShoppingBag />
                        </motion.span>

                        <AnimatePresence>
                            {cartItemsCount > 0 && (
                                <motion.span
                                    key={cartItemsCount}
                                    className="absolute -top-1 -right-1 grid h-5 min-w-5 place-items-center rounded-full border-2 border-[#f7f5ef] bg-[#687a5b] px-1 text-[10px] font-bold leading-none text-white sm:text-[11px]"
                                    initial={{ opacity: 0, scale: 0.35, y: 5 }}
                                    animate={{ opacity: 1, scale: 1, y: 0 }}
                                    exit={{ opacity: 0, scale: 0.35 }}
                                    transition={{ type: "spring", stiffness: 500, damping: 20 }}
                                >
                                    {cartItemsCount > 99 ? "99+" : cartItemsCount}
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </NavLink>
                </motion.div>
            </motion.div>
        </motion.header>
    )
}