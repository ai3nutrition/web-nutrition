const STORE_LINKS = {
  googlePlay: "#",
  appStore: "#",
};

function detectPlatform() {
  const ua = navigator.userAgent || navigator.vendor || "";

  if (/android/i.test(ua)) {
    return "android";
  }

  if (/iphone|ipad|ipod/i.test(ua)) {
    return "ios";
  }

  return "other";
}

function redirectToStore() {
  const platform = detectPlatform();
  const note = document.getElementById("redirect-note");

  if (platform === "android" && STORE_LINKS.googlePlay !== "#") {
    if (note) note.textContent = "Redirecting to Google Play...";
    setTimeout(() => {
      window.location.href = STORE_LINKS.googlePlay;
    }, 1200);
  } else if (platform === "ios" && STORE_LINKS.appStore !== "#") {
    if (note) note.textContent = "Redirecting to the App Store...";
    setTimeout(() => {
      window.location.href = STORE_LINKS.appStore;
    }, 1200);
  }
}

document.addEventListener("DOMContentLoaded", redirectToStore);
