import React, {useState, useImperativeHandle, forwardRef} from 'react';
import Toast from './Toast';
import {ToastMessagesProps} from './ToastMessages.types';
import {ToastMessagesRef} from './ToastMessagesRef';

const ToastMessages = forwardRef<ToastMessagesRef, ToastMessagesProps>(
  (
    {
      closeIconLib,
      closeIconName,
      closeIconSize,
      severityIconLib,
      severityIconName,
      severityIconSize,
      position = 'top-right',
      sticky = false,
      severity = 'success',
      life,
      style,
      contentStyle,
      closable,
      summary,
      detail,
      visible,
      content,
    },
    ref,
  ) => {
    const [toasts, setToasts] = useState([]);

    const showToast = newToastProps => {
      const newToast = {
        id: Date.now(),
        severityIconLib: newToastProps.severityIconLib || severityIconLib,
        severityIconName: newToastProps.severityIconName || severityIconName,
        severityIconSize: newToastProps.severityIconSize || severityIconSize,
        content: newToastProps.content || content,
        summary: newToastProps.summary || summary,
        closeIconLib: newToastProps.closeIconLib || closeIconLib,
        closeIconName: newToastProps.closeIconName || closeIconName,
        closeIconSize: newToastProps.closeIconSize || closeIconSize,
        detail: newToastProps.detail || detail,
        contentStyle: newToastProps.contentStyle || contentStyle,
        closable:
          newToastProps.closable !== undefined
            ? newToastProps.closable
            : closable,
        position: newToastProps.position || position,
        sticky:
          newToastProps.sticky !== undefined ? newToastProps.sticky : sticky,
        severity: newToastProps.severity || severity,
        life: newToastProps.life || life,
        visible:
          newToastProps.visible !== undefined ? newToastProps.visible : visible,
        exitDelay: (toasts.length + 1) * 500,
      };
      setToasts(currentToasts => [...currentToasts, newToast]);

      if (!newToast.sticky) {
        setTimeout(() => {
          setToasts(currentToasts =>
            currentToasts.filter(toast => toast.id !== newToast.id),
          );
        }, newToast.life + newToast.exitDelay);
      }
    };

    useImperativeHandle(ref, () => ({
      showToast,
    }));

    return (
      <>
        {toasts.map((toast, index) => (
          <Toast
            key={toast.id}
            style={style}
            {...toast}
            onClose={() => {
              setToasts(currentToasts =>
                currentToasts.filter(t => t.id !== toast.id),
              );
            }}
            toastIndex={index}
          />
        ))}
      </>
    );
  },
);

ToastMessages.displayName = 'ToastMessages';

export default ToastMessages;
