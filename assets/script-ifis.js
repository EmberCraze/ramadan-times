// Hardcoded prayer times from IFIS (Islamiska Förbundet i Sverige)
// City: Strängnäs, SE — Date range: Feb 19 – Mar 20, 2026 (Ramadan 1447)
// Source: https://www.islamiskaforbundet.se/wp-content/plugins/bonetider/Bonetider_Widget.php

const ifisPrayerData = [
  // February 19–28
  { date: "19/2", day: 1,  fajr: "05:01", shuruq: "07:11", duhr: "12:11", asr: "14:21", maghreb: "17:01", isha: "18:55", isFriday: false },
  { date: "20/2", day: 2,  fajr: "04:58", shuruq: "07:08", duhr: "12:11", asr: "14:23", maghreb: "17:03", isha: "18:57", isFriday: true  },
  { date: "21/2", day: 3,  fajr: "04:56", shuruq: "07:06", duhr: "12:11", asr: "14:24", maghreb: "17:06", isha: "19:00", isFriday: false },
  { date: "22/2", day: 4,  fajr: "04:53", shuruq: "07:03", duhr: "12:10", asr: "14:26", maghreb: "17:08", isha: "19:02", isFriday: false },
  { date: "23/2", day: 5,  fajr: "04:50", shuruq: "07:00", duhr: "12:10", asr: "14:28", maghreb: "17:11", isha: "19:04", isFriday: false },
  { date: "24/2", day: 6,  fajr: "04:48", shuruq: "06:57", duhr: "12:10", asr: "14:30", maghreb: "17:13", isha: "19:07", isFriday: false },
  { date: "25/2", day: 7,  fajr: "04:45", shuruq: "06:54", duhr: "12:10", asr: "14:32", maghreb: "17:16", isha: "19:09", isFriday: false },
  { date: "26/2", day: 8,  fajr: "04:42", shuruq: "06:52", duhr: "12:10", asr: "14:33", maghreb: "17:18", isha: "19:11", isFriday: false },
  { date: "27/2", day: 9,  fajr: "04:40", shuruq: "06:49", duhr: "12:10", asr: "14:35", maghreb: "17:21", isha: "19:14", isFriday: true  },
  { date: "28/2", day: 10, fajr: "04:37", shuruq: "06:46", duhr: "12:10", asr: "14:37", maghreb: "17:23", isha: "19:16", isFriday: false },
  // March 1–20
  { date: "1/3",  day: 11, fajr: "04:34", shuruq: "06:43", duhr: "12:09", asr: "14:39", maghreb: "17:26", isha: "19:19", isFriday: false },
  { date: "2/3",  day: 12, fajr: "04:31", shuruq: "06:40", duhr: "12:09", asr: "14:40", maghreb: "17:28", isha: "19:21", isFriday: false },
  { date: "3/3",  day: 13, fajr: "04:28", shuruq: "06:37", duhr: "12:09", asr: "14:42", maghreb: "17:30", isha: "19:24", isFriday: false },
  { date: "4/3",  day: 14, fajr: "04:25", shuruq: "06:35", duhr: "12:09", asr: "14:44", maghreb: "17:33", isha: "19:26", isFriday: false },
  { date: "5/3",  day: 15, fajr: "04:22", shuruq: "06:32", duhr: "12:09", asr: "14:46", maghreb: "17:35", isha: "19:29", isFriday: false },
  { date: "6/3",  day: 16, fajr: "04:19", shuruq: "06:29", duhr: "12:08", asr: "14:47", maghreb: "17:38", isha: "19:31", isFriday: true  },
  { date: "7/3",  day: 17, fajr: "04:16", shuruq: "06:26", duhr: "12:08", asr: "14:49", maghreb: "17:40", isha: "19:34", isFriday: false },
  { date: "8/3",  day: 18, fajr: "04:13", shuruq: "06:23", duhr: "12:08", asr: "14:51", maghreb: "17:43", isha: "19:36", isFriday: false },
  { date: "9/3",  day: 19, fajr: "04:10", shuruq: "06:20", duhr: "12:08", asr: "14:52", maghreb: "17:45", isha: "19:39", isFriday: false },
  { date: "10/3", day: 20, fajr: "04:06", shuruq: "06:17", duhr: "12:07", asr: "14:54", maghreb: "17:48", isha: "19:41", isFriday: false },
  { date: "11/3", day: 21, fajr: "04:03", shuruq: "06:14", duhr: "12:07", asr: "14:56", maghreb: "17:50", isha: "19:44", isFriday: false },
  { date: "12/3", day: 22, fajr: "04:00", shuruq: "06:11", duhr: "12:07", asr: "14:57", maghreb: "17:52", isha: "19:47", isFriday: false },
  { date: "13/3", day: 23, fajr: "03:57", shuruq: "06:08", duhr: "12:07", asr: "14:59", maghreb: "17:55", isha: "19:49", isFriday: true  },
  { date: "14/3", day: 24, fajr: "03:53", shuruq: "06:05", duhr: "12:06", asr: "15:00", maghreb: "17:57", isha: "19:52", isFriday: false },
  { date: "15/3", day: 25, fajr: "03:50", shuruq: "06:02", duhr: "12:06", asr: "15:02", maghreb: "18:00", isha: "19:55", isFriday: false },
  { date: "16/3", day: 26, fajr: "03:46", shuruq: "05:59", duhr: "12:06", asr: "15:04", maghreb: "18:02", isha: "19:57", isFriday: false },
  { date: "17/3", day: 27, fajr: "03:43", shuruq: "05:56", duhr: "12:05", asr: "15:05", maghreb: "18:04", isha: "20:00", isFriday: false },
  { date: "18/3", day: 28, fajr: "03:39", shuruq: "05:54", duhr: "12:05", asr: "15:07", maghreb: "18:07", isha: "20:03", isFriday: false },
  { date: "19/3", day: 29, fajr: "03:36", shuruq: "05:51", duhr: "12:05", asr: "15:08", maghreb: "18:09", isha: "20:06", isFriday: false },
  { date: "20/3", day: 30, fajr: "03:32", shuruq: "05:48", duhr: "12:05", asr: "15:10", maghreb: "18:11", isha: "20:09", isFriday: true  },
];

