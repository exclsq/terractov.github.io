const profileDisplay = document.getElementById('profile-display');
const profilePic = document.getElementById('profile-pic');
const profileDesc = document.getElementById('profile-desc');

const profiles = {
  cute: {
    img: 'https://i.pinimg.com/736x/8f/86/15/8f8615668e896eed0ad8b7b767dbd804.jpg',
    desc: 'but charming',
  },
  shy: {
    img: 'https://i.pinimg.com/736x/3d/e6/45/3de64531546bb92edc7f9fc0988664ff.jpg',
    desc: 'his grave',
  },
  motori: {
    img: 'https://i.pinimg.com/736x/c9/2f/64/c92f6449560ecdf169d907c95ffc55ee.jpg',
    desc: 'バイパーバイパーダブルrrバイパーカイインゲル',
  },
  hardline: {
    img: 'https://i.pinimg.com/736x/e3/48/98/e34898ffd1340b24e82c148e6171f031.jpg',
    desc: 'if the wolf is spinning',
  },
  propavshiy: {
    img: 'https://i.pinimg.com/736x/63/78/6f/63786fd8cdf31daf266d8e51a21a553b.jpg',
    desc: 'the deceased',
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
