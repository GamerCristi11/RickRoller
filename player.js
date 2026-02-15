function Start(){
    const currentUrl = window.location.href;
    const rickrollURL = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"; // Rickroll url :)

    if (currentUrl.includes("youtube.com/watch?v=") && currentUrl != rickrollURL){
        console.log("Redirecting to Rickroll, sry :)");
        window.location.href = rickrollURL;
}
}

setInterval(Start, 2000);