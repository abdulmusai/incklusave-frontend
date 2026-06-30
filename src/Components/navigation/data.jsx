
const INIT = {
  user: { name: "Amara Okafor", phone: "0803-XXX-1234", balance: 5200, savings: 18400 },
  transactions: [
    { id: 1, type: "credit", label: "Ajo payout received",     amount: 20000, date: "May 18" },
    { id: 2, type: "debit",  label: "Weekly Ajo contribution", amount: 2000,  date: "May 12" },
    { id: 3, type: "credit", label: "Money received – Emeka",  amount: 3500,  date: "May 10" },
    { id: 4, type: "debit",  label: "Electricity bill",        amount: 1200,  date: "May 8"  },
    { id: 5, type: "credit", label: "Micro-loan disbursed",    amount: 10000, date: "May 5"  },
  ],
  ajoGroups: [
    { id: 1, name: "Traders Ajo",  members: 10, weekly: 2000, nextPayout: "You",        progress: 70 },
    { id: 2, name: "Market Women", members: 8,  weekly: 1500, nextPayout: "Chisom",     progress: 40 },
    { id: 3, name: "Youth Savers", members: 5,  weekly: 1000, nextPayout: "Rotational", progress: 20 },
  ],
  loanScore: 78,
  loanEligible: true,
  loanMax: 25000,
  lessons: [
    { id: 1, title: "How to Save Daily",           done: true,  icon: "💰" },
    { id: 2, title: "Avoiding Loan Scams",         done: true,  icon: "🔒" },
    { id: 3, title: "Growing a Small Business",    done: false, icon: "📈" },
    { id: 4, title: "Understanding Interest Rates",done: false, icon: "🏦" },
    { id: 5, title: "Insurance Basics",            done: false, icon: "🛡️" },
  ],
};

export default INIT;