const pages = [
    { name: "Home", url: "index.html" },
    { name: "Resume/CV", url: "resume.html" },
    { name: "Projects", url: "projects.html" },
    { name: "Interests", url: "interests.html" },
    { name: "Fun", url: "fun.html" }
  ];
  
  const navDiv = document.getElementById('navButtons');
  if (navDiv) {
    const currentPage = window.location.pathname.split("/").pop();
  
    pages.forEach(page => {
      const btn = document.createElement('a');
      btn.href = page.url;
      btn.className = 'btn btn-outline-primary text-start';
      btn.innerText = page.name;
  
      if (page.url === currentPage) {
        btn.classList.add('active');
      }
  
      navDiv.appendChild(btn);
    });
  }
  