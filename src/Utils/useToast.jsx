import { useState, useRef } from "react";

export default function useToast() {
  const [toast, setToast] = useState({
    msg: "",
    visible: false
  });

  const ref = useRef(null);

  function show(msg) {
    if(ref.current) clearTimeout(ref.current);

    setToast({
      msg,
      visible: true
    });

    ref.current = setTimeout(() => {
      setToast((t) => ({
        ...t,
        visible: false
      }));
    }, 3000);
  }

  return [toast, show];
}