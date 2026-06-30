import { useState } from 'react';

// ── Reducer ──────────────────────────────────────────────
function reducer(state, action) {
  const now = new Date().toLocaleDateString("en-NG", { month: "short", day: "numeric" });
  switch (action.type) {
    case "CREDIT":
      return {
        ...state,
        user: { ...state.user, balance: state.user.balance + action.amount },
        transactions: [
          { id: Date.now(), type: "credit", label: action.label, amount: action.amount, date: now },
          ...state.transactions,
        ],
      };
    case "DEBIT":
      return {
        ...state,
        user: { ...state.user, balance: Math.max(0, state.user.balance - action.amount) },
        transactions: [
          { id: Date.now(), type: "debit", label: action.label, amount: action.amount, date: now },
          ...state.transactions,
        ],
      };
    case "ADD_GROUP":
      return { ...state, ajoGroups: [...state.ajoGroups, action.group] };
    case "COMPLETE_LESSON":
      return {
        ...state,
        lessons: state.lessons.map((l) => (l.id === action.id ? { ...l, done: true } : l)),
      };
    default:
      return state;
  }
}

// ── Hook ─────────────────────────────────────────────────
export function useAppState(init) {
  const [state, setState] = useState(init);
  function dispatch(action) {
    setState((s) => reducer(s, action));
  }
  return [state, dispatch];
}