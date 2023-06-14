const data = document.querySelector('[data-element="param-data"]');
const data_json = data.textContent;

const data_obj = JSON.parse(data_json);

//console.log(data_obj);

const male_cards_wrapper = document.querySelector(".cards_wrapper");
const female_cards_wraper = document.querySelector(".female_cards_wrapper");

const get_profiles = async function (gender, cards_container, loader_icon) {
  const res = await fetch(
    `https://api.betterhalf.ai/v2/search-users?limit=6&gender=${gender}&${data_obj.parameter}=${data_obj.value}`
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
