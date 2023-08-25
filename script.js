const data = document.querySelector('[data-element="param-data"]');
const data_json = data.textContent;

const data_obj = JSON.parse(data_json);

console.log(data_obj);

const male_cards_wrapper = document.querySelector(".cards_wrapper");
const female_cards_wraper = document.querySelector(".female_cards_wrapper");

const get_profiles = async function (gender, cards_container, loader_icon) {
  const res = await fetch(
    `https://api.betterhalf.ai/v2/search-users?limit=6&gender=${gender}&${data_obj.parameter}=${data_obj.value}&${data_obj.parameter2}=${data_obj.value2}`
  );

  try {
    const data = await res.json();
    const profiles = data.results;
    document.getElementById(loader_icon).style.display = "none";

    profiles.forEach(function (profile) {
      const last_seen = profile.active_at;
      const last_seen_date = new Date(last_seen);
      const last_seen_time = last_seen_date.getTime();

      const now = new Date();
      const current_time = now.getTime();
      const seconds = Math.trunc((current_time - last_seen_time) / 1000);
      let minutes = Math.trunc(seconds / 60);
      let hours = Math.trunc(minutes / 60);

      cards_container.insertAdjacentHTML(
        "afterbegin",
        `<div id="" class="profile-wrapper hide w-node-_1c289f53-d61e-4329-1c20-392d29ec3c16-453e17ab" style="display: flex;"><div id="w-node-a3f7e5d8-1d47-930f-a845-de71b35642d6-453e17ab" class="sample-card"><div id="dp_wrapper" class="div-block-476"><img src=${
          profile.images[0]
        } loading="lazy" alt="" class="profilepic"><div class="last-active-register-wrapper"><div class="text-wrapper is--time"><div id="agetxt" class="label not--bold">Last active - </div><div id="agetxt" class="timetxt">time</div></div></div></div><div class="matrimony-text-wrapper"><div class="text-wrapper"><div id="agetxt" class="agetxt">${
          profile.age
        }</div><div id="agetxt" class="label">Yrs</div></div><div class="text-wrapper"><div id="religiontxt" class="castetxt">${
          profile.caste
        }</div><div id="religiontxt" class="separator">,</div><div id="religiontxt" class="religiontxt">${
          profile.religion
        }</div></div><div class="text-wrapper"><div id="desigtxt" class="hometown-label">🧰</div><div id="desigtxt" class="desigtxt">${
          profile.designation
        }</div></div><div class="text-wrapper"><div id="desigtxt" class="hometown-label">🏠</div><div id="desigtxt" class="locationtxt">${
          profile.locations.features[0].properties.city
        }</div><div id="religiontxt" class="separator">,</div><div id="desigtxt" class="statetxt">${
          profile.locations.features[0].properties.state
        }</div></div><div class="text-wrapper"><div class="last_active-label">⏱</div><div class="last_active-label">Last Active</div><div class="last_seen_time">${
          minutes > 0
            ? `${minutes > 60 ? `${hours} hours ago` : `${minutes} mins`} `
            : "few seconds "
        } ago</div></div></div><div class="div-block-477"><a id="profile-btn-cta" href="https://betterhalf.app.link/webapplink" target="_blank" class="matrimony-page-register-btn w-button">Register free</a></div></div></div>`
      );
    });
  } catch (error) {
    console.log(error);
  }
};

get_profiles("male", male_cards_wrapper, "preloader");
get_profiles("female", female_cards_wraper, "preloaderFemale");

////////////////////////////////SLIDER CODE///////////////////////////////////////////

function in__home_v3() {
  let splides = $(".in__home_v3");
  for (let i = 0, splideLength = splides.length; i < splideLength; i++) {
    new Splide(splides[i], {
      // Desktop on down
      perPage: 3,
      perMove: 1,
      focus: 0, // 0 = left and 'center' = center
      type: "loop", // 'loop' or 'slide'
      gap: "2em", // space between slides
      arrows: "slider", // 'slider' or false
      pagination: false, // 'slider' or false
      speed: 600, // transition speed in miliseconds
      dragAngleThreshold: 30, // default is 30
      autoWidth: false, // for cards with differing widths
      rewind: true, // go back to beginning when reach end
      rewindSpeed: 400,
      waitForTransition: false,
      updateOnMove: true,
      trimSpace: false, // true removes empty space from end of list
      breakpoints: {
        991: {
          // Tablet
          perPage: 1,
          gap: "4vw",
        },
        767: {
          // Mobile Landscape
          perPage: 1,
          gap: "4vw",
        },
        479: {
          // Mobile Portrait
          perPage: 1,
          gap: "16px",
        },
      },
    }).mount();
  }
}
in__home_v3();

