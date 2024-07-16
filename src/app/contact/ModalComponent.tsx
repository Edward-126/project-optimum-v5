import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const ModalComponent = ({
  showModal,
  setShowModal,
  message,
}: {
  showModal: any;
  setShowModal: any;
  message: any;
}) => {
  return (
    showModal && (
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div className="relative mx-auto my-6 w-auto max-w-3xl p-4 text-center">
          <div className="fixed inset-0 bg-black/30 dark:bg-white/30" />

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            className="relative flex w-full max-w-lg flex-col gap-4 rounded-md border border-border bg-background px-5 py-4"
          >
            <div className="">
              <h3>{message}</h3>
              <p>We will get back to you as soon as possible</p>
            </div>

            <Button onClick={() => setShowModal(false)}>Close</Button>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default ModalComponent;
