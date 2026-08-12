import React, { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { cn } from '../../utils/cn';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  children,
  className
}) => {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [isOpen]);

  // Fallback for light-dismiss on click outside content
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === dialogRef.current) {
      onClose();
    }
  };

  const handleCancel = (e: React.SyntheticEvent<HTMLDialogElement, Event>) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleCancel}
      onClick={handleDialogClick}
      aria-labelledby="modal-title"
      className={cn(
        'fixed inset-0 z-50 m-auto p-0 max-w-4xl w-[92vw] max-h-[88vh] bg-[#0b0f17] text-slate-100 border border-slate-700/80 shadow-[0_0_50px_rgba(0,0,0,0.8)] backdrop:bg-slate-950/80 backdrop:backdrop-blur-sm overflow-hidden flex flex-col',
        className
      )}
    >
      {/* Header */}
      <div className="flex items-start justify-between p-5 md:p-6 border-b border-slate-800 bg-[#121824]">
        <div>
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest mb-1">
            [CASE STUDY // DEEP DIVE]
          </div>
          <h3 id="modal-title" className="text-xl md:text-2xl font-bold text-slate-100 font-sans">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-400 font-mono mt-1">{subtitle}</p>
          )}
        </div>
        <button
          onClick={onClose}
          className="p-1.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/80 border border-slate-700/60 transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Body */}
      <div className="p-6 overflow-y-auto flex-1 space-y-6 text-sm text-slate-300 leading-relaxed font-sans">
        {children}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-slate-800 bg-[#121824] flex items-center justify-between font-mono text-xs text-slate-500">
        <span>STATUS: VERIFIED SPEC</span>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 transition-colors uppercase"
        >
          CLOSE SPEC [ESC]
        </button>
      </div>
    </dialog>
  );
};
