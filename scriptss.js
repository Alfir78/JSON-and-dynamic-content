// JSON data for the greatest players of all time
const playerInfo = {
    "portfolio": [
      {
        "id": 1,
        "title": "Sachin Tendulkar - Cricket",
        "description": "Known as the 'God of Cricket,' Sachin Tendulkar holds almost every major batting record.",
        "image": "sachin.jpg",
        "colors": ["#0077cc", "#ffcc00", "#33cc99"],
        "dimensions": { "width": 800, "height": 600 },
        "creation_date": "2012-12-23",
        "stats": {
          "runs": 34357,
          "hundreds": 100,
          "fifties": 164
        }
      },
      {
        "id": 2,
        "title": "Michael Jordan - Basketball",
        "description": "Considered the GOAT, Michael Jordan revolutionized basketball with his skill and charisma.",
        "image": "Jordan.jpg",
        "colors": ["#ff0000", "#000000", "#ffffff"],
        "dimensions": { "width": 900, "height": 700 },
        "creation_date": "1998-06-14",
        "stats": {
          "points": 32292,
          "championships": 6,
          "MVPs": 5
        }
      },
      {
        "id": 3,
        "title": "Lionel Messi - Soccer",
        "description": "The Argentine genius has dazzled the world with his vision, technique, and skill.",
        "image": "Leo.jpg",
        "colors": ["#1e90ff", "#ffd700", "#ff4500"],
        "dimensions": { "width": 1000, "height": 800 },
        "creation_date": "2023-08-27",
        "stats": {
          "goals": 819,
          "assists": 356,
          "Ballon_dOrs": 8
        }
      },
      {
        "id": 4,
        "title": "Babe Ruth - Baseball",
        "description": "The Sultan of Swat dominated the game like no one else in his era.",
        "image": "Ruth.jpg",
        "colors": ["#0000ff", "#ffffff", "#ff0000"],
        "dimensions": { "width": 950, "height": 700 },
        "creation_date": "1935-05-30",
        "stats": {
          "home_runs": 714,
          "RBIs": 2214,
          "batting_average": ".342"
        }
      }
    ]
  };
  
  // Function to generate portfolio items dynamically
function displayPortfolio() {
    const gallery = document.getElementById('portfolio-gallery');
  
    console.log("Player Info Data:", playerInfo);
  
    for (let i = 0; i < playerInfo.portfolio.length; i++) {
      const item = playerInfo.portfolio[i];
  
      console.log(`Processing item ${i + 1}:`, item);
  
      const itemElement = document.createElement('div');
      itemElement.classList.add('portfolio-item');
  
      
      const imgElement = document.createElement('img');
      imgElement.src = item.image;
      imgElement.alt = item.title;
  
      const titleElement = document.createElement('h3');
      titleElement.textContent = item.title;
  
      const descriptionElement = document.createElement('p');
      descriptionElement.textContent = item.description;
  
      const statsElement = document.createElement('div');
      statsElement.classList.add('stats');
  
      for (const [key, value] of Object.entries(item.stats)) {
        const stat = document.createElement('p');
        stat.innerHTML = `<strong>${key.replace('_', ' ')}:</strong> ${value}`;
        statsElement.appendChild(stat);
      }
  
      // Create color swatch
      const colorSwatchElement = document.createElement('div');
      colorSwatchElement.classList.add('color-swatch');
  
      for (const color of item.colors) {
        const colorDiv = document.createElement('div');
        colorDiv.style.backgroundColor = color;
        colorDiv.style.width = "20px";
        colorDiv.style.height = "20px";
        colorDiv.style.marginRight = "5px";
        colorDiv.style.display = "inline-block";
        colorSwatchElement.appendChild(colorDiv);
      }
  
      // Append all elements to the item container
      itemElement.appendChild(imgElement);
      itemElement.appendChild(titleElement);
      itemElement.appendChild(descriptionElement);
      itemElement.appendChild(statsElement);
      itemElement.appendChild(colorSwatchElement);
  
      // Append the item to the gallery
      gallery.appendChild(itemElement);
  
      // Log the generated HTML for this item
      console.log(`Generated HTML for item ${i + 1}:`, itemElement.outerHTML);
    }
  
    console.log("All items have been processed and displayed.");
  }
  
  window.onload = displayPortfolio;
  
