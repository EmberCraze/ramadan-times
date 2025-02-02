const prayerData = [
  // First half
  [
    {
      date: "11/3",
      day: 1,
      fajr: "04:02",
      shuruq: "06:13",
      duhr: "12:07",
      asr: "14:56",
      maghreb: "17:51",
      isha: "19:45",
    },
    {
      date: "12/3",
      day: 2,
      fajr: "03:56",
      shuruq: "06:10",
      duhr: "12:07",
      asr: "14:58",
      maghreb: "17:53",
      isha: "19:48",
    },
    {
      date: "13/3",
      day: 3,
      fajr: "03:55",
      shuruq: "06:07",
      duhr: "12:06",
      asr: "15:00",
      maghreb: "17:56",
      isha: "19:51",
    },
    {
      date: "14/3",
      day: 4,
      fajr: "03:52",
      shuruq: "06:04",
      duhr: "12:06",
      asr: "15:01",
      maghreb: "17:58",
      isha: "19:53",
    },
    {
      date: "15/3",
      day: 5,
      fajr: "03:48",
      shuruq: "06:01",
      duhr: "12:06",
      asr: "15:03",
      maghreb: "18:01",
      isha: "19:56",
      special: true,
    },
    {
      date: "16/3",
      day: 6,
      fajr: "03:45",
      shuruq: "05:58",
      duhr: "12:06",
      asr: "15:04",
      maghreb: "18:03",
      isha: "19:59",
    },
    {
      date: "17/3",
      day: 7,
      fajr: "03:41",
      shuruq: "05:55",
      duhr: "12:05",
      asr: "15:06",
      maghreb: "18:05",
      isha: "20:02",
    },
    {
      date: "18/3",
      day: 8,
      fajr: "03:38",
      shuruq: "05:52",
      duhr: "12:05",
      asr: "15:07",
      maghreb: "18:08",
      isha: "20:04",
    },
    {
      date: "19/3",
      day: 9,
      fajr: "03:34",
      shuruq: "05:49",
      duhr: "12:05",
      asr: "15:09",
      maghreb: "18:10",
      isha: "20:07",
    },
    {
      date: "20/3",
      day: 10,
      fajr: "03:30",
      shuruq: "05:46",
      duhr: "12:04",
      asr: "15:10",
      maghreb: "18:13",
      isha: "20:10",
    },
    {
      date: "21/3",
      day: 11,
      fajr: "03:27",
      shuruq: "05:43",
      duhr: "12:04",
      asr: "15:12",
      maghreb: "18:15",
      isha: "20:13",
    },
    {
      date: "22/3",
      day: 12,
      fajr: "03:23",
      shuruq: "05:40",
      duhr: "12:04",
      asr: "15:13",
      maghreb: "18:17",
      isha: "20:16",
      special: true,
    },
    {
      date: "23/3",
      day: 13,
      fajr: "03:19",
      shuruq: "05:37",
      duhr: "12:03",
      asr: "15:15",
      maghreb: "18:20",
      isha: "20:19",
    },
    {
      date: "24/3",
      day: 14,
      fajr: "03:15",
      shuruq: "05:34",
      duhr: "12:03",
      asr: "15:16",
      maghreb: "18:22",
      isha: "20:22",
    },
    {
      date: "25/3",
      day: 15,
      fajr: "03:12",
      shuruq: "05:31",
      duhr: "12:03",
      asr: "15:18",
      maghreb: "18:24",
      isha: "20:25",
    },
  ],
  // Second half
  [
    {
      date: "26/3",
      day: 16,
      fajr: "03:08",
      shuruq: "05:28",
      duhr: "12:03",
      asr: "15:19",
      maghreb: "18:27",
      isha: "20:28",
    },
    {
      date: "27/3",
      day: 17,
      fajr: "03:04",
      shuruq: "05:25",
      duhr: "12:02",
      asr: "15:21",
      maghreb: "18:29",
      isha: "20:31",
    },
    {
      date: "28/3",
      day: 18,
      fajr: "03:00",
      shuruq: "05:22",
      duhr: "12:02",
      asr: "15:22",
      maghreb: "18:32",
      isha: "20:34",
    },
    {
      date: "29/3",
      day: 19,
      fajr: "02:56",
      shuruq: "05:19",
      duhr: "12:02",
      asr: "15:23",
      maghreb: "18:34",
      isha: "20:37",
      special: true,
    },
    {
      date: "30/3",
      day: 20,
      fajr: "02:51",
      shuruq: "05:16",
      duhr: "12:01",
      asr: "15:25",
      maghreb: "18:36",
      isha: "20:41",
    },
    {
      date: "31/3",
      day: 21,
      fajr: "03:47",
      shuruq: "06:14",
      duhr: "13:01",
      asr: "16:26",
      maghreb: "19:39",
      isha: "21:44",
    },
    {
      date: "1/4",
      day: 22,
      fajr: "03:43",
      shuruq: "06:11",
      duhr: "13:01",
      asr: "16:28",
      maghreb: "19:41",
      isha: "21:47",
    },
    {
      date: "2/4",
      day: 23,
      fajr: "03:38",
      shuruq: "06:08",
      duhr: "13:00",
      asr: "16:29",
      maghreb: "19:43",
      isha: "21:50",
    },
    {
      date: "3/4",
      day: 24,
      fajr: "03:38",
      shuruq: "06:05",
      duhr: "13:00",
      asr: "16:30",
      maghreb: "19:46",
      isha: "21:51",
    },
    {
      date: "4/4",
      day: 25,
      fajr: "03:37",
      shuruq: "06:02",
      duhr: "13:00",
      asr: "16:32",
      maghreb: "19:48",
      isha: "21:52",
    },
    {
      date: "5/4",
      day: 26,
      fajr: "03:36",
      shuruq: "05:59",
      duhr: "13:00",
      asr: "16:33",
      maghreb: "19:51",
      isha: "21:53",
      special: true,
    },
    {
      date: "6/4",
      day: 27,
      fajr: "03:35",
      shuruq: "05:56",
      duhr: "12:59",
      asr: "16:34",
      maghreb: "19:53",
      isha: "21:54",
    },
    {
      date: "7/4",
      day: 28,
      fajr: "03:34",
      shuruq: "05:53",
      duhr: "12:59",
      asr: "16:35",
      maghreb: "19:55",
      isha: "21:55",
    },
    {
      date: "8/4",
      day: 29,
      fajr: "03:33",
      shuruq: "05:50",
      duhr: "12:59",
      asr: "16:37",
      maghreb: "19:58",
      isha: "21:56",
    },
    {
      date: "9/4",
      day: 30,
      fajr: "03:32",
      shuruq: "05:47",
      duhr: "12:59",
      asr: "16:38",
      maghreb: "20:00",
      isha: "21:57",
    },
  ],
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

    // Day number cell
    const dayCell = document.createElement("td");
    dayCell.className = `prayer-table__cell prayer-table__cell--${
      day.special ? "special" : "day"
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

  // Create and append first half table
  const firstHalfDiv = document.createElement("div");
  firstHalfDiv.className = "table-grid__half";
  firstHalfDiv.appendChild(createPrayerTable(prayerData[0]));
  tableContainer.appendChild(firstHalfDiv);

  // Create and append second half table
  const secondHalfDiv = document.createElement("div");
  secondHalfDiv.className = "table-grid__half";
  secondHalfDiv.appendChild(createPrayerTable(prayerData[1]));
  tableContainer.appendChild(secondHalfDiv);
});
