import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { getSubmissions, clearSubmissions, SubmissionEntry } from "@/lib/submissions";

const ADMIN_USER = "shreyas";
const ADMIN_PASS = "1234567890";

const AdminPanel = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submissions, setSubmissions] = useState<SubmissionEntry[]>([]);

  const handleLogin = () => {
    if (username === ADMIN_USER && password === ADMIN_PASS) {
      setLoggedIn(true);
      setShowLogin(false);
      setError("");
      setSubmissions(getSubmissions());
    } else {
      setError("Invalid credentials! 😤");
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    setUsername("");
    setPassword("");
  };

  const handleClear = () => {
    if (confirm("Clear all submissions?")) {
      clearSubmissions();
      setSubmissions([]);
    }
  };

  if (loggedIn) {
    return (
      <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm overflow-auto">
        <div className="max-w-3xl mx-auto p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-romantic text-3xl font-bold text-foreground">
              💖 Admin Dashboard
            </h1>
            <div className="flex gap-3">
              <button onClick={() => setSubmissions(getSubmissions())} className="btn-heart text-sm px-4 py-2">
                🔄 Refresh
              </button>
              <button onClick={handleClear} className="btn-heart text-sm px-4 py-2" style={{ background: "hsl(0 60% 50%)" }}>
                🗑️ Clear
              </button>
              <button onClick={handleLogout} className="btn-heart text-sm px-4 py-2" style={{ background: "hsl(0 0% 40%)" }}>
                Logout
              </button>
            </div>
          </div>

          {submissions.length === 0 ? (
            <div className="glass-card p-10 text-center">
              <p className="text-muted-foreground text-lg">No submissions yet 💌</p>
            </div>
          ) : (
            <div className="space-y-4">
              {submissions.map((s, i) => (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-romantic text-xl font-bold text-foreground">
                      #{i + 1}
                    </span>
                    <span className="text-muted-foreground text-sm">{s.timestamp}</span>
                  </div>
                  <div className="grid gap-2 text-sm">
                    <div>
                      <span className="text-muted-foreground">Name entered:</span>{" "}
                      <span className="text-foreground font-semibold">{s.name || "—"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Love choice:</span>{" "}
                      <span className="text-foreground font-semibold">{s.loveChoice || "—"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Love message:</span>{" "}
                      <span className="text-foreground font-semibold">{s.loveMessage || "—"}</span>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Reaction:</span>{" "}
                      <span className="text-foreground font-semibold">{s.reactionChoice || "—"}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Admin button - top right */}
      <button
        onClick={() => setShowLogin(!showLogin)}
        className="fixed top-4 right-4 z-50 w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground/50 hover:text-foreground transition-colors text-sm"
        title="Admin"
      >
        🔐
      </button>

      {/* Login modal */}
      <AnimatePresence>
        {showLogin && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/30 backdrop-blur-sm p-4"
            onClick={() => setShowLogin(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card p-8 w-full max-w-sm"
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-romantic text-2xl font-bold text-foreground text-center mb-6">
                🔐 Admin Login
              </h2>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border text-foreground mb-3 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60"
              />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-xl bg-background/60 border border-border text-foreground mb-4 focus:outline-none focus:ring-2 focus:ring-primary/50 placeholder:text-muted-foreground/60"
              />
              {error && (
                <p className="text-primary text-sm text-center mb-3">{error}</p>
              )}
              <button onClick={handleLogin} className="btn-heart w-full py-3">
                Login
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AdminPanel;
