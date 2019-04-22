async function doIt () {
    let data = fetch ('https://api.github.com/search/repositories?q=language:js&sort=stars&order=desc')
    await data
        .then(data => data.json())
        .then(data => data.items.slice(0, 3))
        .then(data => {
            let top3 = document.getElementById('top3')
          data.forEach((element)=>{
              top3.innerHTML += `<section>
                                 <img src="${element.owner.avatar_url}" />
                                 <div>Name: ${element.name}</div>
                                 <div>Description: ${element.description}</div>
                                 <div>Stargazers Count: ${element.stargazers_count}</div>
                                 </section>`
          })
        })
}

doIt()