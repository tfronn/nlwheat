const LinksSocialMedia = {
  github: 'tfronn',
  youtube: 'diversifique',
  facebook: 'tfronn',
  instagram: 'tfronn',
  twitter: 'tfronnn'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()
