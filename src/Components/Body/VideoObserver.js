

class VideoObserver {
    static handler = null;

    static registerCallback(callback) {
        
        this.handler = callback;
    }

    static triggerEvent(time) {
        this.handler(time);
    }
} export default VideoObserver;