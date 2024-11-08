// import Footer from "../components/Footer";
function Home(){
    return(
        <>
            <div className="home content">
                <div className="banner"></div>
                <div className="part-index part-one">
                <div className="left">
                    <h1>What is Minecraft?</h1>
                    <p>Minecraft is a game made up of blocks, creatures, and community. You can survive the night or build a work of art the choice is all yours. But if the thought of exploring a vast new world all on your own feels overwhelming, then fear not! Let’s explore what Minecraft is all about!</p>
                </div>
                <div className="right">
                    <div className="image"></div>
                </div>
                </div>
                <div className="part-index part-two">
                <div className="right">
                    <div className="image"></div>
                </div>
                <div className="left">
                    <h1>Local Or Single Player Game</h1>
                    <p>Minecraft has two standard game modes Creative mode and Survival mode. 
                    In Creative mode, you have unlimited resources, immortality, the ability to fly, as well as the ability to destroy any kind of block instantly. This mode is mostly used by players who want to focus on the sheer pleasure of creating things with blocks.
                    
                    In Survival mode, you explore the world, collect resources, craft, fight monsters, and gain experience points. Breaking different blocks takes work and requires specific tools. You are also bound by gravity and must manage your own hunger and health. Survival mode in Minecraft: Java Edition also has a sub-category mode called “Hardcore” in which you only get one life – lose it and it’s game over.
                    
                    Creative and Survival both have four difficulty settings: Peaceful, Easy, Normal, and Hard. In Creative mode these settings don’t matter very much, because mobs won’t attack you. In Survival mode however, these difficulty settings are very important! They affect a number of factors, such as how often hostile mobs will spawn, how much damage they do, how quickly the hunger bar is depleted, and how fast a player’s health replenishes over time.</p>
                </div>
                </div>
                <div className="part-index part-three">
                <div className="left">
                    <h1>Online Or Multi Player Game</h1>
                    <p>Playing Minecraft in single-player is fun, but playing with other people is fun too! You can plan huge builds together, go on epic adventures, or collaborate to take down the game’s toughest bosses. In this article, we’ll show you how to play multiplayer on a server, in both Bedrock Edition and Java Edition.

                    There are several different kinds of servers that you can join. LAN (“Local Area Network”) servers allow you to play with others connected to the same network as you, while online servers allow you to play with anyone, anywhere in the world. We offer a service called Minecraft Realms that lets you quickly and easily set up your own online server that your friends can connect to.</p>
                </div>
                <div className="right">
                    <div className="image"></div>
                </div>
                </div>
                <div className="screenshots">
                <h1>Screenshots</h1>
                <div className="ss-img"> 
                    <div className="img one"></div>
                    <div className="img two"></div>
                    <div className="img three"></div>
                    <div className="img four"></div>
                    <div className="img five"></div>
                    <div className="img six"></div>
                </div>
                </div>
            </div>
            {/* <Footer></Footer> */}
        </>
    )
}
export default Home;