var game = new Phaser.Game(800, 600);
Phaser.Device.whenReady(function () {
    // plugins
    this.game.__plugins = this.game.__plugins || {};

    // add plugins here
    // ...

    // setup global namespace under game for our global data
    game.global = {};

    // states
    game.state.add('Loading', App.LoadingState);
    game.state.add('MainMenu', App.MainMenuState);
    game.state.add('Game', App.GameState);
    game.state.add('PlayMission', App.PlayMissionState);
    game.state.add('MissionResults', App.MissionResultsState);

    game.state.start('Loading');
});
