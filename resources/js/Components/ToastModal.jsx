import { CheckCircle, XCircle, AlertTriangle, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const iconMap = {
    success: { icon: <CheckCircle className="text-green-500 w-6 h-6" />, bg: "bg-green-100", text: "text-green-700" },
    error: { icon: <XCircle className="text-red-500 w-6 h-6" />, bg: "bg-red-100", text: "text-red-700" },
    warning: { icon: <AlertTriangle className="text-yellow-500 w-6 h-6" />, bg: "bg-yellow-100", text: "text-yellow-700" },
    info: { icon: <Info className="text-blue-500 w-6 h-6" />, bg: "bg-blue-100", text: "text-blue-700" },
};

const ToastModal = ({ show, message, mode = "success" }) => {
    const variant = iconMap[mode] || iconMap.success;

    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className={`fixed top-6 right-6 z-50 rounded-xl px-4 py-3 shadow-md flex items-center gap-3 ${variant.bg} ${variant.text}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.3 }}
                >
                    {variant.icon}
                    <span className="text-sm font-medium">{message}</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default ToastModal;
