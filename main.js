// ========================
// 🔹 BURGER MENU TOGGLE
// ========================
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

if (burger && nav) {
  burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
  });
}

// ========================
// 🔹 FORM LOADER DELAY
// ========================
const form = document.getElementById('searchForm');
const loader = document.getElementById('loader');

if (form && loader) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    loader.style.display = 'flex';
    setTimeout(() => {
      form.submit();
    }, 3000);
  });
}

// ========================
// 🔹 SEARCH FUNCTION (Fuse.js)
// ========================
const pages = [
  { title: "Daino minoma ft Benito Mc- Akili ya ndocc", url: "Daino Minoma X Benito Mc- Akili ya ndocc.html", content: "" },
  { title: "Fammi Africa-Umejaa", url: "fammi-umejaa.html", content: "" },
  { title: "EP | Fanu Benks - Afro centric", url: "EP I Fanu Benks - Afro centric.html", content: "" },
  { title: "ctg harmanton - Enjo", url: "CTG harmaton- Enjo.html", content: "" },
  { title: "kim voice-waambie", url: "Kim-Voice x Dee Breezy-Waambie.html", content: "" },
  { title: "Fessy Melody", url: "Fesy melody songs.html", content: "" },
   { title: "Fessy Melody-Vimba", url: "Fesy melody songs.html", content: "" },
   { title: "Fessy Melody x Lady DIdy  - Over ", url: "Fesy melody songs.html", content: "" },
   { title: "Moramz ft Dogo elisha - umbea", url: "Moramz ft Dogo elisha - umbea.html", content: "" },
   { title: "Moramz - Ella", url: "Moramz ft Dogo elisha - umbea.html", content: "" },
    { title: "Kani Master - Hujanizaa", url: "kani master - hujanizaa.html", content: "" },
     { title: "Fanu Benks - Gangster Love", url: "EP I Fanu Benks - Afro centric.html", content: "" },
         { title: "Fanu Benks", url: "fanu benks.html", content: "" },
         { title: "Basya - Inatosha", url: "Basya - Inatosha.html", content: "" },
          { title: "Hush B Ft Dee Punchy - Najihisi ", url: "Hush B Ft Dee Punchy - Najihisi Vizuri.html", content: "" },
           { title: "Hush B Ft Dee Punchy X Chuka Boe - SABATO", url: "Hush B Ft Dee Punchy X Chuka Boe - SABATO.html", content: "" },
    { title: "Fanu Benks - achana nao", url: "EP I Fanu Benks - Afro centric.html", content: "" },
 { title: "Barakah The Prince - Mwanetu", url: "Barakah The Prince - Mwanetu.html", content: "" },
     { title: "Willox Khan-Nakukumbuka", url: "Willox Khan-Nakukumbuka.HTML", content: "" },
      { title: "Aslava - sina time nae", url: "ASLAVA_X_LOJINY_STAR_SINA_TIME_NAE.html", content: "" },
      
      { title: " Makomborero – Africa Will be Saved ", url: "Makomborero – Africa Will be Saved.html", content: "" },
       { title: "Bruce Melodie – POM POM ft Diamond Platnumz x Brown Joel ", url: "Bruce Melodie – POM POM ft Diamond Platnumz x Brown Joel.html", content: "" },
        { title: "POM POM - Diamond Platnumz ", url: "Bruce Melodie – POM POM ft Diamond Platnumz x Brown Joel.html", content: "" },
              { title: "kaje Double Killer - MKE WANGU ", url: "kaje Double Killer - MKE WANGU.html", content: "" },
{ title: "Young killer Msodokii - Mwanza ", url: "Young killer Msodokii - Mwanza.html", content: "" },
{ title: "Msodoki Young Killer - Go Ahead ", url: "Msodoki Young Killer - Go Ahead.html", content: "" },
{ title: "Young Killer Msodoki - The Waiting is Over ", url: "Young Killer Msodoki - The Waiting is Over.html", content: "" },
{ title: "Rapcha – Hivi Tulivyo", url: "Rapcha – Hivi Tulivyo.html", content: "" },

{ title: "Young Lunya – Freestyle at Wanene Tv", url: "Young Lunya – Freestyle at Wanene Tv.html", content: "" },
{ title: "Young Lunya – Vitu Vingi", url: "Young Lunya – Vitu Vingi.html", content: "" },
{ title: "Young Lunya – Mbwa Mwitu", url: "Young Lunya – Mbwa Mwitu.html", content: "" },
{ title: "Rayvanny – TOTO Ft Calad", url: "Rayvanny – TOTO Ft Calad.html", content: "" },
{ title: "Mex Cortez Ft Country Wizzy & Drillah Tz – Problems", url: "Country Wizzy – Problems.html", content: "" },
{ title: "Meja Kunta – MAMU", url: "Meja Kunta – MAMU.html", content: "" },
{ title: "Country Wizzy – Statement", url: "Country Wizzy – Statement.html", content: "" },
{ title: "Hip Hop - Country Wizzy (Prod. B BOY BEATS)", url: "Country Wizzy – Hip Hop (Prod. B BOY BEATS).html", content: "" },
{ title: "D Voice Ft Zuchu – Baridi", url: "D Voice Ft Zuchu – Baridi.html", content: "" },
{ title: "Marioo – OLUWA", url: "Marioo – OLUWA.html", content: "" },
{ title: "Yammi – Hayanogi", url: "Yammi – Hayanogi.html", content: "" },
{ title: "malume-ma mngwani", url: "malume-ma mngwani.html", content: "" },
{ title: "GeniusJini x66 – Sumaku", url: "GeniusJini x66 – Sumaku.html", content: "" },
{ title: "fammi-mwaka_huu", url: "fammi-mwaka_huu.html", content: "" },
{ title: "Salmin Swaggz – NYOTA Ft Young Lunya", url: "Salmin Swaggz – NYOTA Ft Young Lunya.html", content: "" },
{ title: "Daino minoma - Nipe Raha za Dunia", url: "Daino minoma-nipe_raha_za dunia.html", content: "" },








];



// ========================
// 🔍 SEARCH FUNCTION (WORKING)
// ========================

const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

const options = {
  keys: ["title"],
  threshold: 0.4
};

const fuse = new Fuse(pages, options);

searchInput.addEventListener("input", function () {
  const query = this.value.trim();
  resultsDiv.innerHTML = "";

  if (query.length < 2) return;

  const results = fuse.search(query);

  if (results.length === 0) {
    resultsDiv.innerHTML = "<p>No results found</p>";
    return;
  }

  results.forEach(result => {
    const item = result.item;
    const div = document.createElement("div");
    div.className = "result";
    div.innerHTML = `
      <a href="${item.url}">
        <strong>${item.title}</strong>
      </a>
    `;
    resultsDiv.appendChild(div);
  });
});


