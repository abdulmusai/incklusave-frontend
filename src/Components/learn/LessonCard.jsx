import Btn from '../ui/Button';
import Card from '../ui/Card'; 
import  T  from "../ui/theme";
import LESSON_CONTENT from'./LessonContent';


export default function LessonCard({ lesson, isOpen, onToggle, onComplete, onAudio }) {
  return (
    <Card
      style={{
        marginBottom: 12,
        cursor: "pointer",
        border: `1px solid ${isOpen ? T.green + "66" : T.muted + "55"}`,
      }}
      onClick={onToggle}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <div
          style={{
            width: 46, height: 46, borderRadius: 12,
            background: lesson.done ? T.green + "22" : T.muted + "44",
            display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22,
          }}
        >
          {lesson.icon}
        </div>
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 700 }}>{lesson.title}</div>
          <div style={{ color: T.sub, fontSize: 12, marginTop: 3 }}>
            {lesson.done ? "✅ Completed" : "Tap to learn"}
          </div>
        </div>
        <div style={{ color: T.sub }}>{isOpen ? "▲" : "▼"}</div>
      </div>

      {isOpen && (
        <div style={{ marginTop: 14, paddingTop: 14, borderTop: `1px solid ${T.muted}33` }}>
          <p style={{ color: T.text, fontSize: 13, lineHeight: 1.7, margin: 0 }}>
            {LESSON_CONTENT[lesson.id]?.body}
          </p>
          <div style={{ display: "flex", gap: 10, marginTop: 14 }}>
            {LESSON_CONTENT[lesson.id]?.audio && (
              <Btn
                onClick={(e) => { e.stopPropagation(); onAudio(); }}
                variant="ghost" style={{ flex: 1, fontSize: 13 }}
              >
                🔊 Listen in local language
              </Btn>
            )}
            {!lesson.done && (
              <Btn
                onClick={(e) => { e.stopPropagation(); onComplete(); }}
                style={{ flex: 1, fontSize: 13 }}
              >
                Mark Complete
              </Btn>
            )}
          </div>
        </div>
      )}
    </Card>
  );
}
