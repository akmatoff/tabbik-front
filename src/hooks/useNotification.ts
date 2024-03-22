import { toast } from "react-hot-toast";

function showSuccessNotification(text: string = "Success") {
  toast.success(text, {
    style: {
      background: "var(--secondary-color)",
      color: "var(--text-color)",
    },
  });
}

function showErrorNotification(text: string = "Error") {
  toast.error(text, {
    style: {
      background: "var(--secondary-color)",
      color: "var(--text-color)",
    },
  });
}

export function useNotification() {
  return {
    showSuccessNotification,
    showErrorNotification,
  };
}