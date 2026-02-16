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

{ title: "Lil - Tecca - Ransom Live Performance Open_Mic", url: "Lil_Tecca__Ransom___Live_Performance____Open_Mic(256k).html", content: "" },
{ title: "Blueface-Baby", url: "Blueface-Baby.html", content: "" },
{ title: "YG - Go Loko ft Tyga, Jon Z", url: "YG_-_Go_Loko__Audio__ft._Tyga,_Jon_Z(256k).html", content: "" },
{ title: "CJ - WHOOPTY ", url: "CJ_-_WHOOPTY_[Official_Music_Video](256k).html", content: "" },
{title: "chella - My Darling", url: "Chella - My_Darling.html", content: "" },
{title: "Don Toliver - FWU", url: "Don_Toliver - FWU.html", content: "" },
{title: "Diamond Platnumz - Msumari", url: "Diamond_Platnumz - Msumari.html", content: "" },
{title: "Marioo – Snokonoko ll", url: "Marioo – Snokonoko ll.html", content: "" },
{title: "Diamond Platnumz – Natulizana", url: "Diamond Platnumz – Natulizana .html", content: "" },
{title: "Zuchu & Sun Voice – Bado Nakupenda Remix", url: "Zuchu & Sun Voice – Bado Nakupenda Remix.html", content: "" },
{title: "Country Wizzy – Hauna Lolote Ft. Dario X SPLIT", url: "Country Wizzy – Hauna Lolote Ft. Dario X SPLIT.html", content: "" },
{title: "Young Lunya - Natoka na Nani Ft Khaligraph Jones", url: "Young Lunya - Natoka na Nani Ft Khaligraph Jones.html", content: "" },
{title: "Young Lunya - Announcement Freestyle", url: "Young Lunya – Announcement Freestyle.html", content: "" },
{title: "Mbosso – Darasa La Saba", url: "Mbosso – Darasa La Saba.html", content: "" },
{title: "Mbosso – Huyu Hapa", url: "Mbosso – Huyu Hapa.html", content: "" },
{title: "Mbosso – Shetani Ft. Costa Titch X Alfa Kat", url: "Mbosso – Shetani Ft. Costa Titch X Alfa Kat.html", content: "" },
{title: "Nameless – Nasinzia II Ft Marioo", url: "Nameless – Nasinzia II Ft Marioo.html", content: "" },
{title: "Dulla Makabila – Dakika Moja", url: "Dulla Makabila – Dakika Moja.html", content: "" },
{title: "Travis Scott - HOUSTONFORNICATION", url: "Travis_Scott_-_HOUSTONFORNICATION__Audio_(256k).html", content: "" },
{title: "Rae Sremmurd - Swang", url: "Rae_Sremmurd_-_Swang__Lyrics_(256k).html", content: "" },
{title: "Future, Metro Boomin, The Weeknd - Young Metro", url: "Future%2C_Metro_Boomin%2C_The_Weeknd_-_Young_Metro__Official_Music_Video_%28256k%29.html", content: "" },
{title: "Metro Boomin, Don Toliver, Future - Too Many Nights", url: "Metro_Boomin,_Don_Toliver,_Future_-_Too_Many_Nights__Official_Video_(256k).html", content: "" },
{title: "Metro Boomin - Space Cadet ft. Gunna", url: "Metro_Boomin_-_Space_Cadet_ft._Gunna(256k).html", content: "" },
{title: "Metro Boomin - Superhero (Heroes & Villains)", url: "Metro_Boomin___Future_-_Superhero__Heroes___Villains__[Official_Music_Video](256k).html", content: "" },
{title: "Travis Scott Songs", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - MY EYES", url: "Travis_Scott_-_MY_EYES__Official_Audio_(140).html", content: "" },
{title: "Toxic – Fumanizi.html", url: "Toxic – Fumanizi.html", content: "" },
{title: "Kilimanjaro - pcee", url: "Kilimanjaro__Official_Audio_(256k).html", content: "" },
{title: "Pcee x Justin99 x EeQue - ZoTata", url: "Pcee_x_Justin99_x_EeQue_-_ZoTata__Official_Audio__ft._Mr_JazziQ%28256k%29.html", content: "" },
{title: "Young Thug - The London ft J. Cole & Travis Scott", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - FEiN ft Playboi Carti", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - goosebumps ft Kendrick Lamar", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - TOPIA TWINS ft Rob49, 21 Savage", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - WAKE UP", url: "travis scott songs.html", content: "" },
{title: "Travis Scott - Wasted ft Juicy J", url: "travis scott songs.html", content: "" },
{title: "Central Cee - Ungrateful", url: "Central_Cee_-_Ungrateful_[Net_Video](256k).html", content: "" },
{title: "Central Cee - Straight Back To It", url: "Central_Cee_-_Straight_Back_To_It_[Music_Video]_23_Out_Now(256k).html", content: "" },
{title: "Central Cee - GBP", url: "Central_Cee___21_Savage_-_GBP__Official_Music_Video_%28256k%29.html", content: "" },
{title: "Central Cee - The Bag", url: "Central_Cee_-_The_Bag_[Lyric_Video]_Wild_West(256k).html", content: "" },
{title: "Central Cee - One Up", url: "Central_Cee_-_One_Up_[Music_Video](256k).html", content: "" },
{title: "Central Cee - Doja", url: "Central_Cee_-_Doja__Official_Music_Video_%28256k%29.html", content: "" },
{title: "Central Cee x Dave - Sprinter", url: "Central_Cee_x_Dave_-_Sprinter_[Music_Video](256k).html", content: "" },
{title: "Central Cee FT. Lil Baby - BAND4BAND", url: "CENTRAL_CEE_FT._LIL_BABY_-_BAND4BAND__MUSIC_VIDEO_%28256k%29.html", content: "" },

































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


