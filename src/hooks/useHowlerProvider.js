import { Howl } from 'howler';

const useHowlerProvider = ({ type, volume, soundFile, autoplay, loop, soundID }) => {
    try {
        const sound = new Howl({
            src: [soundFile],
            autoplay,
            loop,
            volume: volume,
            html5: true,
            onend: () => {
                console.log('Finished!');
            },
            onplayerror: () => {
                sound.once('unlock', () => {
                    sound.play();
                });
            },
            onstop: () => {
                console.log('stopped')
            }
        });
        switch (type) {
            case "play":
                let SoundID = sound.play()
                return SoundID;
            case "stopWithID":
                return sound.stop([soundID]);
            case "pauseWithID":
                return sound.pause([soundID]);
            default:
                return null;
        }
    } catch (error) {
        console.log("error sound effect", error)
    }
}

export default useHowlerProvider;