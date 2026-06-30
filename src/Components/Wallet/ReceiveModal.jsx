import { useState } from "react";
import Btn from '../ui/Button';
import Input from'../ui/Input';
import Modal from'../ui/Modal';
import fmt from'../../Utils/formatter';

function ReceiveModal({ onClose, dispatch, toast }) {
  const [amt, setAmt]     = useState("");
  const [phone, setPhone] = useState("");
  const doReceive = () => {
    const n = parseInt(amt);
    if (!n) { toast("Enter a valid amount"); return; }
    dispatch({ type: "CREDIT", amount: n, label: `Received from ${phone || "Unknown"}` });
    toast(`${fmt(n)} received!`);
    onClose();
  };
  return (
    <Modal title="Receive Money" onClose={onClose}>
      <Input label="Sender Phone" value={phone} onChange={setPhone} placeholder="0803 000 0000" />
      <Input label="Amount" value={amt} onChange={setAmt} type="number" prefix="₦" placeholder="0" />
      <div style={{ display: "flex", gap: 10, marginTop: 6 }}>
        <Btn onClick={onClose}    variant="ghost" style={{ flex: 1 }}>Cancel</Btn>
        <Btn onClick={doReceive}  style={{ flex: 1 }}>Confirm</Btn>
      </div>
    </Modal>
  );
}
export default ReceiveModal;