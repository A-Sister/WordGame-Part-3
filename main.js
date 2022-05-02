function addUser() {
    player_1Name = document.getElementById("player_1Name"). value;
    player_2Name = document.getElementById("player_2Name"). value;
    localStorage.setItem("Player_1Name", player_1Name);
    localStorage.setItem("Player_2Name", player_2Name);
    window.location = "game_page.html";
}