document.querySelector("#left-arrow").addEventListener("click", () => {
  document.querySelector(".splide__arrow--prev").click();
});

document.querySelector("#right-arrow").addEventListener("click", () => {
  document.querySelector(".splide__arrow--next").click();
});

document.querySelector(".splide__arrow--next").style.display = "none";
document.querySelector(".splide__arrow--prev").style.display = "none";

///////////////////////////////////////////////////////////////////////////////

///////////////FOR SHOWING SIDEBARS ON MATRIMONIAL PAGES//////////////////////////

////////////SIKH MARITAL STATUS///////////////////////

/*
<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Marital status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/awaiting-divorce-sikh-matrimony" target="_blank" class="sidebar-txt">Awaiting Divorce Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/divorcee-sikh-matrimony" target="_blank" class="sidebar-txt">Divorcee Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/unmarried-sikh-matrimony" target="_blank" class="sidebar-txt">Unmarried Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/widow-sikh-matrimony" target="_blank" class="sidebar-txt">Widow Sikh Matrimony</a></div></div></div></div></div>`
  );
  </script>
  
////////////SIKH MOTHER TONGUE///////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Mother tongue</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/urdu-sikh-matrimony" target="_blank" class="sidebar-txt">Urdu Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/telugu-sikh-matrimony" target="_blank" class="sidebar-txt">Telugu Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/tamil-sikh-matrimony" target="_blank" class="sidebar-txt">Tamil Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/sindhi-sikh-matrimony" target="_blank" class="sidebar-txt">Sindhi Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/santhali-sikh-matrimony" target="_blank" class="sidebar-txt">Santhali Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/punjabi-sikh-matrimony" target="_blank" class="sidebar-txt">Punjabi Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/odia-sikh-matrimony" target="_blank" class="sidebar-txt">Odia Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/nepali-sikh-matrimony" target="_blank" class="sidebar-txt">Nepali Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marwadi-sikh-matrimony" target="_blank" class="sidebar-txt">Marwadi Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marathi-sikh-matrimony" target="_blank" class="sidebar-txt">Marathi Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/malayalam-sikh-matrimony" target="_blank" class="sidebar-txt">Malayalam Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/maithili-sikh-matrimony" target="_blank" class="sidebar-txt">Maithili Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/konkani-sikh-matrimony" target="_blank" class="sidebar-txt">Konkani Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kashmiri-sikh-matrimony" target="_blank" class="sidebar-txt">Kashmiri Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kannada-sikh-matrimony" target="_blank" class="sidebar-txt">Kannada Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/gujarati-sikh-matrimony" target="_blank" class="sidebar-txt">Gujarati Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/english-sikh-matrimony" target="_blank" class="sidebar-txt">English Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/bengali-sikh-matrimony" target="_blank" class="sidebar-txt">Bengali Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/assamese-sikh-matrimony" target="_blank" class="sidebar-txt">Assamese Sikh Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/hindi-sikh-matrimony" target="_blank" class="sidebar-txt">Hindi Sikh Matrimony</a></div></div></div></div></div>`
  );
  </script>

////////////PARSI MARITAL STATUS/////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Marital status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/awaiting-divorce-parsi-matrimony" target="_blank" class="sidebar-txt">Awaiting Divorce Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/divorcee-parsi-matrimony" target="_blank" class="sidebar-txt">Divorcee Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/unmarried-parsi-matrimony" target="_blank" class="sidebar-txt">Unmarried Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/widow-parsi-matrimony" target="_blank" class="sidebar-txt">Widow Parsi Matrimony</a></div></div></div></div></div>`
  );
  </script>

///////////PARSI MOTHER TONGUE//////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Mother tongue</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/urdu-parsi-matrimony" target="_blank" class="sidebar-txt">Urdu Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/telugu-parsi-matrimony" target="_blank" class="sidebar-txt">Telugu Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/tamil-parsi-matrimony" target="_blank" class="sidebar-txt">Tamil Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/sindhi-parsi-matrimony" target="_blank" class="sidebar-txt">Sindhi Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/santhali-parsi-matrimony" target="_blank" class="sidebar-txt">Santhali Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/punjabi-parsi-matrimony" target="_blank" class="sidebar-txt">Punjabi Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/odia-parsi-matrimony" target="_blank" class="sidebar-txt">Odia Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/nepali-parsi-matrimony" target="_blank" class="sidebar-txt">Nepali Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marwadi-parsi-matrimony" target="_blank" class="sidebar-txt">Marwadi Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marathi-parsi-matrimony" target="_blank" class="sidebar-txt">Marathi Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/malayalam-parsi-matrimony" target="_blank" class="sidebar-txt">Malayalam Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/maithili-parsi-matrimony" target="_blank" class="sidebar-txt">Maithili Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/konkani-parsi-matrimony" target="_blank" class="sidebar-txt">Konkani Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kashmiri-parsi-matrimony" target="_blank" class="sidebar-txt">Kashmiri Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kannada-parsi-matrimony" target="_blank" class="sidebar-txt">Kannada Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/gujarati-parsi-matrimony" target="_blank" class="sidebar-txt">Gujarati Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/english-parsi-matrimony" target="_blank" class="sidebar-txt">English Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/bengali-parsi-matrimony" target="_blank" class="sidebar-txt">Bengali Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/assamese-parsi-matrimony" target="_blank" class="sidebar-txt">Assamese Parsi Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/hindi-parsi-matrimony" target="_blank" class="sidebar-txt">Hindi Parsi Matrimony</a></div></div></div></div></div>`
  );
  </script>

////////JAIN MARITAL STATUS////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Marital status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/awaiting-divorce-jain-matrimony" target="_blank" class="sidebar-txt">Awaiting Divorce Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/divorcee-jain-matrimony" target="_blank" class="sidebar-txt">Divorcee Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/unmarried-jain-matrimony" target="_blank" class="sidebar-txt">Unmarried Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/widow-jain-matrimony" target="_blank" class="sidebar-txt">Widow Jain Matrimony</a></div></div></div></div></div>`
  );
  </script>

/////////JAIN MOTHER TONGUE//////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Mother tongue</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/urdu-jain-matrimony" target="_blank" class="sidebar-txt">Urdu Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/telugu-jain-matrimony" target="_blank" class="sidebar-txt">Telugu Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/tamil-jain-matrimony" target="_blank" class="sidebar-txt">Tamil Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/sindhi-jain-matrimony" target="_blank" class="sidebar-txt">Sindhi Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/santhali-jain-matrimony" target="_blank" class="sidebar-txt">Santhali Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/punjabi-jain-matrimony" target="_blank" class="sidebar-txt">Punjabi Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/odia-jain-matrimony" target="_blank" class="sidebar-txt">Odia Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/nepali-jain-matrimony" target="_blank" class="sidebar-txt">Nepali Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marwadi-jain-matrimony" target="_blank" class="sidebar-txt">Marwadi Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marathi-jain-matrimony" target="_blank" class="sidebar-txt">Marathi Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/malayalam-jain-matrimony" target="_blank" class="sidebar-txt">Malayalam Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/maithili-jain-matrimony" target="_blank" class="sidebar-txt">Maithili Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/konkani-jain-matrimony" target="_blank" class="sidebar-txt">Konkani Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kashmiri-jain-matrimony" target="_blank" class="sidebar-txt">Kashmiri Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kannada-jain-matrimony" target="_blank" class="sidebar-txt">Kannada Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/gujarati-jain-matrimony" target="_blank" class="sidebar-txt">Gujarati Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/english-jain-matrimony" target="_blank" class="sidebar-txt">English Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/bengali-jain-matrimony" target="_blank" class="sidebar-txt">Bengali Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/assamese-jain-matrimony" target="_blank" class="sidebar-txt">Assamese Jain Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/hindi-jain-matrimony" target="_blank" class="sidebar-txt">Hindi Jain Matrimony</a></div></div></div></div></div>`
  );
  </script>

////////////BUDDHIST MARITAL STATUS//////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Marital status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/awaiting-divorce-buddhist-matrimony" target="_blank" class="sidebar-txt">Awaiting Divorce Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/divorcee-buddhist-matrimony" target="_blank" class="sidebar-txt">Divorcee Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/unmarried-buddhist-matrimony" target="_blank" class="sidebar-txt">Unmarried Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/widow-buddhist-matrimony" target="_blank" class="sidebar-txt">Widow Buddhist Matrimony</a></div></div></div></div></div>`
  );
  </script>

/////////////BUDDHIST MOTHER TONGUE////////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Mother tongue</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/urdu-buddhist-matrimony" target="_blank" class="sidebar-txt">Urdu Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/telugu-buddhist-matrimony" target="_blank" class="sidebar-txt">Telugu Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/tamil-buddhist-matrimony" target="_blank" class="sidebar-txt">Tamil Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/sindhi-buddhist-matrimony" target="_blank" class="sidebar-txt">Sindhi Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/santhali-buddhist-matrimony" target="_blank" class="sidebar-txt">Santhali Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/punjabi-buddhist-matrimony" target="_blank" class="sidebar-txt">Punjabi Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/odia-buddhist-matrimony" target="_blank" class="sidebar-txt">Odia Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/nepali-buddhist-matrimony" target="_blank" class="sidebar-txt">Nepali Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marwari-buddhist-matrimony" target="_blank" class="sidebar-txt">Marwari Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marathi-buddhist-matrimony" target="_blank" class="sidebar-txt">Marathi Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/malayalam-buddhist-matrimony" target="_blank" class="sidebar-txt">Malayalam Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/maithili-buddhist-matrimony" target="_blank" class="sidebar-txt">Maithili Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/konkani-buddhist-matrimony" target="_blank" class="sidebar-txt">Konkani Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kashmiri-buddhist-matrimony" target="_blank" class="sidebar-txt">Kashmiri Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kannada-buddhist-matrimony" target="_blank" class="sidebar-txt">Kannada Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/gujarati-buddhist-matrimony" target="_blank" class="sidebar-txt">Gujarati Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/english-buddhist" target="_blank" class="sidebar-txt">English Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/bengali-buddhist-matrimony" target="_blank" class="sidebar-txt">Bengali Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/assamese-buddhist-matrimony" target="_blank" class="sidebar-txt">Assamese Buddhist Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/hindi-buddhist-matrimony" target="_blank" class="sidebar-txt">Hindi Buddhist Matrimony</a></div></div></div></div></div>`
  );
  </script>

////////CHRISTIAN MARITAL STATUS//////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Marital status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/awaiting-divorce-christian-matrimony" target="_blank" class="sidebar-txt">Awaiting Divorce Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/divorcee-christian-matrimony" target="_blank" class="sidebar-txt">Divorcee Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/unmarried-christian-matrimony" target="_blank" class="sidebar-txt">Unmarried Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/widow-christian-matrimony" target="_blank" class="sidebar-txt">Widow Christian Matrimony</a></div></div></div></div></div>`
  );
  </script>

//////////////CHRISTISN MOTHER TONGUE///////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin",
    `<div class="matrimony_page-sidebar"><h3 class="nav-sidebar-heading">Match by Mother tongue</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/urdu-christian-matrimony" target="_blank" class="sidebar-txt">Urdu Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/telugu-christian-matrimony" target="_blank" class="sidebar-txt">Telugu Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/tamil-christian-matrimony" target="_blank" class="sidebar-txt">Tamil Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/sindhi-christian-matrimony" target="_blank" class="sidebar-txt">Sindhi Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/punjabi-christian-matrimony" target="_blank" class="sidebar-txt">Punjabi Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/odia-christian-matrimony" target="_blank" class="sidebar-txt">Odia Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/nepali-christian-matrimony" target="_blank" class="sidebar-txt">Nepali Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marwadi-christian-matrimony" target="_blank" class="sidebar-txt">Marwadi Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/marathi-christian-matrimony" target="_blank" class="sidebar-txt">Marathi Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/malayalam-christian-matrimony" target="_blank" class="sidebar-txt">Malayalam Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/maithili-christian-matrimony" target="_blank" class="sidebar-txt">Maithili Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/konkani-christian-matrimony" target="_blank" class="sidebar-txt">Konkani Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kashmiri-christian-matrimony" target="_blank" class="sidebar-txt">Kashmiri Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/kannada-christian-matrimony" target="_blank" class="sidebar-txt">Kannada Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/gujarati-christian-matrimony" target="_blank" class="sidebar-txt">Gujarati Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/english-christian-matrimony" target="_blank" class="sidebar-txt">English Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/bengali-christian-matrimony" target="_blank" class="sidebar-txt">Bengali Christian Matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/assamese-christian-matrimony" target="_blank" class="sidebar-txt">Assamese Christian matrimony</a></div></div><div role="listitem" class="w-dyn-item"><div class="div-block-933"><a href="/matrimonials/hindi-christian-matrimony" target="_blank" class="sidebar-txt">Hindi Christian Matrimony</a></div></div></div></div></div>`
  );
  </script>


////////ONLY MARITAL STATUS//////////////////

<script>
document
  .querySelector(".sidebar-wrapper")
  .insertAdjacentHTML(
    "afterbegin", `<div class="religion-links-wrapper in--matrimonials-page"><h3 class="nav-sidebar-heading">Match By Marital Status</h3><div class="w-dyn-list"><div role="list" class="w-dyn-items"><div role="listitem" class="w-dyn-item"><a id="sidebar-link" href="/matrimonials/widow-matrimony" target="_blank" class="blog-nav">Widow Matrimony</a></div><div role="listitem" class="w-dyn-item"><a id="sidebar-link" href="/matrimonials/unmarried-matrimony" target="_blank" class="blog-nav">Unmarried Matrimony</a></div><div role="listitem" class="w-dyn-item"><a id="sidebar-link" href="/matrimonials/awaiting-divorce-matrimony" target="_blank" class="blog-nav">Awaiting Divorce Matrimony</a></div><div role="listitem" class="w-dyn-item"><a id="sidebar-link" href="/matrimonials/divorcee-matrimony" target="_blank" class="blog-nav">Divorcee Matrimony</a></div></div></div></div>`
  );
  </script>

  */
