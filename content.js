  function replaceProfilePictures() {
    const newProfilePicURL = chrome.runtime.getURL('my_pic.jpg');

    console.log(newProfilePicURL);
    const profilePics = document.querySelectorAll('img.feed-shared-actor__avatar-image, img.pv-top-card-profile-picture__image,.evi-image,#ember489,.ember-view,.profile-photo-edit__preview');
  
    profilePics.forEach(img => {
      img.src = newProfilePicURL;
    });
  }
  replaceProfilePictures();
  const observer = new MutationObserver(() => {
    replaceProfilePictures();
  });
  observer.observe(document.body, { childList: true, subtree: true });
  