import { world, PlayerSpawnAfterEvent } from "@minecraft/server";

world.afterEvents.playerSpawn.subscribe((event : PlayerSpawnAfterEvent) => {
    const player = event.player;

    if(!event.initialSpawn){
        return;
    }

    player.sendMessage(`Welcome, ${player.name}!`);
});