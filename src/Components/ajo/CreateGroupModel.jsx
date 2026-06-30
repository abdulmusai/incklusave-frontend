import { useState } from "react";
import Btn from '../ui/Button'; 
import Input from'../ui/Input';
import  T  from "../ui/theme.jsx";
import fmt from'../../Utils/formatter';
import Modal from "../ui/Modal";
export default function CreateGroupModal({ onClose, dispatch, toast }) {
  const [groupName, setGroupName] = useState("");
  const [weeklyAmt, setWeeklyAmt] = useState("");
  const [members, setMembers]     = useState("");

  const createGroup = () => {
    if (!groupName || !weeklyAmt) { toast("Fill all fields"); return; }
    dispatch({
      type: "ADD_GROUP",
      group: {
        id: Date.now(), name: groupName,
        members: parseInt(members) || 5,
        weekly: parseInt(weeklyAmt),
        nextPayout: "You", progress: 10,
      },
    });
    toast(`Group "${groupName}" created!`);
    onClose();
  };

  return (
    <Modal title="Create Ajo Group" onClose={onClose}>
      <Input label="Group Name"           value={groupName} onChange={setGroupName} placeholder="e.g. Market Women Ajo" />
      <Input label="Weekly Contribution"  value={weeklyAmt} onChange={setWeeklyAmt} type="number" prefix="₦" placeholder="2000" />
      <Input label="Number of Members"    value={members}   onChange={setMembers}   type="number" placeholder="10" />
      <div style={{ color: T.sub, fontSize: 12, marginBottom: 14 }}>
        Weekly pool: {fmt((parseInt(weeklyAmt) || 0) * (parseInt(members) || 0))}
      </div>
      <div style={{ display: "flex", gap: 10 }}>
        <Btn onClick={onClose}     variant="ghost" style={{ flex: 1 }}>Cancel</Btn>
        <Btn onClick={createGroup} variant="gold"  style={{ flex: 1 }}>Create Group</Btn>
      </div>
    </Modal>
  );
}
