
document.addEventListener("DOMContentLoaded", () => {

  const splashScreen = document.getElementById("splashScreen");
  const loginScreen = document.getElementById("loginScreen");
  const panda = document.getElementById("pandaImg");
  const loginForm = document.getElementById("loginForm");

  if (panda) {
    panda.addEventListener("click", () => {
      panda.style.transform = "scale(1.1) translateY(-10px)";
      setTimeout(() => {
        panda.style.transform = "scale(1) translateY(0)";
      }, 300);
    });
  }


  setTimeout(() => {

    if (splashScreen) {
      splashScreen.classList.add("fade-out");
    }


    setTimeout(() => {
      if (splashScreen) splashScreen.style.display = "none";
      if (loginScreen) {
        loginScreen.classList.remove("hidden");
      }
    }, 500);
  }, 2500);


  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const btn = document.getElementById("loginBtn");
      const originalText = btn.innerText;
      btn.innerText = "Logging in...";

      setTimeout(() => {
        btn.innerText = "Success!";
        setTimeout(() => {
          btn.innerText = originalText;

          loginScreen.classList.add("hidden");
          setTimeout(() => {
            loginScreen.style.display = "none";
            const dashboardScreen = document.getElementById("dashboardScreen");
            dashboardScreen.style.display = "flex";
            requestAnimationFrame(() => {
              dashboardScreen.classList.remove("hidden");
            });
          }, 600);
        }, 800);
      }, 1000);
    });
  }

  const signupForm = document.getElementById("signupForm");
  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const btn = document.getElementById("signupBtn");
      const originalText = btn.innerText;
      btn.innerText = "Signing up...";

      setTimeout(() => {
        btn.innerText = "Welcome!";
        setTimeout(() => {
          btn.innerText = originalText;
          // Go to dashboard
          signupScreen.classList.add("hidden");
          setTimeout(() => {
            signupScreen.style.display = "none";
            const dashboardScreen = document.getElementById("dashboardScreen");
            dashboardScreen.style.display = "flex";
            requestAnimationFrame(() => {
              dashboardScreen.classList.remove("hidden");
            });
          }, 600);
        }, 800);
      }, 1000);
    });
  }

  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const dashboardScreen = document.getElementById("dashboardScreen");
      dashboardScreen.classList.add("hidden");
      setTimeout(() => {
        dashboardScreen.style.display = "none";
        loginScreen.style.display = "flex";
        requestAnimationFrame(() => {
          loginScreen.classList.remove("hidden");
        });
      }, 600);
    });
  }


  const toSignupLink = document.getElementById("toSignupLink");
  const toLoginLink = document.getElementById("toLoginLink");
  const signupScreen = document.getElementById("signupScreen");

  if (toSignupLink && toLoginLink && signupScreen && loginScreen) {
    toSignupLink.addEventListener("click", (e) => {
      e.preventDefault();
      loginScreen.classList.add("hidden");
      setTimeout(() => {
        loginScreen.style.display = "none";
        signupScreen.style.display = "flex";
        requestAnimationFrame(() => {
          signupScreen.classList.remove("hidden");
        });
      }, 600);
    });

    toLoginLink.addEventListener("click", (e) => {
      e.preventDefault();
      signupScreen.classList.add("hidden");
      setTimeout(() => {
        signupScreen.style.display = "none";
        loginScreen.style.display = "flex";
        requestAnimationFrame(() => {
          loginScreen.classList.remove("hidden");
        });
      }, 600);
    });
  }
});
