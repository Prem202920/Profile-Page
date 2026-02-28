# SpendWise — Budget Planner

A colorful, interactive personal finance dashboard built with vanilla HTML, CSS, and JavaScript. Track your income and expenses, visualize spending patterns, and set savings goals — all without any backend or installation.

---

## 📌 Project Overview

SpendWise is a browser-based budget planning application that helps users manage their personal finances with ease. It provides real-time summaries, category-based charts, monthly comparisons, and savings goal tracking — all stored locally in the browser using `localStorage`.

---

## ✨ Features

- **Add Income & Expense Entries** — Log transactions with a description, amount, category, and month
- **12 Spending Categories** — Food, Transport, Housing, Health, Education, Shopping, Salary, and more
- **Filter Transactions** — View All, Income only, or Expense only
- **Pie Chart (by Category)** — Doughnut chart showing expense breakdown per category
- **Bar Chart (Monthly View)** — Side-by-side income vs expense comparison across months
- **Savings Goal Tracker** — Add goals with target amounts and track progress with animated gradient bars
- **Live Balance** — Instantly updates; turns red when expenses exceed income
- **Indian Rupee (₹) Formatting** — Localized number formatting throughout
- **Persistent Storage** — All data saved to `localStorage`, survives page refresh

---

## 🛠️ Tools & Technologies

| Tool               | Purpose                                                     |
| ------------------ | ----------------------------------------------------------- |
| HTML5              | App structure and semantic markup                           |
| CSS3               | Gradient theme, animations, responsive grid layout          |
| Vanilla JavaScript | Transaction logic, chart rendering, localStorage management |
| Chart.js (CDN)     | Pie/doughnut chart and bar chart for data visualization     |
| Google Fonts       | Typography — Nunito (UI) + JetBrains Mono (numbers/data)    |
| localStorage API   | Client-side data persistence across sessions                |
| VS Code            | Development environment                                     |

---

## 📁 Project Structure

```
budget-planner/
│
└── budget-planner.html      # Single file — entire app lives here
```

> No build tools, no npm, no server required.

---

## 🚀 How to Run

1. Download or clone this repository
2. Open `budget-planner.html` directly in any modern browser
3. That's it — no installation needed!

> Optionally, use the **Live Server** extension in VS Code for a smoother dev experience.

---

## 🧠 How It Works

### Transaction Management

- Each transaction is stored as an object with `id`, `name`, `amount`, `category`, `month`, and `type` (income/expense)
- Transactions are saved to `localStorage` as a JSON array on every add or delete
- The filter system renders only the selected type without modifying the underlying data

### Charts

- **Pie Chart** — Groups all expense transactions by category, sums the amounts, and feeds them to Chart.js as a doughnut chart with a custom color palette
- **Bar Chart** — Collects all unique months from transactions, calculates total income and expense per month, and renders grouped bars

### Savings Goals

- Each goal stores a `name`, `target` amount, and `saved` amount
- Progress percentage is calculated as `(saved / target) × 100`, capped at 100%
- A CSS gradient progress bar animates to the correct width on render

---

## 🔮 Possible Future Improvements

- Firebase Auth + Firestore for cloud sync and multi-device support
- Export transactions to CSV or PDF
- Monthly budget limit alerts
- Recurring transaction support
- Dark mode toggle

---

## 👨‍💻 Author

Prem Patil
