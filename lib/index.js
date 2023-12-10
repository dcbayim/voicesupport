// @ts-check

module.exports = {
    /** 
     * @param {import('discord.js').Guild} guild
     * @param {string} roleId
     * 
     * @returns {Promise<number>}
     */
    async findOnlineMembers(guild, roleId) {
        const onlineMembers = await guild.members.fetch({ withPresences: true });
        const filteredOnlineMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'online');
        const filteredDndMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'dnd');
        const filteredIdleMembers = onlineMembers.filter(member => member.roles.cache.has(roleId) && member.presence?.status === 'idle');

        return filteredOnlineMembers.size + filteredDndMembers.size + filteredIdleMembers.size;
    }
}

//söyle dene bi ok
/* discordu tammaiyle kapatman gerek sanirim .d onu da test edelim bunun yapılası lazım*/
/* dc kapatyim ok*/