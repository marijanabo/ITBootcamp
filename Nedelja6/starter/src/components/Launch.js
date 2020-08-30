export const Launch = (launch) => {
    const divLaunch = document.createElement('div')
    divLaunch.className = 'launch'
    divLaunch.innerHTML = `
    <div class="inner-div-0">
        <img src="${launch.links.mission_patch}" alt="">
    </div>
    <div class="inner-div-1">
        <p>${launch.rocket.rocket_name}</p>
    </div>
    <div class="inner-div-2">
        <p>${launch.launch_year}</p>
    </div>`

    return divLaunch
}
