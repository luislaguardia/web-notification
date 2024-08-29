function requestNotificationPermission() {
  if (Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
      } else {
        console.log('Notification permission denied.');
      }
    });
  } else {
    console.log('Notification permission already granted or denied.');
  }
}

function showNotification() {
  if (Notification.permission === 'granted') {
    const title = 'Hello!';
    const options = {
      body: 'This is a custom notification message.',
      icon: 'https://via.placeholder.com/80', 
      vibrate: [200, 100, 200], 
      tag: 'custom-notification' 
    };

    const notification = new Notification(title, options);

    notification.onclick = () => {
      window.focus(); d
    };

    notification.onclose = () => {
      console.log('Notification closed.');
    };
  } else {
    console.log('Notification permission not granted.');
  }
}

document.getElementById('notify-button').addEventListener('click', showNotification);

document.addEventListener('DOMContentLoaded', requestNotificationPermission);
