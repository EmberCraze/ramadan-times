// Function to fetch prayer times from the API
async function fetchRamadanTimes(
  year = 1446,
  city = "Strangnas",
  country = "Sweden"
) {
  try {
    // Ramadan is the 9th month in the Hijri calendar
    const month = 9;
    const url = `https://api.aladhan.com/v1/hijriCalendarByCity/${year}/${month}?city=${encodeURIComponent(
      city
    )}&country=${encodeURIComponent(country)}&method=3`;

    console.log("Fetching prayer times from:", url);

    const response = await fetch(url);
    console.log("API Response status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("API Error response:", errorText);
      throw new Error(
        `Failed to fetch prayer times: ${response.status} ${response.statusText}`
      );
    }

    const data = await response.json();

    if (!data.data || !Array.isArray(data.data)) {
      console.error("Invalid data format:", data);
      throw new Error("Invalid data format received");
    }

    // Transform API data into our format
    let transformedData = data.data.map((day) => {
      try {
        // Helper function to clean time string (remove timezone)
        const cleanTime = (timeStr) => timeStr.split(" ")[0];

        // Check if this day is Friday
        const isFriday = day.date.gregorian.weekday.en === "Friday";

        const dayData = {
          date: `${parseInt(day.date.gregorian.day)}/${
            day.date.gregorian.month.number
          }`,
          day: parseInt(day.date.hijri.day),
          fajr: cleanTime(day.timings.Fajr),
          shuruq: cleanTime(day.timings.Sunrise),
          duhr: cleanTime(day.timings.Dhuhr),
          asr: cleanTime(day.timings.Asr),
          maghreb: cleanTime(day.timings.Maghrib),
          isha: cleanTime(day.timings.Isha),
          isFriday: isFriday,
        };

        // Convert 24-hour format to standard time format
        const formatTime = (timeStr) => {
          const [hours, minutes] = timeStr.split(":");
          return `${hours.padStart(2, "0")}:${minutes}`;
        };

        // Format all times
        dayData.fajr = formatTime(dayData.fajr);
        dayData.shuruq = formatTime(dayData.shuruq);
        dayData.duhr = formatTime(dayData.duhr);
        dayData.asr = formatTime(dayData.asr);
        dayData.maghreb = formatTime(dayData.maghreb);
        dayData.isha = formatTime(dayData.isha);

        return dayData;
      } catch (err) {
        console.error(
          "Error transforming day data:",
          err,
          "Day data:",
          JSON.stringify(day, null, 2)
        );
        throw err;
      }
    });

    // If we only have 29 days, fetch the first day of next month
    if (transformedData.length === 29) {
      console.log("Fetching additional day from next month...");
      const nextMonthUrl = `https://api.aladhan.com/v1/hijriCalendarByCity/${year}/${
        month + 1
      }?city=${encodeURIComponent(city)}&country=${encodeURIComponent(
        country
      )}&method=3`;

      const nextMonthResponse = await fetch(nextMonthUrl);
      if (nextMonthResponse.ok) {
        const nextMonthData = await nextMonthResponse.json();
        if (
          nextMonthData.data &&
          Array.isArray(nextMonthData.data) &&
          nextMonthData.data.length > 0
        ) {
          // Transform the first day of next month
          const additionalDay = nextMonthData.data[0];
          const cleanTime = (timeStr) => timeStr.split(" ")[0];
          const isFriday = additionalDay.date.gregorian.weekday.en === "Friday";

          const additionalDayData = {
            date: `${parseInt(additionalDay.date.gregorian.day)}/${
              additionalDay.date.gregorian.month.number
            }`,
            day: parseInt(additionalDay.date.hijri.day),
            fajr: cleanTime(additionalDay.timings.Fajr),
            shuruq: cleanTime(additionalDay.timings.Sunrise),
            duhr: cleanTime(additionalDay.timings.Dhuhr),
            asr: cleanTime(additionalDay.timings.Asr),
            maghreb: cleanTime(additionalDay.timings.Maghrib),
            isha: cleanTime(additionalDay.timings.Isha),
            isFriday: isFriday,
          };

          // Format times for the additional day
          const formatTime = (timeStr) => {
            const [hours, minutes] = timeStr.split(":");
            return `${hours.padStart(2, "0")}:${minutes}`;
          };

          additionalDayData.fajr = formatTime(additionalDayData.fajr);
          additionalDayData.shuruq = formatTime(additionalDayData.shuruq);
          additionalDayData.duhr = formatTime(additionalDayData.duhr);
          additionalDayData.asr = formatTime(additionalDayData.asr);
          additionalDayData.maghreb = formatTime(additionalDayData.maghreb);
          additionalDayData.isha = formatTime(additionalDayData.isha);

          // Add the additional day to our data
          transformedData.push(additionalDayData);
        }
      }
    }

    // Split into two halves for the tables
    const midPoint = Math.ceil(transformedData.length / 2);
    const result = [
      transformedData.slice(0, midPoint),
      transformedData.slice(midPoint),
    ];

    return result;
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    // Return the hardcoded data as fallback
    return prayerData;
  }
}

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
document.addEventListener("DOMContentLoaded", async () => {
  const tableContainer = document.querySelector(".table-grid");

  // Show loading state
  tableContainer.textContent = "Laddar bönetider...";

  try {
    console.log("Starting to fetch prayer times...");
    // Fetch prayer times
    const prayerData = await fetchRamadanTimes();
    console.log("Prayer times fetched successfully");

    // Clear loading state
    tableContainer.textContent = "";

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

    console.log("Tables rendered successfully");
  } catch (error) {
    console.error("Error in main process:", error);
    tableContainer.textContent =
      "Ett fel uppstod vid hämtning av bönetider. Försök igen senare.";
  }
});
