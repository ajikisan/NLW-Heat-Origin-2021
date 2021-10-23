/* Conforme atribuiçao do login das redes sociais estes substituirão os dados cadastrados.*/

const linksSocialMedia = {
  github: 'ajikisan',
  youtube: 'FLU2bHY0Ras', //confira o vídeo da minha mascote - por gentileza deixe seu like :)
  facebook: 'mirian.ajikimolicawa',
  instagram: 'mirianajikimolicawa',
  twitter: 'ajikisan'
}

function changeSocialLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAtribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

/*Nesta etapa busca as informações pertinentes da api do github*/

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${linksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(dataInJson => {
      ;(userName.textContent = data.name),
        (userBio.textContent = data.bio),
        (userLink.href = data.html_url),
        (userImage.src = data.avatar_url),
        (userLogin.textContent = data.login)
    })
}

changeSocialMediaLinks()
getGitHubProfileInfos()
