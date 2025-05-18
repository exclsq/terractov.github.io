const profileDisplay = document.getElementById('profile-display');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  cute: {
    img: 'https://i.pinimg.com/736x/54/81/2b/54812b31bbdac831682fc85b04864678.jpg',
    desc: 'The local Chatlan faggot',
  },
  shy: {
    img: 'https://i.pinimg.com/736x/8a/98/c8/8a98c8301ac99f206eb2a731aa93803f.jpg',
    desc: 'gay fucker',
  },
  motori: {
    img: 'https://i.pinimg.com/736x/99/49/5b/99495b57ad4a3ac34573f63b80493e84.jpg',
    desc: 'dildo lover',
  },
  hardline: {
    img: 'https://i.pinimg.com/736x/cc/e6/4e/cce64e18c15c55e96844f8f280ec770d.jpg',
    desc: 'When Leo fucked, he didnt think twice',
  }

};

Object.values(profiles).forEach(profile => {
  const img = new Image();
  img.src = profile.img;
});

let currentProfile = null;

document.querySelectorAll('.profile-name').forEach(nameEl => {
  nameEl.addEventListener('click', (e) => {
    e.stopPropagation();
    const key = nameEl.dataset.name;
    if (currentProfile === key) {
      profileDisplay.style.display = 'none';
      profilePic.src = '';
      profileDesc.textContent = '';
      currentProfile = null;
    } else {
      const profile = profiles[key];
      if (profile) {
        profilePic.src = profile.img;
        profileDesc.textContent = profile.desc;
        profilePic.alt = `${key} profile picture`;
        profileDisplay.style.display = 'flex';
        currentProfile = key;
      }
    }
  });
});
