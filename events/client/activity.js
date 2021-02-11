module.exports = () => {
    client.setActivity(`${client.users.cache.size} members`, {type: "WATCHING"});
    //client.guilds.cache.size instead
}