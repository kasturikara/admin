"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import Modal from "../ui/modal";

export const StoreModal = () => {
  const storeModal = useStoreModal();

  return (
    <Modal
      title="Create New Store"
      description="Create a new store to add products and categories"
      isOpen={storeModal.isOpen}
      onClose={storeModal.onClose}
    >
      Store Form
    </Modal>
  );
};
