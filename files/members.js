const profileDisplay = document.getElementById('profile-display');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  cute: {
    img: 'https://i.pinimg.com/736x/8f/86/15/8f8615668e896eed0ad8b7b767dbd804.jpg',
    desc: 'but charming',
  },
  shy: {
    img: 'https://i.pinimg.com/736x/88/d3/19/88d31956946d35f5bb4dce1f6ff03002.jpg',
    desc: 'his grave',
  },
  motori: {
    img: 'https://i.pinimg.com/736x/f1/af/4d/f1af4dde05c9d981dde97d78c1c36440.jpg',
    desc: 'バイパーバイパーダブルrrバイパーカイインゲル',
  },
  hardline: {
    img: 'https://i.pinimg.com/736x/e3/48/98/e34898ffd1340b24e82c148e6171f031.jpg',
    desc: 'if the wolf is spinning',
  },
  propavshiy: {
    img: 'https://i.pinimg.com/736x/8b/71/8e/8b718e4cb41e7d08761bb75e920f7bfa.jpg',
    desc: 's1n1f pidor',
  },

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
