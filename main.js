const LinksSocialMedia = {
  github: 'ajikisan',
  youtube: 'FLU2bHY0Ras', //confira o vídeo da minha mascote - por gentileza deixe seu like :)
  facebook: 'mirian.ajikimolicawa',
  instagram: 'mirianajikimolicawa',
  twitter: 'ajikisan'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAtribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userLink.href = data.html_url
      userLogin.textContent = data.login
      userBio.textContent = data.bio
      UserImage.src = data.logomarca_url
    })
}
getGitHubProfileInfos()
