import { createContext, useContext, useCallback, useMemo, useState } from "react";

const ToastContext = createContext(null);

function uid() {
  return "t_" + Date.now() + "_" + Math.random().toString(16).slice(2);
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message, options = {}) => {
    const {
      type = "info", // info | success | error | warning
      duration = 2500,
      title,
    } = options;

    const id = uid();

    setToasts((prev) => [
      ...prev,
      { id, type, title, message, duration },
    ]);

    // auto dismiss
    if (duration && duration > 0) {
      window.setTimeout(() => removeToast(id), duration);
    }

    return id;
  }, [removeToast]);

  const api = useMemo(() => {
    return {
      show: showToast,
      success: (msg, opt = {}) => showToast(msg, { ...opt, type: "success" }),
      error: (msg, opt = {}) => showToast(msg, { ...opt, type: "error" }),
      warning: (msg, opt = {}) => showToast(msg, { ...opt, type: "warning" }),
      info: (msg, opt = {}) => showToast(msg, { ...opt, type: "info" }),
      remove: removeToast,
    };
  }, [showToast, removeToast]);

  return (
    <ToastContext.Provider value={api}>
      {children}
      <ToastViewport toasts={toasts} onClose={removeToast} />
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}

function ToastViewport({ toasts, onClose }) {
  return (
    <div className="toast-viewport" aria-live="polite" aria-relevant="additions">
      {toasts.map((t) => (
        <div key={t.id} className={`toast toast-${t.type}`} role="status">
          <div className="toast-content">
            {t.title && <div className="toast-title">{t.title}</div>}
            <div className="toast-message">{t.message}</div>
          </div>

          <button
            className="toast-close"
            onClick={() => onClose(t.id)}
            aria-label="Close notification"
          >
            ✕
          </button>
        </div>
      ))}
    </div>
  );
}
