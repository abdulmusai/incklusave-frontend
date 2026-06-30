import { useState } from "react";
import  T  from "../ui/theme";
import ProgressBar from'../ui/ProgressBar';
import LessonCard from './LessonCard';



export default  function LearnScreen({ state, dispatch, toast }) {
  const [active, setActive] = useState(null);
  const { lessons } = state;
  const done = lessons.filter((l) => l.done).length;

  return (
    <div style={{ padding: "24px 20px 100px" }}>
      <h2 style={{ fontSize: 20, fontWeight: 900, marginBottom: 6 }}>Financial Literacy</h2>
      <div style={{ color: T.sub, fontSize: 13, marginBottom: 20 }}>
        {done} of {lessons.length} lessons completed
      </div>
      <div style={{ marginBottom: 24 }}>
        <ProgressBar value={(done / lessons.length) * 100} gradient height={8} />
      </div>
      {lessons.map((l) => (
        <LessonCard
          key={l.id}
          lesson={l}
          isOpen={active === l.id}
          onToggle={() => setActive(active === l.id ? null : l.id)}
          onComplete={() => { dispatch({ type: "COMPLETE_LESSON", id: l.id }); toast("Lesson completed! 🎉"); }}
          onAudio={() => toast("🔊 Playing audio lesson in Yoruba, Hausa, Igbo")}
        />
      ))}
    </div>
  );
}