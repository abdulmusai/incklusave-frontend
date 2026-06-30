
import { useState } from "react";
import Btn from '../ui/Button';
import Input from'../ui/Input';
import Modal from'../ui/Modal';
import fmt from'../../Utils/formatter';


function SendModal({ onClose, balance, dispatch, toast }) {
  const [amt, setAmt]     = useState("");
  const [phone, setPhone] = useState("");
  const doSend = () => {
    const n = parseInt(amt);
    if (!n || n > balance) { toast("Insufficient balance or invalid amount"); return; }
    dispatch({ type: "DEBIT", amount: n, label: `Sent to ${phone || "Unknown"}` });
    toast(`${fmt(n)} sent successfully!`);
    onClose();
  };
  return (
    <Modal title="Send Money" onClose={onClose}>
      <Input label="Recipient Phone" value={phone} onChange={setPhone} placeholder="0803 000 0000" />
      <Input label="Amount" value={amt} onChange={setAmt} type="number" prefix="₦" placeholder="0" />
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <Btn onClick={onClose} variant="ghost" style={{ flex: 1 }}>Cancel</Btn>
        <Btn onClick={doSend}  style={{ flex: 1 }}>Send Money</Btn>
      </div>
    </Modal>
  );
}

export default SendModal;