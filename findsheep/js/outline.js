var composer, effectFXAA, outlinePass;
var params1 = {
				edgeStrength: 3.0,
				edgeGlow: 0.0,
				edgeThickness: 1.0,
				pulsePeriod: 0,
				rotate: false,
				usePatternTexture: false
			};
var selectedObjects = [];

function setOutline () {


	// body...
	composer = new THREE.EffectComposer( renderer );
	var renderPass = new THREE.RenderPass( scene, camera );
	composer.addPass( renderPass );
	outlinePass = new THREE.OutlinePass( new THREE.Vector2( window.innerWidth, window.innerHeight ), scene, camera );
	composer.addPass( outlinePass );
	// var onLoad = function ( texture ) {
	// 	outlinePass.patternTexture = texture;
	// 	texture.wrapS = THREE.RepeatWrapping;
	// 	texture.wrapT = THREE.RepeatWrapping;
	// };
	// var loader = new THREE.TextureLoader();
	// loader.load( 'textures/tri_pattern.jpg', onLoad );
	effectFXAA = new THREE.ShaderPass( THREE.FXAAShader );
	effectFXAA.uniforms[ 'resolution' ].value.set( 1 / window.innerWidth, 1 / window.innerHeight );
	effectFXAA.renderToScreen = true;
	composer.addPass( effectFXAA );

	outlinePass.edgeStrength = params1.edgeStrength
	outlinePass.edgeGlow = params1.edgeGlow
	outlinePass.edgeThickness = params1.edgeThickness
	outlinePass.pulsePeriod = params1.pulsePeriod
	outlinePass.visibleEdgeColor.set( '#ffffff' );//要黑边改OutlinePass.js 560
	outlinePass.hiddenEdgeColor.set( '#000000' );


	outlinePass.selectedObjects = [objs.island]
}