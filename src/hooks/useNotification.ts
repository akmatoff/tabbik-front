import { toast } from "react-hot-toast";

function showSuccessNotification(text: string = "Success") {
  toast.success(text, {
    style: {
      background: "var(--secondary-color)",
      color: "var(--text-color-light)",
    },
  });
}

function showErrorNotification(text: string = "Error") {
  toast.error(text, {
    style: {
      background: "var(--secondary-color)",
      color: "var(--text-color-light)",
    },
  });
}

export function useNotification() {
  return {
    showSuccessNotification,
    showErrorNotification,
  };
}
