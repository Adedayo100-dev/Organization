function notifyMe() {
  if (!("Notification" in window)) {
    // Check if the browser supports notifications
    alert("This browser does not support desktop notification");
  } else if (Notification.permission === "granted") {
    // Check whether notification permissions have already been granted;
    // if so, create a notification
    const notification = new Notification("Hi there!");
    // …
  } else if (Notification.permission !== "denied") {
    // We need to ask the user for permission
    Notification.requestPermission().then((permission) => {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
          const title = 'New Pay Added';
          const icn = 'images/Government_of_Antwerp_83_logo.svg';
          const text = `This is a wonderful second Notification. Let's work on this`;
          const img ='https://images.freeimages.com/images/large-previews/9bd/rusted-fence-decay-texture-1199916.jpg';
          const notification = new Notification(title, { body: text, icon: icn, image: img });
        // …
      }
    });
  }

  // At last, if the user has denied notifications, and you
  // want to be respectful there is no need to bother them anymore.
}
