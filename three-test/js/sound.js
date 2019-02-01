
var sound//={}
function initSound () {

	// var listener=new THREE.AudioListener()
	// camera.add(listener)

	// var sound=new THREE.Audio(listener)

	// var audioLoader=new THREE.audioLoader()
	// audioLoader.load("mp3/popup1.mp3",function(buffer){
	// 	sound.setBuffer(buffer)
	// 	sound.setLoop(false)
	// 	sound.setVolume(1)
	// 	sound.play()
	// })
	// create an AudioListener and add it to the camera
	var listener = new THREE.AudioListener();
	camera.add( listener );

	// create a global audio source
	sound = new THREE.Audio( listener );

	// load a sound and set it as the Audio object's buffer
	var audioLoader = new THREE.AudioLoader();
	audioLoader.load( 'mp3/popup1.mp3', function( buffer ) {
		sound.setBuffer( buffer );
		sound.setLoop( false );
		sound.setVolume( 0.5 );
		sound.play();
	});
}