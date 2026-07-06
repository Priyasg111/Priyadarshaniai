import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

function hasSubmittedBefore(): boolean {
  if (typeof window === "undefined") return false;
  return Object.keys(localStorage).some((k) => k.startsWith("wp_lead_"));
}

interface Props {
  onClose: () => void;
}

export function WhitepaperGateModal({ onClose }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  function validate() {
    const e: { name?: string; email?: string } = {};
    if (!name.trim()) e.name = "Full name is required.";
    if (!email.trim()) {
      e.email = "Work email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Please enter a valid email address.";
    }
    return e;
  }

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    const e = validate();
    if (Object.keys(e).length) {
      setErrors(e);
      return;
    }
    localStorage.setItem(
      `wp_lead_${Date.now()}`,
      JSON.stringify({ name: name.trim(), email: email.trim() }),
    );
    window.open("/whitepaper-ai-validation-enterprise.html", "_blank", "noreferrer");
    onClose();
  }

  function handleOverlayClick(evt: React.MouseEvent) {
    if (evt.target === overlayRef.current) onClose();
  }

  return (
    /* @section: whitepaper-gate-modal */
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wp-modal-title"
    >
      <div className="relative w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground transition hover:text-foreground"
          aria-label="Close"
        >
          <X className="h-4 w-4" />
        </button>

        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.28em] text-primary">White Paper</p>
        <h2 id="wp-modal-title" className="font-serif-display text-2xl leading-tight">
          Download the White Paper
        </h2>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Deploying AI in Regulated Industries Without Breaking Compliance: A 10-Week Framework.
        </p>

        <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-4">
          <div>
            <label htmlFor="wp-name" className="mb-1.5 block text-sm font-medium">
              Full Name
            </label>
            <input
              id="wp-name"
              type="text"
              value={name}
              onChange={(e) => { setName(e.target.value); setErrors((prev) => ({ ...prev, name: undefined })); }}
              placeholder="Your full name"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              autoComplete="name"
            />
            {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="wp-email" className="mb-1.5 block text-sm font-medium">
              Work Email
            </label>
            <input
              id="wp-email"
              type="email"
              value={email}
              onChange={(e) => { setEmail(e.target.value); setErrors((prev) => ({ ...prev, email: undefined })); }}
              placeholder="you@company.com"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm outline-none placeholder:text-muted-foreground focus:border-primary focus:ring-1 focus:ring-primary"
              autoComplete="email"
            />
            {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition hover:scale-[1.02]"
          >
            Get the White Paper
          </button>
        </form>

        <p className="mt-4 text-center text-xs text-muted-foreground">No spam. One email with the download link.</p>
      </div>
    </div>
  );
}

export function useWhitepaperGate() {
  const [open, setOpen] = useState(false);

  function triggerDownload() {
    if (hasSubmittedBefore()) {
      window.open("/whitepaper-ai-validation-enterprise.html", "_blank", "noreferrer");
    } else {
      setOpen(true);
    }
  }

  return { open, setOpen, triggerDownload };
}
