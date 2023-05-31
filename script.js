
const male_cards_wrapper = document.querySelector('.cards_wrapper')
const female_cards_wraper = document.querySelector('.female_cards_wrapper')


const get_profiles = async function (gender, cards_container) {
    const res = await fetch(`https://api.betterhalf.ai/v2/search-users?limit=6&gender=${gender}`)
    const data = await res.json()
    const profiles = data.results
    console.log(profiles)
    
    profiles.forEach(function(profile){
        
        cards_container.insertAdjacentHTML('afterbegin', `<div class="profile_block"><img src=${profile.images[0]} loading="lazy" alt="" class="profile_pic">
        <div class="profile_txt">${profile.age}</div>
        
        <div class="profile_txt">${profile.caste}, ${profile.religion}</div>
        
        <div class="profile_txt">${profile.locations.features[0].properties.city}, ${profile.locations.features[0].properties.state}</div>
        <div class="profile_txt">Last active time</div></div>`)

        const last_seen = profile.active_at
        const last_seen_date = new Date(last_seen)
        const last_seen_time = last_seen_date.toLocaleTimeString('en-IN', { hour12: false })

        

        const now = new Date()
        const current_time =  now.toLocaleTimeString('en-IN', { hour12: false })
        

        //console.log(current_time - last_seen_time)
    })

}


get_profiles('male', male_cards_wrapper)