function createPrayerTable(data) {
  const table = document.createElement("table");
  table.className = "prayer-table";

  // Create header
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");
  ["Datum", "Dag", "Fajr", "Shuruq", "Duhr", "Asr", "Maghreb", "Isha"].forEach(
    (text) => {
      const th = document.createElement("th");
      th.className = "prayer-table__cell prayer-table__header";
      th.textContent = text;
      headerRow.appendChild(th);
    }
  );
  thead.appendChild(headerRow);
  table.appendChild(thead);

  // Create body
  const tbody = document.createElement("tbody");
  data.forEach((day) => {
    const row = document.createElement("tr");

    // Date cell
    const dateCell = document.createElement("td");
    dateCell.className = "prayer-table__cell";
    dateCell.textContent = day.date;
    row.appendChild(dateCell);

    // Day number cell (Hijri day)
    const dayCell = document.createElement("td");
    dayCell.className = `prayer-table__cell prayer-table__cell--${
      day.isFriday ? "special" : "day"
    }`;
    dayCell.textContent = day.day;
    row.appendChild(dayCell);

    // Prayer time cells
    ["fajr", "shuruq", "duhr", "asr", "maghreb", "isha"].forEach((prayer) => {
      const cell = document.createElement("td");
      cell.className = `prayer-table__cell${
        prayer === "asr"
          ? " prayer-table__cell--asr"
          : prayer === "maghreb"
          ? " prayer-table__cell--maghreb"
          : ""
      }`;
      cell.textContent = day[prayer];
      row.appendChild(cell);
    });

    tbody.appendChild(row);
  });
  table.appendChild(tbody);

  return table;
}

// Initialize tables when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  const tableContainer = document.querySelector(".table-grid");

  // Split into two halves for the tables
  const midPoint = Math.ceil(ifisPrayerData.length / 2);
  const firstHalf = ifisPrayerData.slice(0, midPoint);
  const secondHalf = ifisPrayerData.slice(midPoint);

  // Clear any existing content
  tableContainer.textContent = "";

  // Create and append first half table
  const firstHalfDiv = document.createElement("div");
  firstHalfDiv.className = "table-grid__half";
  firstHalfDiv.appendChild(createPrayerTable(firstHalf));
  tableContainer.appendChild(firstHalfDiv);

  // Create and append second half table
  const secondHalfDiv = document.createElement("div");
  secondHalfDiv.className = "table-grid__half";
  secondHalfDiv.appendChild(createPrayerTable(secondHalf));
  tableContainer.appendChild(secondHalfDiv);
});
