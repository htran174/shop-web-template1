# 🌐 ShopWebsite Template
A modern, responsive multi-page website template built with **HTML**, **Tailwind CSS**, **Alpine.js**, and **Vite**.  
Designed for small service-based businesses (salons, spas, studios).  
All business data is excluded so the project works as a reusable template.

---

## 🚀 Features
- Clean luxury-style UI using custom Tailwind component classes  
- Fully responsive layout with smooth animations  
- Alpine.js interactions (mobile menu, reveals, small UI effects)  
- Modular HTML partials for easy reuse (header, footer)  
- Data-driven service menu system (hand nail, pedicure, wax samples)  
- Ready for deployment to any static host

---

## 🛠️ Tech Stack
- **HTML**  
- **Tailwind CSS** (with custom component layers)  
- **Alpine.js**  
- **Vite** (dev server + build)  
- **Node.js + npm** (tooling only)

---

## 📁 Folder Structure
```bash
├── dist/ # Production build output (upload to S3 or any static host)
├── node_modules/ # Dependencies
├── src/
│ ├── assets/
│ │ ├── icons/
│ │ ├── images/
│ │ └── ...
│ ├── css/
│ │ ├── fonts.css
│ │ └── tailwind.css # Tailwind + custom components
│ ├── js/
│ │ ├── biz-data.example.js # User adds real info here
│ │ ├── menu-handnail.data.js
│ │ ├── menu-pedicure.data.js
│ │ ├── menu-wax.data.js
│ │ ├── menu.js # Shared service menu builder
│ │ └── main.js # Global UI logic
│ ├── partials/
│ │ ├── header.html
│ │ ├── footer.html
│ │── contact.html
│ │── handnail.html
│ │── index.html
│ │── pedicure.html
│ │── wax.html
├── package.json
├── package-lock.json
├── postcss.config.js
├── tailwind.config.js
└── .gitignore
```

---

## 🧪 Development
```bash
npm install
npm run dev
npm run build #create a dict folder that can be upload into cloud for use
npm run preview #show what the website would look like from the dict folder
```
