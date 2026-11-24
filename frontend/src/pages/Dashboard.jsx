import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Table2,
  Percent,
  Square,
  Radical,
  Boxes,
  Calculator,
  Flame,
  Target,
  BookOpen
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  const topics = [
    {
      name: "Multiplication Tables",
      range: "1–25",
      description: "Master multiplication tables.",
      icon: <Table2 />,
      path: "/tables"
    },
    {
      name: "Fraction - Decimal - Percentage",
      range: "1–20",
      description: "Practise all conversion directions.",
      icon: <Percent />,
      path: "/conversions"
    },
    {
      name: "Squares",
      range: "1–30",
      description: "Learn square values.",
      icon: <Square />,
      path: "/squares"
    },
    {
      name: "Square Roots",
      range: "1–30",
      description: "Practise square root calculations.",
      icon: <Radical />,
      path: "/square-roots"
    },
    {
      name: "Cubes",
      range: "1–20",
      description: "Learn cube values.",
      icon: <Boxes />,
      path: "/cubes"
    },
    {
      name: "Cube Roots",
      range: "1–20",
      description: "Practise cube root calculations.",
      icon: <Calculator />,
      path: "/cube-roots"
    }
  ];

  const stats = JSON.parse(
    localStorage.getItem("mathStats") || '{"completed":0,"correct":0,"tests":0}'
  );

  const accuracy = stats.completed
    ? Math.round((stats.correct / stats.completed) * 100)
    : 0;

  return (
    <div className="app-layout">

      <aside className="sidebar">
        <h2>🧮 MathMaster</h2>

        <div className="nav-item active">Dashboard</div>

        <div className="sidebar-note">
          <p>Daily Maths Practice</p>
          <small>Learn • Practise • Improve</small>
        </div>
      </aside>

      <main className="main-content">

        <header className="topbar">
          <div>
            <h1>Daily Maths Practice</h1>
            <p>Improve your calculation skills every day.</p>
          </div>

          <div className="profile">S</div>
        </header>

        <section className="welcome">
          <div>
            <h2>Welcome Back! 👋</h2>
            <p>Ready to improve your maths skills today?</p>
          </div>
          <BookOpen size={50} />
        </section>

        <section className="stats-grid">

          <div className="stat-card">
            <BookOpen />
            <div>
              <h2>{stats.completed}</h2>
              <p>Questions Completed</p>
            </div>
          </div>

          <div className="stat-card">
            <Target />
            <div>
              <h2>{accuracy}%</h2>
              <p>Accuracy</p>
            </div>
          </div>

          <div className="stat-card">
            <Flame />
            <div>
              <h2>{stats.tests}</h2>
              <p>Tests Completed</p>
            </div>
          </div>

        </section>

        <div className="section-title">
          <h2>Choose Your Practice</h2>
          <p>Select a topic to start practising.</p>
        </div>

        <section className="topic-grid">

          {topics.map((topic, index) => (

            <div className="topic-card" key={index}>

              <div className="topic-icon">
                {topic.icon}
              </div>

              <h3>{topic.name}</h3>

              <span>{topic.range}</span>

              <p>{topic.description}</p>

              <button onClick={() => navigate(topic.path)}>
                Start Practice →
              </button>

            </div>

          ))}

        </section>

      </main>
    </div>
  );
}

export default Dashboard;