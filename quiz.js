// ========== STEP 1 FORM ==========
if (document.getElementById("step1-form")) {
    document.getElementById("step1-form").addEventListener("submit", function(e) {
      e.preventDefault();
  
      localStorage.setItem("style", document.getElementById("style").value || "");
      localStorage.setItem("level", document.querySelector("input[name='level']:checked")?.value || "");
      localStorage.setItem("location", document.getElementById("location").value || "");
      localStorage.setItem("classSize", document.getElementById("classSize").value || "");
  
      window.location.href = "quiz-step2.html";
    });
  }
  
  // ========== STEP 2 FORM ==========
  if (document.getElementById("step2-form")) {
    document.getElementById("step2-form").addEventListener("submit", function(e) {
      e.preventDefault();
  
      localStorage.setItem("classType", document.querySelector("input[name='classType']:checked")?.value || "");
      localStorage.setItem("budget", document.getElementById("budget").value || "");
      localStorage.setItem("schedule", document.querySelector("input[name='schedule']:checked")?.value || "");
      localStorage.setItem("vibe", document.getElementById("vibe").value || "");
  
      window.location.href = "result.html";
    });
  }
  
  // ========== RESULT PAGE ==========
  if (document.getElementById("result")) {
    const style = localStorage.getItem("style");
    const level = localStorage.getItem("level");
    const location = localStorage.getItem("location");
    const classSize = localStorage.getItem("classSize");
    const classType = localStorage.getItem("classType");
    const budget = localStorage.getItem("budget");
    const schedule = localStorage.getItem("schedule");
    const vibe = localStorage.getItem("vibe");
  
    let recommendation = "";
  
    if (style === "kpop" && level === "beginner" && location === "midtown") {
      recommendation = "🎉 <strong>I Love Dance NYC</strong>: A fun, beginner-friendly K-Pop studio in Midtown.";
    } else if (style === "ballet" && classType === "private" && vibe === "training") {
      recommendation = "🩰 <strong>Steps on Broadway</strong>: Ideal for private ballet training.";
    } else if (style === "hiphop" && classSize === "large" && budget === "low") {
      recommendation = "🔥 <strong>Broadway Dance Center</strong>: Affordable hip-hop classes with a big community.";
    } else {
      recommendation = "⭐ <strong>Peridance Center</strong>: A versatile studio for all styles and levels.";
    }
  
    document.getElementById("result").innerHTML = `
      <p>${recommendation}</p>
      <h3>Your Answers:</h3>
      <ul>
        <li><strong>Style:</strong> ${style}</li>
        <li><strong>Level:</strong> ${level}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Class Size:</strong> ${classSize}</li>
        <li><strong>Class Type:</strong> ${classType}</li>
        <li><strong>Budget:</strong> ${budget}</li>
        <li><strong>Schedule:</strong> ${schedule}</li>
        <li><strong>Vibe:</strong> ${vibe}</li>
      </ul>
    `;
  }
  