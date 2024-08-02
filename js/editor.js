$(document).ready(function() {
  const templates = [
    {
      html: 
`<div class="example">
  <h2>Example 1 Heading</h2>
  <p>This is example 1 paragraph.</p>
</div>`,
      css: 
`.example {
  background-color: #282c34;
  color: white;
  padding: 20px;
  border-radius: 5px;
}

.example h2 {
  color: #61dafb;
}`,
      js: 
`alert('Example 1 JavaScript loaded');`
    },
    {
      html: 
`<div class="example">
  <img src="https://via.placeholder.com/150" alt="Example Image">
  <p>This is an image example.</p>
</div>`,
      css: 
`.example {
  text-align: center;
  padding: 20px;
}

.example img {
  max-width: 100%;
  border-radius: 10px;
}`,
      js: 
`alert('Image example JavaScript loaded');`
    },
    {
      html: 
`<div class="example">
  <h1>Main Header</h1>
  <h2>Sub Header</h2>
  <h3>Sub Sub Header</h3>
</div>`,
      css: 
`.example {
  padding: 20px;
}

.example h1 {
  color: #ff4500;
}

.example h2 {
  color: #ffa500;
}

.example h3 {
  color: #ff6347;
}`,
      js: 
`alert('Header example JavaScript loaded');`
    },
    {
      html: 
`<div class="example">
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Services</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</div>`,
      css: 
`.example nav {
  background-color: #333;
  padding: 10px;
}

.example nav ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-around;
}

.example nav ul li {
  padding: 10px;
}

.example nav ul li a {
  color: white;
  text-decoration: none;
}

.example nav ul li a:hover {
  color: #ff6347;
}`,
      js: 
`alert('Navigation example JavaScript loaded');`
    },
    {
      html: 
`<div class="example">
  <footer>
    <p>&copy; 2024 My Website. All rights reserved.</p>
  </footer>`,
      css: 
`.example footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  bottom: 0;
}`,
      js: 
`alert('Footer example JavaScript loaded');`
    },    
    {
      html: 
      `<h1 class="head">Header 1</h1>
      <h2 class="head">Header 2</h2>
      <h3 class="head">Header 3</h3>
      <h4 class="head">Header 4</h4>`,
      css: 
    `body {
        background-color: #000;
        color: #fff;
        font-family: 'Orbitron', sans-serif;
        margin: 0;
        padding: 20px;
    }
    
    .head {
        text-align: center;
        text-transform: uppercase;
        color: #0ff;
        text-shadow: 0 0 10px #0ff, 0 0 20px #0ff, 0 0 30px #0ff;
        margin: 20px 0;
        cursor: pointer;
        transition: color 0.3s ease-in-out, text-shadow 0.3s ease-in-out;
    }
    
    .head:hover {
        color: #fff;
        text-shadow: 0 0 20px #fff, 0 0 40px #fff, 0 0 60px #fff;
    }`,
      js: 

    `alert('EventListener example JavaScript loaded');
     document.addEventListener('DOMContentLoaded', function() {
        const headers = document.querySelectorAll('.head');
    
        headers.forEach(header => {
            header.addEventListener('click', function() {
                const originalText = this.textContent;
                this.textContent = \`Clicked: \${originalText}\`;
                
                setTimeout(() => {
                    this.textContent = originalText;
                }, 2000);
            });
        });
    });`
    }
    
  ];

  let currentTemplate = 0;

  function updatePreview() {
    document.getElementById("preview").contentWindow.document.open();
    document.getElementById("preview").contentWindow.document.write(
      html.value + "<style>" + css.value + "<\/style><script>" + js.value + "<\/script>"
    );
    document.getElementById("preview").contentWindow.document.close();
  }

  onload = document.onkeyup = updatePreview;

  $("textarea").keydown(function(event) {
    if (event.keyCode === 9) {
      var start = this.selectionStart;
      var end = this.selectionEnd;
      var $this = $(this);
      var value = $this.val();
      $this.val(value.substring(0, start) + "  " + value.substring(end));
      this.selectionStart = this.selectionEnd = start + 1;
      event.preventDefault();
    }
  });

  $("textarea").keydown(function() {
    sessionStorage[$(this).attr("id")] = $(this).val();
  });
  $("#html").html(sessionStorage["html"]);
  $("#css").html(sessionStorage["css"]);
  $("#js").html(sessionStorage["js"]);

  function init() {
    if (sessionStorage["html"]) {
      $("#html").val(sessionStorage["html"]);
    }
    if (sessionStorage["css"]) {
      $("#css").val(sessionStorage["css"]);
    }
    if (sessionStorage["js"]) {
      $("#js").val(sessionStorage["js"]);
    }
  }

  $(".clearLink").click(clearAll);

  function clearAll() {
    alert('Clear is clicked ');
    document.getElementById("html").value = "";
    document.getElementById("css").value = "";
    document.getElementById("js").value = "";
    sessionStorage.clear();
    updatePreview(); // Clear the preview as well
  }

  $(".exampleButton").click(loadExample);

  function loadExample() {
    currentTemplate = (currentTemplate + 1) % templates.length;
    document.getElementById("html").value = templates[currentTemplate].html;
    document.getElementById("css").value = templates[currentTemplate].css;
    document.getElementById("js").value = templates[currentTemplate].js;
    sessionStorage.setItem("html", templates[currentTemplate].html);
    sessionStorage.setItem("css", templates[currentTemplate].css);
    sessionStorage.setItem("js", templates[currentTemplate].js);
    updatePreview();
  }

  init();
});
