
import { useState } from "react";
import Btn from '../ui/Button';
import fmt from'../../Utils/formatter';
import CreateGroupModal from "./CreateGroupModel";
import AjoGroupCard from "./AjoGroupCard";
import AjoExplainer from "./AjoExplainer";

function AjoScreen({ state, dispatch, toast }) {
  const [modal, setModal] = useState(null);

  const contribute = (g) => {
    dispatch({ type: "DEBIT", amount: g.weekly, label: `Ajo contribution – ${g.name}` });
    toast(`${fmt(g.weekly)} contributed to ${g.name}!`);
  };

  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <h2 style={{ fontSize: 20, fontWeight: 900 }}>Ajo / Adashe</h2>
        <Btn onClick={() => setModal("create")} variant="gold" style={{ padding: "9px 16px", fontSize: 13 }}>
          + New Group
        </Btn>
      </div>
      <AjoExplainer />
      {state.ajoGroups.map((g) => (
        <AjoGroupCard key={g.id} g={g} onContribute={() => contribute(g)} />
      ))}
      {modal === "create" && (
        <CreateGroupModal onClose={() => setModal(null)} dispatch={dispatch} toast={toast} />
      )}
    </div>
  );
}

export default AjoScreen;