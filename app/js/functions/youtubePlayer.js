const ytPlayer = () => {
  //  youtube video player start
  let youtubePlayer = document.querySelectorAll(".youtube__player");
  if (youtubePlayer.length > 0) {
    youtubePlayer.forEach((player) => {
      if (player.dataset.video_id.match(/youtube/g)) {
        let subString = player.dataset.video_id.substring(
          player.dataset.video_id.indexOf("v=") + 2,
          player.dataset.video_id.indexOf("&")
        );
        player.dataset.video_id = subString;
      }
      if (player.dataset.video_id.match(/youtu.be/g)) {
        let subString = player.dataset.video_id.substring(
          player.dataset.video_id.lastIndexOf("/") + 1
        );
        player.dataset.video_id = subString;
      }
      player.addEventListener("click", (e) => {
        e.preventDefault();
        let iframe = document.createElement("iframe");
        const poster = e.currentTarget.querySelector(".video__poster");
        const control = e.currentTarget.querySelector(".video__control");
        iframe.setAttribute(
          "src",
          "https://www.youtube.com/embed/" +
            e.currentTarget.dataset.video_id +
            "?rel=0&showinfo=0&autoplay=1&mute=1"
        );

        iframe.setAttribute("frameborder", "0");
        iframe.setAttribute("allowfullscreen", "");
        control.style.display = "none";
        poster.style.display = "none";
        e.currentTarget.appendChild(iframe);
      });
    });
  }
  //  youtube video player end
};
export default ytPlayer;