import { motion, AnimatePresence } from 'framer-motion';
import { Trash2 } from 'lucide-react';

const DeleteConfirmModal = ({ show, onConfirm, onCancel, itemName = "data" }) => {
    return (
        <AnimatePresence>
            {show && (
                <motion.div
                    className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-2xl max-w-sm w-full shadow-lg text-center"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                    >
                        <Trash2 className="text-red-500 w-10 h-10 mx-auto mb-3" />
                        <h2 className="text-xl font-bold text-red-600 mb-1">Hapus {itemName}?</h2>
                        <p className="text-sm text-gray-600 mb-5">Tindakan ini tidak dapat dibatalkan.</p>
                        <div className="flex justify-center gap-4">
                            <button
                                onClick={onCancel}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-lg"
                            >
                                Batal
                            </button>
                            <button
                                onClick={onConfirm}
                                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                            >
                                Hapus
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default DeleteConfirmModal;
